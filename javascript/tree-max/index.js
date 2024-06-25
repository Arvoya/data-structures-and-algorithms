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

     findMax() {
          let maxNumb = 0;
          const traverse = (node) => {
               if (node) {
                    if (node.value > maxNumb) {
                         maxNumb = node.value;
                    }
                    traverse(node.left);
                    traverse(node.right);
               }
          };
          traverse(this.root);
          return maxNumb;
     }
}
