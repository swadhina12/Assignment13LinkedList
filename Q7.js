//Given a **Doubly Linked List**, the task is to reverse the given Doubly Linked List.
class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
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
        newNode.prev = current;
      }
    }
    
    reverse() {
      let current = this.head;
      let temp = null;
      
      while (current !== null) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        
        current = current.prev;
      }
      
      if (temp !== null) {
        this.head = temp.prev;
      }
    }
    
    printList() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const list = new DoublyLinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  
  console.log("Original List:");
  list.printList();
  
  list.reverse();
  
  console.log("Reversed List:");
  list.printList();
  