//Given a doubly linked list and a position. The task is to delete a node from given position in a doubly linked list.

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
    
    deleteNode(position) {
      if (this.head === null) {
        return;
      }
      
      let current = this.head;
      let count = 1;
      
      // Traverse to the position
      while (count < position && current !== null) {
        current = current.next;
        count++;
      }
      
      if (current === null) {
        // Position exceeds the length of the list
        return;
      }
      
      // Update the prev and next pointers of adjacent nodes
      if (current.prev !== null) {
        current.prev.next = current.next;
      } else {
        this.head = current.next;
      }
      
      if (current.next !== null) {
        current.next.prev = current.prev;
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
  list.append(3);
  list.append(4);
  
  console.log("Original List:");
  list.printList();
  
  list.deleteNode(3);
  
  console.log("Updated List:");
  list.printList();
  