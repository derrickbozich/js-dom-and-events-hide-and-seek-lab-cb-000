function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target');
}

// function deepestChild(){
//   const div = document.getElementById("grand-node");
//   let deepestChild;
//   function getChildren(div){
//     let element = div.children[0];
//     if (element != null) {
//       deepestChild = element;
//       return getChildren(element);
//     } else {
//       return deepestChild;
//     }
// 
//   }
// 
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
