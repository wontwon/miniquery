var sweetSelector = {

	select: function (selector) {

		return identifySelector(selector)

	}

}

var DOM = {}

DOM.hide = function(selecto){
	sweetSelector.select(selecto).style.display = 'none';
}


function identifySelector(selector_to_identify){

	if (selector_to_identify.match(/^#/)) {
		var elementName = selector_to_identify;
		var modifiedElementName = elementName.split("#").pop();
		return document.getElementById(modifiedElementName);
<<<<<<< HEAD
  } 
  else if (selector_to_identify.match(/^\./)) {
  	var elementName = selector_to_identify;
		var modifiedElementName = elementName.split(".").pop();
		return document.getElementByClassName(selector_to_identify)
	} 
	else {
		return document.getElementByTagName(selector_to_identify)
	}

}



