const originalConsole = console;
const logger = {
  log(...message) {
    originalConsole.log(...message);
  },
};

const rawInput = `2682551651
3223134263
5848471412
7438334862
8731321573
6415233574
5564726843
6683456445
8582346112
4617588236`;
const input = rawInput
  .split('\n')
  .map((e) => e.split('').map((e) => Number(e)));

const getNearBy = (rowIndex, colIndex, values = [[]]) => {
  const result = [];
  if (values[rowIndex - 1]) {
    if (values[rowIndex - 1][colIndex - 1]) {
      // Upper Left
      result.push([rowIndex - 1, colIndex - 1]);
    }
    if (values[rowIndex - 1][colIndex]) {
      // Up
      result.push([rowIndex - 1, colIndex]);
    }
    if (values[rowIndex - 1][colIndex + 1]) {
      // Upper Right
      result.push([rowIndex - 1, colIndex + 1]);
    }
  }
  if (values[rowIndex][colIndex - 1]) {
    // Left
    result.push([rowIndex, colIndex - 1]);
  }
  if (values[rowIndex][colIndex + 1]) {
    // Right
    result.push([rowIndex, colIndex + 1]);
  }
  if (values[rowIndex + 1]) {
    if (values[rowIndex + 1][colIndex - 1]) {
      // Lower Left
      result.push([rowIndex + 1, colIndex - 1]);
    }
    if (values[rowIndex + 1][colIndex]) {
      // Down
      result.push([rowIndex + 1, colIndex]);
    }
    if (values[rowIndex + 1][colIndex + 1]) {
      // Lower Right
      result.push([rowIndex + 1, colIndex + 1]);
    }
  }
  return result;
};

const totalSteps = 100;
const totalFlashes = [];
for (let index = 0; index < totalSteps; index++) {
  const flashesOfStep = [];

  input.forEach((line, rowIndex) =>
    line.forEach((value, colIndex) => {
      if (value < 9) {
        input[rowIndex][colIndex] = value + 1;
      } else {
        input[rowIndex][colIndex] = 0;
        flashesOfStep.push([rowIndex, colIndex]);
      }
    })
  );

  const flashesToProcess = [...flashesOfStep];

  while (flashesToProcess.length > 0) {
    const [rowIndex, colIndex] = flashesToProcess.pop();
    const nearByPoints = getNearBy(rowIndex, colIndex, input);
    for (const [x, y] of nearByPoints) {
      const value = input[x][y];
      if (value === 0) {
        continue;
      }
      if (value < 9) {
        input[x][y] = value + 1;
      } else {
        input[x][y] = 0;
        flashesToProcess.push([x, y]);
        flashesOfStep.push([x, y]);
      }
    }
  }
  totalFlashes.push(...flashesOfStep);
}

const result = totalFlashes.length;
logger.log(result);
