var LinkedList = function() {
  var list = {};
  list.head = Node();
  list.tail = Node();

  list.addToTail = function(value) {
    
   var newNode = Node();
   newNode.value = value;


   if (list.head.value === undefined) {
     list.head = newNode;
   }

   var previousNode = list.tail;
   previousNode.next = newNode;
   list.tail = newNode;
    
  };

  list.removeHead = function() {
    var previousHead = list.head;
    list.head = list.head.next; 
    return previousHead.value;
  };

  list.contains = function(target) {
    var found = false;
    var currentNode = list.head;
    while(currentNode.next !== null && !found) {

      if (currentNode && currentNode.value === target) {
        found = true;
      } else {
        currentNode = currentNode.next;
      }

    }
    if (list.tail.value === target) {
      found = true;
    }
    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
