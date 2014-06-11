/*!
 * minQuery
 */
var SweetSelector = function() {

}

// SweetSelector.prototype.select = function(){


//   }
// }

SweetSelector.prototype = {
  select: function(id) {
    return document.querySelectorAll( id );
  }
}

var sweet = new SweetSelector()
