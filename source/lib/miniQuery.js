var SweetSelector= {
  select: function(div){
  var symbol = findType(div)
  var word = findWord(div)
  return findDivsToType(symbol,word);
  }
}
function findType(div){
   return div[0]
}
function findWord(div){
  return div.slice(1);
}
function findDivsToType(symbol, word){
  if (symbol === '#'){
    return document.getElementById(word)
  }
  else if (symbol === '.'){
    return document.getElementsByClassName(word)[0];
  }
  else {
    return document.getElementsByTagName(symbol)[0]
  }
}

var Dom = {
  hide: function(div){
    SweetSelector.select(div).style.display = 'none';
 }
 , show: function(div){
    SweetSelector.select(div).style.display = null;
 }
}


