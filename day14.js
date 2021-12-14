const originalConsole = console;
const logger = {
  log(...message) {
    originalConsole.log(...message);
  },
};

// let polymerTemplate = 'NNCB';
// const rawRules = `CH -> B
// HH -> N
// CB -> H
// NH -> C
// HB -> C
// HC -> B
// HN -> C
// NN -> C
// BH -> H
// NC -> B
// NB -> B
// BN -> B
// BB -> N
// BC -> B
// CC -> N
// CN -> C`;
const rawTemplate = `SNPVPFCPPKSBNSPSPSOF`;
const rawRules = `CF -> N
NK -> B
SF -> B
HV -> P
FN -> S
VV -> F
FO -> F
VN -> V
PV -> P
FF -> P
ON -> S
PB -> S
PK -> P
OO -> P
SP -> F
VF -> H
OV -> C
BN -> P
OH -> H
NC -> F
BH -> N
CS -> C
BC -> N
OF -> N
SN -> B
FP -> F
FV -> K
HP -> H
VB -> P
FH -> F
HF -> P
BB -> O
HH -> S
PC -> O
PP -> B
VS -> B
HC -> H
NS -> N
KF -> S
BO -> V
NP -> S
NF -> K
BS -> O
KK -> O
VC -> V
KP -> K
CK -> P
HN -> F
KN -> H
KH -> N
SB -> S
NO -> K
HK -> H
BF -> V
SV -> B
CV -> P
CO -> P
FC -> O
CP -> H
CC -> N
CN -> P
SK -> V
SS -> V
VH -> B
OS -> N
FB -> H
NB -> N
SC -> K
NV -> H
HO -> S
SO -> P
PH -> C
VO -> O
OB -> O
FK -> S
PN -> P
VK -> O
NH -> N
OC -> B
BP -> O
PF -> F
KB -> K
KV -> B
PO -> N
NN -> K
CH -> O
KC -> P
OP -> V
VP -> F
OK -> P
FS -> K
CB -> S
HB -> N
KS -> O
BK -> C
BV -> O
SH -> H
PS -> N
HS -> K
KO -> N`;
const rulesInput = {};
rawRules.split('\n').forEach((e) => {
  const [key, value] = e.split(' -> ');
  rulesInput[key] = [key[0] + value, value + key[1]];
});

// Create occurence map from template input.
// eg. { SN: 1, NP: 2 }
let templateMap = {};
rawTemplate.split('').forEach((value, index, array) => {
  const nextValue = array[index + 1];
  if (nextValue) {
    const key = value + nextValue;
    if (key in templateMap) {
      templateMap[key] += 1;
    } else {
      templateMap[key] = 1;
    }
  }
});

const NO_OF_STEPS = 40; // Part1 = 10, Part2 = 40

for (let index = 0; index < NO_OF_STEPS; index += 1) {
  const newMap = {};
  Object.entries(templateMap).forEach(([key, value]) => {
    if (key in rulesInput) {
      const [leftKey, rightKey] = rulesInput[key];
      newMap[leftKey] = leftKey in newMap ? newMap[leftKey] + value : value;
      newMap[rightKey] = rightKey in newMap ? newMap[rightKey] + value : value;
    } else {
      newMap[key] = key in newMap ? newMap[key] + value : value;
    }
  });

  templateMap = newMap;
}

const occurenceMap = {};
Object.entries(templateMap).forEach(([pair, count]) => {
  pair.split('').forEach((e) => {
    if (e in occurenceMap) {
      occurenceMap[e] += count;
    } else {
      occurenceMap[e] = count;
    }
  });
});

const results = Object.values(occurenceMap);
const maxOccurence = Math.ceil(Math.max(...results) / 2);
const minOccurence = Math.ceil(Math.min(...results) / 2);

logger.log('Result', maxOccurence - minOccurence);
