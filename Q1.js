//Given two linked list of the same size, the task is to create a new linked list using those linked lists. The condition is that the greater node among both linked list will be added to the new linked list.

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
    
    append(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  }
  
  function createNewLinkedList(list1, list2) {
    if (list1 === null || list2 === null) {
      return null;
    }
    
    const newList = new LinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    
    while (current1 !== null && current2 !== null) {
      if (current1.data >= current2.data) {
        newList.append(current1.data);
      } else {
        newList.append(current2.data);
      }
      current1 = current1.next;
      current2 = current2.next;
    }
    
    return newList;
  }
  
  // Example usage:
  const list1 = new LinkedList();
  list1.append(5);
  list1.append(2);
  list1.append(9);
  
  const list2 = new LinkedList();
  list2.append(3);
  list2.append(8);
  list2.append(4);
  
  const newList = createNewLinkedList(list1, list2);
  let current = newList.head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
  