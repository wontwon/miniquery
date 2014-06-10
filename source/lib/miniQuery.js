// var SweetSelector = {}; //Object literal

// var SweetSelector = function(){};
function SweetSelector(){} //constructor


SweetSelector.select = function(type){
  return this.getElement(type)
  console.log(this + " selector is :" + type);
};

SweetSelector.getElement = function(tag){
  if (tag[0] === "#") {
    return document.getElementById(tag.replace('#',''));
} else if (tag[0] === ".") {
    return document.getElementsByClassName(tag.replace('.',''));
} else {
    return document.getElementsByTagName(tag);
  }
}

DOM = {};
DOM.hide = function(elements){
    for (i=0;i < elements.length;i++){
      DOM._hideElement(elements[i]);
    } //for
} //DOM.hide

DOM._hideElement = function(element) {
  element.style.display = "none";
}

DOM.show = function(elements) {
      for (i=0;i < elements.length;i++){
        DOM._showElement(elements[i]);
    } //for
} //DOM.hide

DOM._showElement = function(element) {
  element.style.display = "block";
}


