function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target');
}

function deepestChild(){
  const div = document.getElementById("grand-node");
  let deepestChild;
  for (let element of div){

    if (element.children[0] != null){
      debugger
      deepestChild = element.children[0];
    } else {
      return deepestChild;
    }
  }

}
