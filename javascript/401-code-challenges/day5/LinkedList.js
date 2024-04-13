class Node {
     // NOTE: Our container that stores valuesk, and references to another node
     constructor(value) {
          this.value = value;
          this.next = null;
     }
}

// NOTE: Singly linked list class, stores a head node.
class LinkedList {
     constructor() {
          this.head = null;
     }

     // NOTE: Read all values in the list
     traverse(value) {
          let current = this.head;
          let values = [];
          while (current) {
               values.push(current.value);
               if (value && current.value === value) {
                    return true;
               }
               current = current.next;
          }
          if (value) {
               return false;
          }
          return values.join(", ");
     }

     // NOTE: Add new value to the head of the linked list
     prepend(value) {
          let node = new Node(value);
          if (this.head instanceof Node) {
               node.next = this.head;
          }
          this.head = node;
     }

     //NOTE: Add new value to the tail
     append(value) {
          let node = new Node(value);
          if (this.head === null) {
               this.head = node;
          } else {
               let current = this.head;
               while (current.next !== null) {
                    current = current.next;
               }
               current.next = node;
          }
     }

     //NOTE: Add value within LinkedList
     insertBefore(targetValue, value) {
          let newNode = new Node(value);
          if (this.head === null) {
               return;
          }

          if (this.head.value === targetValue) {
               newNode.next = this.head;
               this.head = newNode;
               return;
          }

          let current = this.head;
          while (current.next !== null && current.next.value !== targetValue) {
               current = current.next;
          }

          if (current.next !== null) {
               newNode.next = current.next;
               current.next = newNode;
          }
     }

     insertAfter(targetValue, value) {
          let newNode = new Node(value);
          let current = this.head;

          while (current !== null && current.value !== targetValue) {
               current = current.next;
          }

          if (current !== null) {
               newNode.next = current.next;
               current.next = newNode;
          }
     }
}

module.exports = LinkedList;
