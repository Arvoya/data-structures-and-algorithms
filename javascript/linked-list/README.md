# Linked List

## Approach & Efficiency

We had a wonderful lecture going over linked lists and how they work. I was able
to follow along and understand the concepts. I was able to implement the linked
list and the tests with ease. I was able to get the tests to pass and the linked
list to work as expected.

## Tests

- Can successfully instantiate an empty linked list
- Can properly insert into the linked list
- The head property will properly point to the first node in the linked list
- Can properly insert multiple nodes into the linked list
- Will return true when finding a value within the linked list that exists
- Will return false when searching for a value in the linked list that does not
exist.
- Can properly return a collection of all the values that exist in the linked list
- Can insert a node before a node located in a linked list
- Can insert a node after a node located in a linked list

## Challenges

### Append | Insert Before | Insert After

#### Whiteboard

![whiteboard](./assets/before-after.png)

#### Approach & Efficiency

This one was a bit tricky, and I ended up using help from AI. I think I understand
the solution, but I'll be watching some lectures on linked lists.

As for my efficiency, I think I did well. I was able to get the tests to pass
and the linked list to work as expected. I think the big O is O(n) for all of
these methods.

#### Solution

```javascript

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
```
