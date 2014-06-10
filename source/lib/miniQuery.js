var SweetSelector = function() {
}

SweetSelector.prototype.select = function(selector)  {
	var firstChar = selector.charAt(0);
	this.selector = selector;
	switch(firstChar) {

		case '#':
			return this.id();
			break;

		case '.':
			return this.klass();
			break;

		default:
			return this.tag();
	}
}

SweetSelector.prototype.klass = function() {
	return document.getElementsByClassName( removeFirstChar(this.selector) );
}

SweetSelector.prototype.id = function() {
	return document.getElementById( removeFirstChar(this.selector) );
}

SweetSelector.prototype.tag = function() {
	return document.getElementsByTagName( this.selector );
}


var removeFirstChar = function(string) {
	return string.substr(1, string.length-1);
}
 