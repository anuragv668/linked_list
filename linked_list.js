class node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    this.head = new node(value, this.head);
    this.size++;
  }

  append(value) {
    if (this.head == null) {
      this.head = new node(value);
      this.size++;
    } else {
      let currentNode = this.head;
      while(currentNode.nextNode) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = new node(value);
      this.size++;
    }
  }

  size() {
    return this.size;
  }

  head() {
    return this.head;
  }

  tail() {
    let currentNode = this.head;
    while(currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  
  pop() {
    let currentNode = this.head;
    let lastNode = null;
    while(currentNode.nextNode) {
      lastNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    lastNode.nextNode = null;
    this.size--;
  }

  at(index) {
    let ans = null;
    let node = this.head;
    let i = 1;
    while(node && i <= index) {
      if (i == index) {
        ans = node;
        break;
      }
      node = node.nextNode;
      i++;
    }
    return ans;
  }

  contains(value) {
    let flag = false;
    let node = this.head;
    while(node) {
      if (node.value == value) {
        flag = true;
        break
      } else {
        node = node.nextNode;
      }
    }

    return flag;
  }
  
  find(value) { 
    let index = 1;
    let node = this.head;
    while(node) {
      if (node.value == value) {
        return index;
      }
      index++;
      node = node.nextNode;
    }
    return null;
  }
  
  toString() {
    let str = "";
    let node = this.head;
    while(node) {
      str = `${str}( ${node.value} ) -> `;
      node = node.nextNode;
    }
    str = `${str}null`;
    return str;
  }

}

