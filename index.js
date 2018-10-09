function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector('.target');
}

function deepestChild(){
  const div = document.getElementById("grand-node");
  let deepestChild;
  function getChildren(div){
    let element = div.children[0];
    if (element != null) {
      deepestChild = element;
      return getChildren(element);
    } else {
      return
    }

  }
  getChildren(div);
  return deepestChild;
}

function increaseRankBy(n){
  let list = document.querySelector('.ranked-list');
  for (let i = 0; i < list.length; i++ ){
  
    
  }
}
