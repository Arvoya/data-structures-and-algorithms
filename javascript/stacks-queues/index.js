class Node {
     constructor(value) {
          this.value = value;
          this.next = null;
     }
}

class Stack {
     constructor() {
          this.top = null;
     }

     push(value) {
          const newNode = new Node(value);
          newNode.next = this.top;
          this.top = newNode;
     }

     pop() {
          if (this.isEmpty()) {
               return "Queue is empty. Cannot peek.";
          }
          const poppedValue = this.top.value;
          this.top = this.top.next;
          return poppedValue;
     }

     peek() {
          if (this.isEmpty()) {
               return "Queue is empty. Cannot peek.";
          }
          return this.top.value;
     }

     isEmpty() {
          return this.top === null;
     }
}

class Queue {
     constructor() {
          this.front = null;
          this.back = null;
     }

     enqueue(value) {
          const newNode = new Node(value);
          if (this.isEmpty()) {
               this.front = newNode;
               this.back = newNode;
          } else {
               this.back.next = newNode;
               this.back = newNode;
          }
     }

     dequeue() {
          if (this.isEmpty()) {
               return "Queue is empty. Cannot peek.";
          }
          const dequeuedValue = this.front.value;
          this.front = this.front.next;
          if (!this.front) {
               this.back = null;
          }
          return dequeuedValue;
     }

     peek() {
          if (this.isEmpty()) {
               return "Queue is empty. Cannot peek.";
          }
          return this.front.value;
     }

     isEmpty() {
          return this.front === null;
     }
}

module.exports = { Node, Stack, Queue };
