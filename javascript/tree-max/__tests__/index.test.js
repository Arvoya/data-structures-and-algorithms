const { BinarySearchTree } = require("../index");

describe("Find Max method in BinaryTree Class", () => {
     it("Should find max number within tree", () => {
          const binaryTree = new BinarySearchTree();
          binaryTree.add(10);
          binaryTree.add(20);
          binaryTree.add(5);
          binaryTree.add(30);
          binaryTree.add(25);

          const max = binaryTree.findMax();
          expect(max).toBe(30);
     });

     it("Should return 'no tree found' for an empty tree", () => {
          const binaryTree = new BinarySearchTree();
          const max = binaryTree.findMax();
          expect(max).toBe("no tree found");
     });

     it("Should find max number within tree with all negative values", () => {
          const binaryTree = new BinarySearchTree();
          binaryTree.add(-10);
          binaryTree.add(-20);
          binaryTree.add(-5);
          binaryTree.add(-30);
          binaryTree.add(-25);

          const max = binaryTree.findMax();
          expect(max).toBe(-5);
     });

     it("Should find max number within tree with mixed positive and negative values", () => {
          const binaryTree = new BinarySearchTree();
          binaryTree.add(-10);
          binaryTree.add(20);
          binaryTree.add(-5);
          binaryTree.add(30);
          binaryTree.add(25);

          const max = binaryTree.findMax();
          expect(max).toBe(30);
     });

     it("Should find max number within tree with repeated values", () => {
          const binaryTree = new BinarySearchTree();
          binaryTree.add(10);
          binaryTree.add(20);
          binaryTree.add(20);
          binaryTree.add(5);
          binaryTree.add(30);
          binaryTree.add(25);
          binaryTree.add(25);

          const max = binaryTree.findMax();
          expect(max).toBe(30);
     });
});
