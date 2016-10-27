function getFirstSelector(selector){          //using document.querySelector to accomplish this
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested') //#nested is the id. uses getselementbyid to retrieve .target
}

/*function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')
  for (var i = 0, l = kiddos.length; i < l; i++) {
  var kiddos = lis[i].innerHTML
   kiddos += n
   return kiddos
  }
}*/

function increaseRankBy(n){
  const rankedList = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < rankedList.length; i++){
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) //+n ????
  }
}



function deepestChild(){
var element = document.getElementById("grand-node")   //element = Grand Node via Getbyid function
var elChild = element.getElementsByTagName('div')[3] //elChild = get divs bytag of grand node, 4th place. 
return elChild

}
