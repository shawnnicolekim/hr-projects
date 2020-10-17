/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C -> D -> E -> previousB
 *
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
   return { value: value, next: null };
};



var hasCycle = function(linkedList) {

  // does linkedList have a next node? next next node?
  if (linkedList.next === null || linkedList.next.next === null) {
    return false;
  }

  // set slow to linkedList
  var slow = linkedList;
  // set fast to linkedList.next.next
  var fast = linkedList.next.next;

  // while slow and fast exists
  while (slow && fast) {
    // if slow and fast are the same node
    if (slow == fast) {
      return true;
    }

    // does fast's next exists? next next exist?
    if (fast.next === null || fast.next.next === null) {
      return false;
    }

    // set slow to fast
    slow = slow.next;
    // set fast to next next
    fast = fast.next.next;
  }

};
