var SweetSelector= {
  select: function(div){
  return document.querySelector(div)
  }
}

var DOM = {
  hide: function(div){
    SweetSelector.select(div).style.display = 'none';
 }
 , show: function(div){
    SweetSelector.select(div).style.display = null;
 }
 , addClass: function(div, classAdd){
  SweetSelector.select(div).classList.add(classAdd);
 }
 , removeClass: function(div, classAdd){
  SweetSelector.select(div).classList.remove(classAdd);
 }
}


