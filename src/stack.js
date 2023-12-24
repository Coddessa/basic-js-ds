const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 * Реализуйте стек с заданным интерфейсом через массив.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * добавляет элемент в стек
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 *  возвращает элемент, но не удаляет его, возвращает 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * возвращает верхний элемент из стека и удаляет его, возвращает 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.arrStack = [];
  }

  push(element) {
    this.arrStack.push(element);
  }

  pop() {
    return this.arrStack.length > 0 ? this.arrStack.pop() : undefined;
  }

  peek() {
    return this.arrStack.length > 0
      ? this.arrStack[this.arrStack.length - 1]
      : undefined;
  }
}

module.exports = {
  Stack,
};
