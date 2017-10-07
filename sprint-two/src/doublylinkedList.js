var LinkedList = function() {
  var list = {};
  list.head = Node();
  list.tail = Node();

  list.addToTail = function(value) {
    
   var newNode = Node();
   newNode.value = value;

   //if no head exists, make head equal to the new node
   if (list.head.value === undefined) {
     list.head = newNode;
   }
   //adjust tail to equal the new node
   //connect the previous tail to the new tail
   var previousNode = list.tail;
   previousNode.next = newNode;
   list.tail = newNode;
   list.tail.previous = previousNode;
    
  };

  list.addToHead = function(value) {
    var newNode = Node();
    newNode.value = value;

    var currentHead = list.head; //store current head into variable
    list.head = newNode; //set the newly created node as the new head
    list.head.next = currentHead; //make new head point to the old head
    currentHead.previous = list.head; //make the old head's previous point to new head

  };

  list.removeTail = function() {
    if(list.tail) {
      var formerTail = list.tail;
      var newTail = list.tail.previous;
      newTail.next = undefined;
      list.tail = newTail;
      return formerTail;
    }
    return list.tail;
  };

  list.removeHead = function() {
    if(list.head.value !== undefined) {
      var previousHeadValue = list.head.value;
      
      //check if list has more than one element
      if (list.head.next !== null) {
        list.head = list.head.next; 
        list.head.previous.value = undefined;  
      } else {//if only one element then just erase the head
        list.head.value = undefined;
      }
      
      return previousHeadValue;
    }
    return undefined;
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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
