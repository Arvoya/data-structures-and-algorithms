const PseudoQueue = require("../class");

describe("enqueue and dequeue functions", () => {
     it("should return correct stack with value inserted", () => {
          let queue = new PseudoQueue();
          queue.stack1 = [10, 15, 20];

          expect(queue.enqueue(5)).toEqual([5, 10, 15, 20]);
     });

     it("should return correct stack with value taken out", () => {
          let queue = new PseudoQueue();
          queue.stack1 = [5, 10, 15, 20];

          expect(queue.dequeue()).toEqual([5, 10, 15]);
     });
});
