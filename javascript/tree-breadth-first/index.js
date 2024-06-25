function breadthFirst(tree) {
     if (!tree.root) {
          return "no tree found";
     }

     const queue = [tree.root];
     const result = [];

     while (queue.length > 0) {
          const currentNode = queue.shift();
          result.push(currentNode.value);

          if (currentNode.left) {
               queue.push(currentNode.left);
          }

          if (currentNode.right) {
               queue.push(currentNode.right);
          }
     }

     return result;
}

module.exports = { breadthFirst };
