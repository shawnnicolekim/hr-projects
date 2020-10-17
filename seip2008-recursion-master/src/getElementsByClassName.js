// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

// Should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className, nextNode) {
  var result = [];
  var nodeList = nextNode || document.body;

  if (nodeList.classList.contains(className)) {
    result.push(nodeList);
  }

  for (var i = 0; i < nodeList.childNodes.length; i++) {
    if (nodeList.childNodes[i].nodeType === 1) {
      result = result.concat(getElementsByClassName(className, nodeList.childNodes[i]));
    }
  }

  return result;
};
