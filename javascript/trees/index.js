class Node {
     constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
     }
}

class BinaryTree {
     constructor() {
          this.root = null;
     }

     preOrder() {
          const result = [];
          const traverse = (node) => {
               if (node) {
                    result.push(node.value);
                    traverse(node.left);
                    traverse(node.right);
               }
          };
          traverse(this.root);
          return result;
     }

     inOrder() {
          const result = [];
          const traverse = (node) => {
               if (node) {
                    traverse(node.left);
                    result.push(node.value);
                    traverse(node.right);
               }
          };
          traverse(this.root);
          return result;
     }

     postOrder() {
          const result = [];
          const traverse = (node) => {
               if (node) {
                    traverse(node.left);
                    traverse(node.right);
                    result.push(node.value);
               }
          };
          traverse(this.root);
          return result;
     }
}

class BinarySearchTree extends BinaryTree {
     add(value) {
          const newNode = new Node(value);
          if (!this.root) {
               this.root = newNode;
          } else {
               let current = this.root;
               while (current) {
                    if (value > current.value) {
                         if (!current.right) {
                              current.right = newNode;
                              return;
                         }
                         current = current.right;
                    } else {
                         if (!current.left) {
                              current.left = newNode;
                              return;
                         }
                         current = current.left;
                    }
               }
          }
     }
     contains(value) {
          let current = this.root;
          while (current) {
               if (current.value === value) {
                    return true;
               }
               if (value > current.value) {
                    current = current.right;
               } else {
                    current = current.left;
               }
          }
          return false;
     }
}
