const { breadthFirst } = require("../index");
const { BinarySearchTree } = require("../../trees/index");

describe("Breadth First Traversal", () => {
     it("Should return an array of values in the tree in breadth first order", () => {
          const binarySearchTree = new BinarySearchTree();
          binarySearchTree.add(10);
          binarySearchTree.add(5);
          binarySearchTree.add(15);
          binarySearchTree.add(3);
          binarySearchTree.add(7);
          binarySearchTree.add(13);
          binarySearchTree.add(17);

          const breadthFirstArray = breadthFirst(binarySearchTree);
          expect(breadthFirstArray).toEqual([10, 5, 15, 3, 7, 13, 17]);
     });

     it("Should return an array of values in the tree in breadth first order", () => {
          const binarySearchTree = new BinarySearchTree();
          binarySearchTree.add(10);
          binarySearchTree.add(5);
          binarySearchTree.add(15);
          binarySearchTree.add(3);
          binarySearchTree.add(7);
          binarySearchTree.add(13);
          binarySearchTree.add(17);
          binarySearchTree.add(1);
          binarySearchTree.add(9);
          binarySearchTree.add(11);
          binarySearchTree.add(19);

          const breadthFirstArray = breadthFirst(binarySearchTree);
          expect(breadthFirstArray).toEqual([
               10, 5, 15, 3, 7, 13, 17, 1, 9, 11, 19,
          ]);
     });
});
