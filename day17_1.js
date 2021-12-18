const originalConsole = console;
const logger = {
  log(...message) {
    originalConsole.log(...message);
  },
};

// const targetX = [34, 67];
// const targetY = [-215, -186];
const targetX = [20, 30];
const targetY = [-10, -5];

const isInTarget = ([x, y]) =>
  x >= targetX[0] && x <= targetX[1] && y >= targetY[0] && y <= targetY[1];

const isOverTarget = ([x, y]) => x > targetX[1] || y < targetY[0];

const generatePath = (velocity) => {
  let [velocityX, velocityY] = velocity;
  const path = [];
  path.push([0, 0]);
  while (!isInTarget(path[path.length - 1])) {
    const [x, y] = path[path.length - 1];
    const nextStep = [x + velocityX, y + velocityY];
    if (isOverTarget(nextStep)) {
      return null;
    }

    path.push(nextStep);
    velocityX =
      velocityX > 0 ? velocityX - 1 : velocityX < 0 ? velocityX + 1 : 0;
    velocityY = velocityY - 1;
  }
  return path;
};

// Part 1
const result = [];
for (let vY = 1; vY < Math.abs(targetY[0]); vY++) {
  for (let vX = 1; vX < Math.abs(targetX[1]); vX++) {
    const path = generatePath([vX, vY]);
    path && result.push(path);
  }
}

const maxVelocityYs = result.map((path) => Math.max(...path.map((e) => e[1])));
logger.log(Math.max(...maxVelocityYs));
