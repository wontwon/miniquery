/*!
 * minQuery
 */
var SweetSelector = function() {

}

// SweetSelector.prototype.select = function(){


//   }
// }

SweetSelector.prototype = {
  select: function(cssSelector) {
    return document.querySelectorAll( cssSelector )[0];
  }
}

var sweet = new SweetSelector()

var DOM = function() {

}


DOM.prototype = {
  displays: {},
  hide: function(cssSelector) {
    var selectedElements = SweetSelector.select(cssSelector)
    for(var i = 0; i < selectedElements.length; i++){
        DOM.displays[selectedElements[i]] = selectedElements[i].style.display
        selectedElements[i].style.display = "none";
        }
  }
}

var DOM = new DOM()
