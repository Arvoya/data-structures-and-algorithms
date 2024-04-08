const LinkedList = require("../LinkedList");

test("Can successfully instantiate an empty linked list", () => {
     let list = new LinkedList();
     expect(list.head).toBeNull();
});
test("Can properly insert into the linked list", () => {
     let list = new LinkedList();
     list.prepend("sandwhich");
     expect(list.head.value).toBe("sandwhich");
});
test("The head property will properly point to the first node in the linked list", () => {
     let list = new LinkedList();
     list.prepend("sandwhich");
     expect(list.head.value).toBe("sandwhich");
});
test("Can properly insert multiple nodes into the linked list", () => {
     let list = new LinkedList();
     list.prepend("sandwhich");
     list.prepend("boat");
     expect(list.head.value).toBe("boat");
     expect(list.head.next.value).toBe("sandwhich");
});
test("Will return true when finding a value within the linked list that exists", () => {
     let list = new LinkedList();
     list.prepend("sandwhich");
     list.prepend("boat");
     expect(list.traverse("sandwhich")).toBe(true);
});
test("Will return false when searching for a value in the linked list that does not exist", () => {
     let list = new LinkedList();
     list.prepend("sandwhich");
     list.prepend("boat");
     expect(list.traverse("first aid")).toBe(false);
});
test("Can properly return a collection of all the values that exist in the linked list", () => {
     let list = new LinkedList();
     list.prepend("sandwhich");
     list.prepend("boat");
     list.prepend("first aid");
     expect(list.traverse()).toBe("first aid, boat, sandwhich");
});
