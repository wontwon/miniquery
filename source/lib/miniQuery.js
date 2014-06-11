// var SweetSelector = {}; //Object literal

// var SweetSelector = function(){};
function SweetSelector(){} //constructor


SweetSelector.select = function(type){
  return this.getElement(type)
  console.log(this + " selector is :" + type);
};

SweetSelector.getElement = function(tag){
//   if (tag[0] === "#") {
//     return document.getElementById(tag.replace('#',''));
// } else if (tag[0] === ".") {
//     return document.getElementsByClassName(tag.replace('.',''));
// } else {
//     return document.getElementsByTagName(tag);
//   }
  return document.querySelectorAll(tag);
}

DOM = {};
DOM.hide = function(elements){
  var elementList = SweetSelector.select(elements);
  for (i=0;i < elementList.length;i++){
    elementList[i].setAttribute("style", "display: none;");
    // DOM._hideElement(elements[i])
  }
}
DOM.show = function(elements){
  var elementList = SweetSelector.select(elements);
  for (i=0;i < elementList.length;i++){
    elementList[i].setAttribute("style", "display: block;");
  }
}

DOM.addClass = function(elements, addClass){
  var elementList = SweetSelector.select(elements);
  for (i=0;i < elementList.length;i++){
    elementList[i].classList.add(addClass);
  }
}
DOM.removeClass = function(elements, removeClass){
  var elementList = SweetSelector.select(elements);
  for (i=0;i < elementList.length;i++){
    elementList[i].classList.remove(removeClass);
  }
}
// DOM.hide = function(elements){

//     for (i=0;i < elements.length;i++){
//       DOM._hideElement(elements[i]);
//     } //for
// } //DOM.hide

// DOM._hideElement = function(element) {
//   element.style.display = "none";
// }

// DOM.show = function(elements) {
//       for (i=0;i < elements.length;i++){
//         DOM._showElement(elements[i]);
//     } //for
// } //DOM.hide

// DOM._showElement = function(element) {
//   element.style.display = "block";
// }


