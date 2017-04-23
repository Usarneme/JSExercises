var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);

    instance.data = value;
    // a BST where all values are higher than than the current value.
    instance.right = undefined;
    // a binary search tree (BST) where all values are lower than than the current value.
    instance.left = undefined;

//  console.log('\nBST returning instance: '+JSON.stringify(instance));
  return instance;
};

BinarySearchTree.prototype.insert = function (value) {
  // accepts a value and places in the tree in the correct position.
  var node = BinarySearchTree(value);

  function recurse(bst) {
    if (bst.data >= value && bst.left === undefined) {
      bst.left = node;
    } else if (bst.data > value) {
      recurse(bst.left);
    } else if (bst.data < value && bst.right === undefined) {
      bst.right = node;
    } else if (bst.data < value) {
      recurse(bst.right);
    }
  }

  recurse(this);
};

module.exports = BinarySearchTree;


/* I modified the recordAllData function from the test suite as follows:

function recordAllData(bst) {

  var out = [];
  var strin = '';
  Object.keys(bst).map(function(key) { strin += JSON.stringify(bst[key]); });
  var arr = strin.match(/[0-9]/gi).sort();
  arr.forEach(function (data) { out.push(parseInt(data)); });
  return out;
}

*/
