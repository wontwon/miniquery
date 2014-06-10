var sweetSelector = {

	select: function (selector) {

		return identifySelector(selector)

	}

}



var DOM = {

	hide: function(selector){
		sweetSelector.select(selector).style.display = 'none';
	},

	show: function(selector){
		sweetSelector.select(selector).style.display = '';
	}

	// addClass: function(selector, newClassName){
	// 	document.getElementByClassName(selector).className += "foo";
	// }

};

function identifySelector(selector_to_identify){

	if (selector_to_identify.match(/^#/)) {
		var elementName = selector_to_identify;
		var modifiedElementName = elementName.split("#").pop();
		return document.getElementById(modifiedElementName);
  	} 
  	else if (selector_to_identify.match(/^\./)) {
  		var elementName = selector_to_identify;
		var modifiedElementName = elementName.slice(1);
		return document.getElementsByClassName(modifiedElementName)[0];
	} 
	else {
		return document.getElementsByTagName(selector_to_identify);
	}

}



