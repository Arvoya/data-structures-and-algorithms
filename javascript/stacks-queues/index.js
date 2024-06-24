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
               throw new StackEmptyException("Stack is empty. Cannot pop.");
          }
          const poppedValue = this.top.value;
          this.top = this.top.next;
          return poppedValue;
     }

     peek() {
          if (this.isEmpty()) {
               throw new StackEmptyException("Stack is empty. Cannot peek.");
          }
          return this.top.value;
     }

     isEmpty() {
          return this.top === null;
     }
}
