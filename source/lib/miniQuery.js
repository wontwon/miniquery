var sweetSelector = {

	select: function (selector) {

		return identifySelector(selector)

	}

}

var DOM = {}

DOM.hide = function(selector){
	sweetSelector.select(selector).style.display = 'none';
}

DOM.show = function(selector){
	sweetSelector.select(selector).style.display = '';
}

function identifySelector(selector_to_identify){

	if (selector_to_identify.match(/^#/)) {
		var elementName = selector_to_identify;
		var modifiedElementName = elementName.split("#").pop();
		return document.getElementById(modifiedElementName);
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



