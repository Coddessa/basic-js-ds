const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 * Реализуйте простое дерево бинарного поиска в соответствии с описанием задачи
 * использование Node из расширений
 *
 * root— вернуть корневой узел дерева
 * add(data)— добавить узел с data в дерево
 * has(data)— возвращает true, если узел с указанным dataсуществует в дереве и falseв противном случае
 * find(data)— возвращает узел data , если узел существует в data дереве и null в противном случае
 * remove(data)— удаляет узел с dataиз дерева, если узел с dataсуществует
 * min— возвращает минимальное значение, хранящееся в дереве (или nullесли дерево не имеет узлов )
 * max— возвращает максимальное значение , хранящееся в дереве (или nullесли дерево не имеет узлов )
 * 
 * class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
 *
 **/

class BinarySearchTree {
  constructor() {
    this.nodeRoot = null;
  }

  root() {
    return this.nodeRoot;
  }

  add(data) {
    this.nodeRoot = insertIn(this.nodeRoot, data);

    function insertIn(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = insertIn(node.left, data);
      } else {
        node.right = insertIn(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return searchIn(this.nodeRoot, data);

    function searchIn(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchIn(node.left, data);
      } else {
        return searchIn(node.right, data);
      }
    }
  }

  find(data) {
    return findIn(this.nodeRoot, data);

    function findIn(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return findIn(node.left, data);
      } else {
        return findIn(node.right, data);
      }
    }
  }

  remove(data) {
    this.nodeRoot = removeIn(this.nodeRoot, data);

    function removeIn(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeIn(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeIn(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
      }

      if (!node.left) {
        node = node.right;
        return node;
      }

      if (!node.right) {
        node = node.left;
        return node;
      }

      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left;
      }
      node.data = minFromRight.data;

      node.right = removeIn(node.right, minFromRight.data);

      return node;
    }
  }

  min() {
    if (!this.nodeRoot) {
      return;
    }

    let node = this.nodeRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.nodeRoot) {
      return;
    }

    let node = this.nodeRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
