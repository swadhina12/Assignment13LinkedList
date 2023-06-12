//Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

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
    
    deleteLastOccurrence(key) {
      if (this.head === null) {
        return;
      }
      
      let lastOccurrence = null;
      let prev = null;
      let current = this.head;
      let prevLastOccurrence = null;
      
      while (current !== null) {
        if (current.data === key) {
          lastOccurrence = current;
          prevLastOccurrence = prev;
        }
        
        prev = current;
        current = current.next;
      }
      
      if (lastOccurrence === null) {
        // Key not found in the list
        return;
      }
      
      if (prevLastOccurrence === null) {
        // The last occurrence is the head node
        this.head = this.head.next;
      } else {
        prevLastOccurrence.next = lastOccurrence.next;
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
  list.append(2);
  list.append(4);
  list.append(3);
  list.append(4);
  list.append(6);
  list.append(4);
  list.append(7);
  list.append(4);
  
  list.deleteLastOccurrence(4);
  list.printList();
  