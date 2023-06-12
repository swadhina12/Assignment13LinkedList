//Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

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
    
    reverseAlternateKNodes(k) {
      if (this.head === null || k <= 1) {
        return;
      }
      
      this.head = this.reverseAlternateKNodesUtil(this.head, k, true);
    }
    
    reverseAlternateKNodesUtil(current, k, reverse) {
      if (current === null) {
        return null;
      }
      
      let count = 0;
      let prev = null;
      let next = null;
      let currentPtr = current;
      
      // Reverse k nodes if reverse is true
      if (reverse) {
        while (count < k && currentPtr !== null) {
          next = currentPtr.next;
          currentPtr.next = prev;
          prev = currentPtr;
          currentPtr = next;
          count++;
        }
        
        // Skip the next k nodes and call the function recursively
        if (next !== null) {
          current.next = this.reverseAlternateKNodesUtil(next, k, !reverse);
        }
      } else {
        // Skip the next k nodes and call the function recursively
        while (count < k && currentPtr !== null) {
          current.next = currentPtr;
          current = currentPtr;
          currentPtr = currentPtr.next;
          count++;
        }
        
        if (currentPtr !== null) {
          current.next = this.reverseAlternateKNodesUtil(currentPtr, k, !reverse);
        } else {
          current.next = null;
        }
      }
      
      return prev;
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
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  list.append(6);
  list.append(7);
  list.append(8);
  list.append(9);
  
  list.reverseAlternateKNodes(3);
  list.printList();
  