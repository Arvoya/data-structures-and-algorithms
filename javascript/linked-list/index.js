"use strict";

class Node {
     constructor(value) {
          this.value = value;
          this.next = null;
     }
}

class LinkedList {
     constructor() {
          this.head = null;
          this.tail = null;
     }

     traverse(value) {
          let current = this.head;
          let values = [];

          while (current) {
               values.push(current.value);
               if (current.value === value) {
                    return true;
               }
               current = current.next;
          }
          if (value) {
               return false;
          }
          return values.join(", ");
     }

     prepend(value) {
          const newNode = new Node(value);
          newNode.next = this.head;
          this.head = newNode;
     }

     append(value) {
          const newNode = new Node(value);
          if (!this.head) {
               this.head = newNode;
               this.tail = newNode;
          } else {
               this.tail.next = newNode;
               this.tail = newNode;
          }
     }

     insertBefore(value, newValue) {
          let current = this.head;
          let previous = null;
          while (current) {
               if (current.value === value) {
                    const newNode = new Node(newValue);
                    if (previous) {
                         previous.next = newNode;
                         newNode.next = current;
                    } else {
                         this.prepend(newValue);
                    }
                    return;
               }
               previous = current;
               current = current.next;
          }
     }

     insertAfter(value, newValue) {
          let current = this.head;
          while (current) {
               if (current.value === value) {
                    const newNode = new Node(newValue);
                    newNode.next = current.next;
                    current.next = newNode;
                    if (current === this.tail) {
                         this.tail = newNode;
                    }
                    return;
               }
               current = current.next;
          }
     }

     kthFromEnd(k) {
          if (k < 0) {
               return null; // Handle negative k values immediately
          }

          let fast = this.head;
          let slow = this.head;
          let index = 0;

          // Move fast k nodes ahead first
          while (index < k && fast !== null) {
               fast = fast.next;
               index++;
          }

          // If k is exactly the length of the list or fast is null when the index is still less than k
          if (fast === null && index < k) {
               return null; // k is greater than the number of nodes in the list
          }

          // Move both pointers until fast reaches the end of the list
          while (fast !== null && fast.next !== null) {
               slow = slow.next;
               fast = fast.next;
          }

          // If fast was able to reach the end, return the value at slow
          return fast === null ? null : slow.value;
     }
     static zipLists(list1, list2) {
          const zippedList = new LinkedList();
          let current1 = list1.head;
          let current2 = list2.head;
          let tail = null;

          // Alternatingly append nodes from both lists to the new list
          while (current1 || current2) {
               if (current1) {
                    if (tail) {
                         tail.next = current1;
                    } else {
                         zippedList.head = current1;
                    }
                    tail = current1;
                    current1 = current1.next;
               }

               if (current2) {
                    if (tail) {
                         tail.next = current2;
                    } else {
                         zippedList.head = current2;
                    }
                    tail = current2;
                    current2 = current2.next;
               }
          }

          // Set the tail of the new list
          zippedList.tail = tail;

          return zippedList;
     }
}

module.exports = LinkedList;
