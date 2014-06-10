/*!
 * minQuery
 */

var SweetSelector = {
  select: function(target){
    return document.querySelectorAll(target)
  }
}

var DOM = {
  hide: function(target){
    (SweetSelector.select(target))[0].setAttribute("style", "display: none;");
  },
  show: function(target){
    (SweetSelector.select(target))[0].setAttribute("style", "display: visible;");
  },
  addClass: function(target, class_to_add){
    (SweetSelector.select(target))[0].classList.add(class_to_add);
  },
  removeClass: function(target, class_to_remove) {
    (SweetSelector.select(target))[0].classList.remove(class_to_remove)
  }
}
