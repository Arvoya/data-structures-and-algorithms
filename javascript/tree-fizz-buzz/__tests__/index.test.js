const { K_aryTree, fizzBuzzTree } = require("../index");

describe("FizzBuzz K-ary Tree", () => {
     it("Should return 'no tree found' when input tree is empty", () => {
          const karyTree = new K_aryTree(3);
          const newTree = fizzBuzzTree(karyTree);
          expect(newTree).toBe("no tree found");
     });

     it("Should correctly apply FizzBuzz rules to a k-ary tree", () => {
          const karyTree = new K_aryTree(3);
          karyTree.add(15, null);
          karyTree.add(3, 15);
          karyTree.add(5, 15);
          karyTree.add(7, 15);
          karyTree.add(9, 3);
          karyTree.add(10, 5);
          karyTree.add(8, 7);

          const newTree = fizzBuzzTree(karyTree);

          expect(newTree.root.value).toBe("FizzBuzz");
          expect(newTree.root.children[0].value).toBe("Fizz");
          expect(newTree.root.children[1].value).toBe("Buzz");
          expect(newTree.root.children[2].value).toBe("7");
          expect(newTree.root.children[0].children[0].value).toBe("Fizz");
          expect(newTree.root.children[1].children[0].value).toBe("Buzz");
          expect(newTree.root.children[2].children[0].value).toBe("8");
     });
});
