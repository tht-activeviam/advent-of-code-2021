const originalConsole = console;
const logger = {
  log(...message) {
    originalConsole.log(...message);
  },
};

const rawInput = `yb-pi
jg-ej
yb-KN
LD-start
end-UF
UF-yb
yb-xd
qx-yb
xd-end
jg-KN
start-qx
start-ej
qx-LD
jg-LD
xd-LD
ej-qx
end-KN
DM-xd
jg-yb
ej-LD
qx-UF
UF-jg
qx-jg
xd-UF`;
const input = rawInput.split('\n').map((e) => {
  const pair = e.split('-');
  if (pair[1].toLowerCase() === 'start' || pair[0].toLowerCase() === 'end') {
    return pair.reverse();
  }
  return pair;
});

const refinedInput = [];
input.forEach((pair) => {
  if (pair.some((e) => ['start', 'end'].includes(e))) {
    refinedInput.push(pair);
  } else {
    refinedInput.push([...pair]);
    refinedInput.push([...pair.reverse()]);
  }
});

const pathMap = {};
refinedInput.forEach(([from, to]) => {
  if (from in pathMap) {
    pathMap[from].push(to);
  } else {
    pathMap[from] = [to];
  }
});

const generatePaths = (
  currentPath = [],
  smallCave = undefined,
  accum = [[]]
) => {
  const from = currentPath[currentPath.length - 1];
  if (from && from in pathMap) {
    pathMap[from].forEach((to) => {
      if (to === to.toLowerCase() && currentPath.includes(to)) {
        if (smallCave === undefined) {
          // Allow to pass a single small cave twice
          generatePaths([...currentPath, to], to, accum);
        }
      } else {
        generatePaths([...currentPath, to], smallCave, accum);
      }
    });
  } else {
    accum.push(currentPath);
  }
};

const result = [];
generatePaths(['start'], undefined, result);

logger.log(result.filter((path) => path[path.length - 1] === 'end').length);
