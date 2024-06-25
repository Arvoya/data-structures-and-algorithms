class Node {
     constructor(value) {
          this.value = value;
          this.children = [];
     }
}

class K_aryTree {
     constructor(k) {
          this.root = null;
          this.k = k;
     }

     add(value, parentValue) {
          const newNode = new Node(value);
          if (!this.root) {
               this.root = newNode;
               return;
          }

          const traverse = (node) => {
               if (node.value === parentValue) {
                    if (node.children.length < this.k) {
                         node.children.push(newNode);
                         return true;
                    }
               }
               for (let child of node.children) {
                    if (traverse(child)) {
                         return true;
                    }
               }
               return false;
          };

          traverse(this.root);
     }
}

function fizzBuzzTree(tree) {
     if (!tree.root) {
          return "no tree found";
     }

     const newTree = new K_aryTree(tree.k);
     newTree.root = new Node(fizzBuzzValue(tree.root.value));

     const traverse = (oldNode, newNode) => {
          for (let child of oldNode.children) {
               const newChild = new Node(fizzBuzzValue(child.value));
               newNode.children.push(newChild);
               traverse(child, newChild);
          }
     };

     traverse(tree.root, newTree.root);
     return newTree;
}

function fizzBuzzValue(value) {
     if (value % 3 === 0 && value % 5 === 0) {
          return "FizzBuzz";
     } else if (value % 3 === 0) {
          return "Fizz";
     } else if (value % 5 === 0) {
          return "Buzz";
     } else {
          return value.toString();
     }
}

module.exports = { Node, K_aryTree, fizzBuzzTree };
