const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 * Реализуйте очередь с заданным интерфейсом через связанный список
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 * 
 * enqueue(value)— помещает элемент valueв конец очереди 
 * dequeueизвлекает значение из начала очереди и удаляет его  
 * getUnderlyingList— возвращает базовый связанный список
 * 
 * расширение ListNode:
 * class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const valueOut = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return valueOut;
  }
}

module.exports = {
  Queue,
};
