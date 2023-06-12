//Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).
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
    
    reverseKNodes(k) {
      if (this.head === null || k <= 1) {
        return;
      }
      
      let current = this.head;
      let prev = null;
      
      while (current !== null) {
        let count = 0;
        let temp = null;
        let next = current;
        
        while (count < k && next !== null) {
          temp = next;
          next = next.next;
          count++;
        }
        
        if (count < k) {
          // There are fewer than k nodes remaining, no need to reverse
          break;
        }
        
        if (prev === null) {
          // Reverse the first group of k nodes, update the head
          this.head = temp;
        } else {
          // Reverse subsequent groups of k nodes
          prev.next = temp;
        }
        
        prev = current;
        while (count > 0) {
          const nextNode = current.next;
          current.next = temp.next;
          temp.next = current;
          current = nextNode;
          count--;
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
  list.append(1);
  list.append(2);
  list.append(2);
  list.append(4);
  list.append(5);
  list.append(6);
  list.append(7);
  list.append(8);
  
  list.reverseKNodes(4);
  list.printList();
  