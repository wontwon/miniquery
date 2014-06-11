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
			elements[i].classList.add(klassName);
		}
	},

	removeClass: function(selector, klassName) {
		var elements = SweetSelector.select(selector);
		for (var i=0; i<elements.length; i++) {
			elements[i].classList.remove(klassName);
		}
	}
}

EventDispatcher = {
	event: {},

	on: function(selector, eventName, response) {
		this.event = new Event(eventName)
		var elements = SweetSelector.select(selector);
		for (var i=0; i<elements.length; i++) {
			elements[i].addEventListener(eventName, response, false);
		}
	},

	trigger: function(selector, eventName) {
		var elements = SweetSelector.select(selector);
		for (var i=0; i<elements.length; i++) {
			elements[i].dispatchEvent(this.event);
		}
	}
}

AjaxWrapper = {
	request: function(data) {
		var client = new XMLHttpRequest();
		client.open(data.type, data.url, true);
		client.send();
		client.onreadystatechange = function() {
			// console.log(client.status)
			if(client.readyState == 4) {
				data.success();
			}
			else {
				data.fail();
			}
		};
	}
}

