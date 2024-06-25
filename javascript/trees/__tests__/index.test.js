const { BinaryTree, BinarySearchTree, Node } = require("../index");

describe("Binary Tree and Binary Search Tree", () => {
     let binaryTree;
     let binarySearchTree;

     beforeEach(() => {
          binaryTree = new BinaryTree();
          binarySearchTree = new BinarySearchTree();
     });

     it("Can successfully instantiate an empty tree", () => {
          expect(binaryTree.root).toBeNull();
     });

     it("Can successfully instantiate a tree with a single root node", () => {
          binaryTree.root = new Node(10);
          expect(binaryTree.root.value).toBe(10);
     });

     it("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
          binarySearchTree.add(10);
          binarySearchTree.add(5);
          binarySearchTree.add(15);
          expect(binarySearchTree.root.value).toBe(10);
          expect(binarySearchTree.root.left.value).toBe(5);
          expect(binarySearchTree.root.right.value).toBe(15);
     });

     it("Can successfully return a collection from a pre-order traversal", () => {
          binarySearchTree.add(10);
          binarySearchTree.add(5);
          binarySearchTree.add(15);
          binarySearchTree.add(3);
          binarySearchTree.add(7);
          expect(binarySearchTree.preOrder()).toEqual([10, 5, 3, 7, 15]);
     });

     it("Can successfully return a collection from an in-order traversal", () => {
          binarySearchTree.add(10);
          binarySearchTree.add(5);
          binarySearchTree.add(15);
          binarySearchTree.add(3);
          binarySearchTree.add(7);
          expect(binarySearchTree.inOrder()).toEqual([3, 5, 7, 10, 15]);
     });

     it("Can successfully return a collection from a post-order traversal", () => {
          binarySearchTree.add(10);
          binarySearchTree.add(5);
          binarySearchTree.add(15);
          binarySearchTree.add(3);
          binarySearchTree.add(7);
          expect(binarySearchTree.postOrder()).toEqual([3, 7, 5, 15, 10]);
     });

     it("Returns true for the contains method, given an existing node value", () => {
          binarySearchTree.add(10);
          binarySearchTree.add(5);
          binarySearchTree.add(15);
          expect(binarySearchTree.contains(10)).toBe(true);
          expect(binarySearchTree.contains(5)).toBe(true);
          expect(binarySearchTree.contains(15)).toBe(true);
     });

     it("Returns false for the contains method, given a non-existing node value", () => {
          binarySearchTree.add(10);
          binarySearchTree.add(5);
          binarySearchTree.add(15);
          expect(binarySearchTree.contains(99)).toBe(false);
     });
});
