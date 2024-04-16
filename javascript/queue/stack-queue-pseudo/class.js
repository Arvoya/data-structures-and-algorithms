class PseudoQueue {
     constructor() {
          this.stack1 = [];
          this.stack2 = [];
     }

     enqueue(value) {
          let stack = this.stack1;
          stack.unshift(value);

          return stack;
     }

     dequeue() {
          let stack = this.stack1;
          stack.pop(stack[-1]);

          return stack;
     }
}

module.exports = PseudoQueue;
