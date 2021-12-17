const originalConsole = console;
const logger = {
  log(...message) {
    originalConsole.log(...message);
  },
};

const hex2bin = (data = '') =>
  data
    .split('')
    .map((i) => parseInt(i, 16).toString(2).padStart(4, '0'))
    .join('');

const bin2Int = (data = []) => parseInt(data.join(''), 2);

// const rawInput = `9C0141080250320F1802104A08`;
const rawInput = `820D4100A1000085C6E8331F8401D8E106E1680021708630C50200A3BC01495B99CF6852726A88014DC9DBB30798409BBDF5A4D97F5326F050C02F9D2A971D9B539E0C93323004B4012960E9A5B98600005DA7F11AFBB55D96AFFBE1E20041A64A24D80C01E9D298AF0E22A98027800BD4EE3782C91399FA92901936E0060016B82007B0143C2005280146005300F7840385380146006900A72802469007B0001961801E60053002B2400564FFCE25FEFE40266CA79128037500042626C578CE00085C718BD1F08023396BA46001BF3C870C58039587F3DE52929DFD9F07C9731CC601D803779CCC882767E668DB255D154F553C804A0A00DD40010B87D0D6378002191BE11C6A914F1007C8010F8B1122239803B04A0946630062234308D44016CCEEA449600AC9844A733D3C700627EA391EE76F9B4B5DA649480357D005E622493112292D6F1DF60665EDADD212CF8E1003C29193E4E21C9CF507B910991E5A171D50092621B279D96F572A94911C1D200FA68024596EFA517696EFA51729C9FB6C64019250034F3F69DD165A8E33F7F919802FE009880331F215C4A1007A20C668712B685900804ABC00D50401C89715A3B00021516E164409CE39380272B0E14CB1D9004632E75C00834DB64DB4980292D3918D0034F3D90C958EECD8400414A11900403307534B524093EBCA00BCCD1B26AA52000FB4B6C62771CDF668E200CC20949D8AE2790051133B2ED005E2CC953FE1C3004EC0139ED46DBB9AC9C2655038C01399D59A3801F79EADAD878969D8318008491375003A324C5A59C7D68402E9B65994391A6BCC73A5F2FEABD8804322D90B25F3F4088F33E96D74C0139CF6006C0159BEF8EA6FBE3A9CEC337B859802B2AC9A0084C9DCC9ECD67DD793004E669FA2DE006EC00085C558C5134001088E308A20`;
const input = hex2bin(rawInput).split('');
logger.log('input', input.join(''));

const readIntBits = (stream = { data: [], index: 0 }, noOfBits = 1) => {
  const bits = stream.data.slice(stream.index, stream.index + noOfBits);
  stream.index += noOfBits;
  return bits.length === noOfBits ? bin2Int(bits) : null;
};

const readLiteral = (stream = { data: [], index: 0 }) => {
  const literalValue = [];
  let reachEnd = false;
  while (!reachEnd) {
    const group = stream.data.slice(stream.index, stream.index + 5);
    stream.index += 5;
    if (group.length === 5) {
      literalValue.push(...group.slice(1));
      if (group[0] === '0') {
        // last group
        reachEnd = true;
      }
    } else {
      // corrupted case
      return null;
    }
  }
  return bin2Int(literalValue);
};

const readPacket = (stream = { data: [], index: 0 }) => {
  const version = readIntBits(stream, 3);
  if (version === null) return null;
  const typeId = readIntBits(stream, 3);
  if (typeId === null) return null;

  let content;

  if (typeId === 4) {
    content = readLiteral(stream);
  } else {
    const lengthTypeId = readIntBits(stream, 1);
    logger.log('lengthTypeId', lengthTypeId);
    const subPackets = [];
    if (lengthTypeId === 0) {
      const subPacketsLength = readIntBits(stream, 15);
      logger.log('subPacketsLength', subPacketsLength);
      const operatorStream = {
        data: stream.data.slice(stream.index, stream.index + subPacketsLength),
        index: 0,
      };
      while (operatorStream.index < subPacketsLength) {
        const packet = readPacket(operatorStream);
        if (packet) {
          subPackets.push(packet);
        }
      }
      // After reading all the sub packets, move the index
      stream.index += subPacketsLength;
    } else if (lengthTypeId === 1) {
      const noOfsubPackets = readIntBits(stream, 11);
      logger.log('noOfsubPackets', noOfsubPackets);
      for (let index = 0; index < noOfsubPackets; index++) {
        const packet = readPacket(stream);
        if (packet) {
          subPackets.push(packet);
        }
      }
    }

    content = subPackets;
  }

  return { version, typeId, content };
};

const stream = { data: input, index: 0 };
const outermostPacket = readPacket(stream);

// Part 1
const collectVersions = (packet = {}, accum = []) => {
  accum.push(packet.version);
  if (packet.typeId !== 4) {
    packet.content.forEach((e) => collectVersions(e, accum));
  }
};

// Part 2
const evaluatePacket = (packet = {}) => {
  if (packet.typeId === 4) {
    return packet.content;
  }

  const values = packet.content.map((e) => evaluatePacket(e));
  if (packet.typeId === 0) {
    return values.reduce((a, b) => a + b);
  } else if (packet.typeId === 1) {
    return values.reduce((a, b) => a * b);
  } else if (packet.typeId === 2) {
    return Math.min(...values);
  } else if (packet.typeId === 3) {
    return Math.max(...values);
  } else if (packet.typeId === 5) {
    return values[0] > values[1] ? 1 : 0;
  } else if (packet.typeId === 6) {
    return values[0] < values[1] ? 1 : 0;
  } else if (packet.typeId === 7) {
    return values[0] === values[1] ? 1 : 0;
  }

  throw Error('Invalid typeId: ' + packet.typeId);
};

const versions = [];
collectVersions(outermostPacket, versions);

logger.log(outermostPacket);
logger.log(
  'Versions',
  versions.reduce((a, b) => a + b)
);
logger.log('Expression Value', evaluatePacket(outermostPacket));
