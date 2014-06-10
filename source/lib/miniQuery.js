var SweetSelector = {
	select: function(selector)  {
		return document.querySelectorAll(selector)[0];	
	}
};
 
var DOM = {
	hide: function(selector) {
		SweetSelector.select(selector).style.display = "none";
	},
	show: function(selector) {
		SweetSelector.select(selector).style.display = "block";
	},
	addClass: function(selector, klass) {
		SweetSelector.select(selector).classList.add(klass);
	},
	removeClass: function(selector, klass) {
		SweetSelector.select(selector).classList.remove(klass);
	}
}; 