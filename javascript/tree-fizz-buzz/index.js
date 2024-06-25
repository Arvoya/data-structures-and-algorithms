class Node {
     constructor(value) {
          this.value = value;
          this.children = [];
     }
}

class K_aryTree {
     constructor() {
          this.root = null;
     }

     add(value, parentValue) {
          const newNode = new Node(value);
          if (!this.root) {
               this.root = newNode;
               return;
          }

          this.add(this.root, newNode, parentValue);
     }
}

function fizzBuzzTree(tree) {
     if (!tree.root) {
          return "no tree found";
     }
     let current = tree.root;
     let newTree = new K_aryTree();

     while (current) {
          if (current.value % 3 == 0 && current.value % 5 == 0) {
               newTree.add("FizzBuzz");
          } else if (current.value % 3 == 0) {
               newTree.add("Fizz");
          } else if (current.value % 5 == 0) {
               newTree.add("Buzz");
          } else {
               newTree.add(current.value.toString());
          }
     }
}
