//Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  function mergeSortedLists(a, b) {
    if (a === null) {
      return b;
    }
    if (b === null) {
      return a;
    }
  
    let result = null;
    if (a.data <= b.data) {
      result = a;
      result.next = mergeSortedLists(a.next, b);
    } else {
      result = b;
      result.next = mergeSortedLists(a, b.next);
    }
  
    return result;
  }
  
  // Example usage:
  // Linked list a: 5->10->15
  const a = new Node(5);
  a.next = new Node(10);
  a.next.next = new Node(15);
  
  // Linked list b: 2->3->20
  const b = new Node(2);
  b.next = new Node(3);
  b.next.next = new Node(20);
  
  const mergedList = mergeSortedLists(a, b);
  printList(mergedList);
  
  function printList(head) {
    let current = head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  