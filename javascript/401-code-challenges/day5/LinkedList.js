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
          let current = this.head;
          while (current.next instanceof Node) {
               current = current.next;
          }
          current.next = node;
     }
}

// let list = new LinkedList();
//
// list.prepend("sandwhich");
// list.append("first aid");
// list.prepend("boat");
//
// list.traverse();

module.exports = LinkedList;
