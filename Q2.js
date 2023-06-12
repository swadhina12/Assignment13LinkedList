//Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

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
    
    removeDuplicates() {
      if (this.head === null) {
        return;
      }
      
      let current = this.head;
      
      while (current.next !== null) {
        if (current.data === current.next.data) {
          current.next = current.next.next;
        } else {
          current = current.next;
        }
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
  const list = new LinkedList();
  list.append(11);
  list.append(11);
  list.append(11);
  list.append(21);
  list.append(43);
  list.append(43);
  list.append(60);
  
  list.removeDuplicates();
  list.printList();
  