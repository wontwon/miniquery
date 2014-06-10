rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/

SweetSelector = {
	select: function(selector) {
		match = rquickExpr.exec(selector)
		if (m = match[1]) {
			return [document.getElementById(m)];	
		}
		else if (m = match[2]) {
			return document.getElementsByTagName(m);			
		}
		else if (m = match[3]) {
			return document.getElementsByClassName(m);
		}
	}
}

DOM = {
	hide: function(selector) {
		var elements = SweetSelector.select(selector);
		for (var i=0; i<elements.length; i++) {
			elements[i].style.display = "none";
		}
	},

	show: function(selector) {
		var elements = SweetSelector.select(selector);
		for (var i=0; i<elements.length; i++) {
			elements[i].style.display = "initial";
		}
	},

	addClass: function(selector, klassName) {
		var elements = SweetSelector.select(selector);
		for (var i=0; i<elements.length; i++) {
			elements[i].setAttribute("class", klassName);
		}
	},

	removeClass: function(selector, klassName) {
		var elements = SweetSelector.select(selector);
		for (var i=0; i<elements.length; i++) {
			elements[i].removeAttribute("class", klassName);
		}
	}
}