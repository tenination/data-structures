var BinarySearchTree = function(value) {

	var newBST = {};
	newBST.right;
	newBST.left;
	newBST.value = value;

	_.extend(newBST, binarySearchTreeMethods);

	return newBST;
};


 var  binarySearchTreeMethods = {};

 binarySearchTreeMethods.insert = function(value) {
 	//if value is greater than this.value && this.right is undefined, store as this.right
 	//if value is less than this.value && this.left is undefined, store as this.left
 	if (value > this.value && !this.right) {
 		this.right = BinarySearchTree(value);
 		return;
 	}
 	if (value < this.value && !this.left) {
 		this.left = BinarySearchTree(value);
 		return;
 	}

 	//if neither of the two conditions are satisfied, then the insert must occur at one of the children of
 	//the root BST. If the value is greather than this.value, then it will be passed on to the tree stored
 	//at this.right
 	if (value > this.value) {
 		this.right.insert(value);
 		return;
 	}
 	//if the value is less than this.value, then it will be passed on to the tree stored at this.left
 	if (value < this.value) {
 		this.left.insert(value);
 		return;
 	}


 }

  binarySearchTreeMethods.contains = function(value) {
  	//we need to check each tree's value, and also its right and left values for the target value. 
  	//we will start with the root tree. If the value is greater than this.value, we will check this.right. 
  	//if the value is less than this.value, we will check this.left. We will keep checking over and over again
  	//to see if any tree contains the value. If at any point we find the target value, we will return true. 
  	//else we will return false;
  	if (this.value === value) {
  		return true;
  	}
  	if (value > this.value && this.right) {
  		return this.right.contains(value);
  	}
  	if (value < this.value && this.left) {
  		return this.left.contains(value);
  	}

  	return false;
  }

  binarySearchTreeMethods.depthFirstLog = function(func) {
   func(this.value);
   if(this.left) {
   	this.left.depthFirstLog(func);
   }
   if(this.right) {
     this.right.depthFirstLog(func);
   }
 }



