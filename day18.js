/**
 * This is the template file for solving https://adventofcode.com/2021
 */

// Create an array of [1,2,3,4]
// const numbers = Array(4).fill().map((element, index) => index + 1);
//
// Sum of array of numbers
// numbers.reduce((a, b) => a + b, 0);
//
// Min/Max of array of numbers
// Math.min(...numbers), Math.max(...numbers)
//
// String <=> Number
// Number("1"), String(1)
//
// Find key in object
// if ("key_1" in {"key_1": 001})
//
// Find middle index of array
// Math.round((array.length - 1) / 2);
//
// Sort array in ASCending
// array.sort((a, b) => a - b));

const originalConsole = console;
const logger = {
  log(...message) {
    originalConsole.log(...message);
  },
};

class Pair {
  constructor(parent, isLeftChild, left, right, isExplodingParent) {
    this.parent = parent;
    this.isLeftChild = isLeftChild;
    this.left = left;
    this.right = right;
    this.isExplodingParent = isExplodingParent;
  }

  addChild(child) {
    if (this.left == null) {
      this.left = child;
      child.isLeftChild = true;
    } else {
      this.right = child;
      child.isLeftChild = false;
    }
  }

  addToLeft(child) {
    if (typeof this.left === 'number') {
      this.left += child;
    } else if (!this.isExplodingParent && typeof this.right === 'number') {
      this.right += child;
    } else if (this.parent) {
      this.parent.addToLeft(child);
    }
  }

  addToRight(child) {
    if (!this.isExplodingParent && typeof this.left === 'number') {
      this.left += child;
    } else if (typeof this.right === 'number') {
      this.right += child;
    } else if (this.parent) {
      this.parent.addToRight(child);
    }
  }

  explode() {
    let isExploded = false;
    if (this.parent?.parent?.parent?.parent) {
      if (typeof this.left === 'number' && typeof this.right === 'number') {
        // Ready to explode!!!
        isExploded = true;
        this.parent.isExplodingParent = true;
        this.parent.addToLeft(this.left);
        this.parent.addToRight(this.right);
        if (this.isLeftChild) {
          this.parent.left = 0;
        } else {
          this.parent.right = 0;
        }
      }
    }

    if (!isExploded) {
      if (this.left instanceof Pair) {
        isExploded = this.left.explode();
      }
    }

    if (!isExploded) {
      if (this.right instanceof Pair) {
        isExploded = this.right.explode();
      }
    }

    return isExploded;
  }

  split() {
    let isSplitted = false;
    if (typeof this.left === 'number' && this.left >= 10) {
      isSplitted = true;
      this.left = new Pair(
        this,
        true,
        Math.floor(this.left / 2),
        Math.ceil(this.left / 2)
      );
    } else if (typeof this.right === 'number' && this.right >= 10) {
      isSplitted = true;
      this.right = new Pair(
        this,
        false,
        Math.floor(this.right / 2),
        Math.ceil(this.right / 2)
      );
    }

    if (!isSplitted) {
      if (this.left instanceof Pair) {
        isSplitted = this.left.split();
      }
    }

    if (!isSplitted) {
      if (this.right instanceof Pair) {
        isSplitted = this.right.split();
      }
    }

    return isSplitted;
  }

  toString() {
    return `[${this.left instanceof Pair ? this.left.toString() : this.left},${
      this.right instanceof Pair ? this.right.toString() : this.right
    }]`;
  }
}

// const rawInput = `[[[[[4,3],4],4],[7,[[8,4],9]]],[1,1]]`;
const rawInput = `[[[[0,7],4],[[7,8],[0,[6,7]]]],[1,1]]`;
const input = rawInput.split('');

let currentPair = null;
let numbers = '';
input.forEach((e) => {
  if (e === '[') {
    const newPair = new Pair(currentPair);
    if (currentPair) {
      currentPair.addChild(newPair);
    }
    currentPair = newPair;
  } else if (e === ',') {
    if (numbers.length > 0) {
      currentPair.left = parseInt(numbers);
      numbers = '';
    }
  } else if (e === ']') {
    if (numbers.length > 0) {
      currentPair.right = parseInt(numbers);
      numbers = '';
    }
    // Jump to parent
    if (currentPair.parent) {
      currentPair = currentPair.parent;
    }
  } else {
    numbers += e;
  }
});

let isExploded = currentPair.explode();
// let isSplitted = currentPair.split();
// let nextAction = 'EXPLODE'; // SPLIT or EXPLODE

logger.log(currentPair.toString());

// while (isExploded || isSplitted) {
//   logger.log(nextAction);
//   if (nextAction === 'SPLIT') {
//     isSplitted = currentPair.split();
//     nextAction = 'EXPLODE';
//   } else if (nextAction === 'EXPLODE') {
//     isExploded = currentPair.explode();
//     nextAction = 'SPLIT';
//   }

//   logger.log(currentPair.toString());
// }

// after addition: [[[[[4,3],4],4],[7,[[8,4],9]]],[1,1]]
// after explode:  [[[[0,7],4],[7,[[8,4],9]]],[1,1]]
// after explode:  [[[[0,7],4],[15,[0,13]]],[1,1]]

// after split:    [[[[0,7],4],[[7,8],[0,13]]],[1,1]]

// after split:    [[[[0,7],4],[[7,8],[0,[6,7]]]],[1,1]]

// after explode:  [[[[0,7],4],[[7,8],[6,0]]],[8,1]]
