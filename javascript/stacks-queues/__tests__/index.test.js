const { Stack, Queue } = require("../index");

describe("Stacks", () => {
     let stack;
     beforeEach(() => {
          stack = new Stack();
     });

     it("Can successfully push onto a stack", () => {
          stack.push(1);
          expect(stack.top.value).toBe(1);
     });

     it("Can successfully push multiple values onto a stack", () => {
          stack.push(1);
          stack.push(2);
          stack.push(3);
          expect(stack.top.value).toBe(3);
     });

     it("Can successfully pop off the stack", () => {
          stack.push(1);
          stack.push(2);
          stack.push(3);
          expect(stack.pop()).toBe(3);
          expect(stack.top.value).toBe(2);
     });

     it("Can successfully empty a stack after multiple pops", () => {
          stack.push(1);
          stack.push(2);
          stack.push(3);
          stack.pop();
          stack.pop();
          stack.pop();
          expect(stack.isEmpty()).toBe(true);
     });

     it("Can successfully peek the next item on the stack", () => {
          stack.push(1);
          stack.push(2);
          stack.push(3);
          expect(stack.peek()).toBe(3);
     });

     it("Can successfully instantiate an empty stack", () => {
          expect(stack.isEmpty()).toBe(true);
     });

     it("Calling pop or peek on empty stack raises exception", () => {
          expect(stack.pop()).toBe("Queue is empty. Cannot peek.");
          expect(stack.peek()).toBe("Queue is empty. Cannot peek.");
     });
});

describe("Queue", () => {
     let queue;
     beforeEach(() => {
          queue = new Queue();
     });

     it("Can successfully enqueue into a queue", () => {
          queue.enqueue(1);
          expect(queue.front.value).toBe(1);
     });

     it("Can successfully enqueue multiple values into a queue", () => {
          queue.enqueue(1);
          queue.enqueue(2);
          queue.enqueue(3);
          expect(queue.front.value).toBe(1);
          expect(queue.back.value).toBe(3);
     });

     it("Can successfully dequeue out of a queue the expected value", () => {
          queue.enqueue(1);
          queue.enqueue(2);
          queue.enqueue(3);
          expect(queue.dequeue()).toBe(1);
          expect(queue.front.value).toBe(2);
     });

     it("Can successfully peek into a queue, seeing the expected value", () => {
          queue.enqueue(1);
          queue.enqueue(2);
          queue.enqueue(3);
          expect(queue.peek()).toBe(1);
     });

     it("Can successfully empty a queue after multiple dequeues", () => {
          queue.enqueue(1);
          queue.enqueue(2);
          queue.enqueue(3);
          queue.dequeue();
          queue.dequeue();
          queue.dequeue();
          expect(queue.isEmpty()).toBe(true);
     });

     it("Can successfully instantiate an empty queue", () => {
          expect(queue.isEmpty()).toBe(true);
     });

     it("Calling dequeue or peek on empty queue raises exception", () => {
          expect(queue.dequeue()).toBe("Queue is empty. Cannot peek.");
          expect(queue.peek()).toBe("Queue is empty. Cannot peek.");
     });
});
