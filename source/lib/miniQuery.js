SweetSelector = {
	select: function(selector)  {
		return document.querySelectorAll(selector)[0];
	}
};

DOM = {
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

AjaxWrapper = {};

AjaxWrapper.request = function(opts) {

	var oReq = new XMLHttpRequest();
	oReq.onload = opts.success
	oReq.onerror = opts.fail
	oReq.open(opts.type, opts.url, true);
	oReq.send();

}

