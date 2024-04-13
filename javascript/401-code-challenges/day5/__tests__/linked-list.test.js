const LinkedList = require("../LinkedList");

test("Can successfully instantiate an empty linked list", () => {
     let list = new LinkedList();
     expect(list.head).toBeNull();
});

test("Can properly insert into the linked list", () => {
     let list = new LinkedList();
     list.prepend("sandwich");
     expect(list.head.value).toBe("sandwich");
});

test("The head property will properly point to the first node in the linked list", () => {
     let list = new LinkedList();
     list.prepend("sandwich");
     expect(list.head.value).toBe("sandwich");
});

test("Can properly insert multiple nodes into the linked list", () => {
     let list = new LinkedList();
     list.prepend("sandwich");
     list.prepend("boat");
     expect(list.head.value).toBe("boat");
     expect(list.head.next.value).toBe("sandwich");
});

test("Will return true when finding a value within the linked list that exists", () => {
     let list = new LinkedList();
     list.prepend("sandwich");
     list.prepend("boat");
     expect(list.traverse("sandwich")).toBe(true);
});

test("Will return false when searching for a value in the linked list that does not exist", () => {
     let list = new LinkedList();
     list.prepend("sandwich");
     list.prepend("boat");
     expect(list.traverse("first aid")).toBe(false);
});

test("Can properly return a collection of all the values that exist in the linked list", () => {
     let list = new LinkedList();
     list.prepend("sandwich");
     list.prepend("boat");
     list.prepend("first aid");
     expect(list.traverse()).toBe("first aid, boat, sandwich");
});

test("Can insert a node before the specified node", () => {
     let list = new LinkedList();
     list.append("sandwich");
     list.append("first aid");
     list.insertBefore("first aid", "boat");
     expect(list.head.next.value).toBe("boat");
     expect(list.head.next.next.value).toBe("first aid");
});

test("Does nothing when insertBefore is called and target value not found", () => {
     let list = new LinkedList();
     list.append("sandwich");
     list.insertBefore("boat", "first aid");
     expect(list.traverse()).toBe("sandwich");
});

test("Can insert a node after the specified node", () => {
     let list = new LinkedList();
     list.append("sandwich");
     list.append("boat");
     list.insertAfter("sandwich", "first aid");
     expect(list.head.next.value).toBe("first aid");
     expect(list.head.next.next.value).toBe("boat");
});

test("Does nothing when insertAfter is called and target value not found", () => {
     let list = new LinkedList();
     list.append("sandwich");
     list.insertAfter("boat", "first aid");
     expect(list.traverse()).toBe("sandwich");
});
