/*!
 * minQuery
 */


///////// SELECTOR MODULE //////////////

 $weetSelector = {};

////////////////////////////////////////


///Element, class, tag selector////////

$weetSelector.select = function(context) {
	return document.querySelector(context);
}

////////////////////////////////////////







////////////// DOM MODULE //////////////

 DOM = {};

////////////////////////////////////////



DOM.hide = function(context) {
	$weetSelector.select(context)
	.style.display="none";
}


DOM.show = function(context) {
	$weetSelector.select(context)
	.style.display="block";
}

DOM.addClass = function(existing, newClass) {
	var existingClass = $weetSelector.select(existing);
	var newClassWithSpace = ' ' + newClass;
	existingClass.className += newClassWithSpace;
	return existingClass;
}

DOM.removeClass	= function(existing, removable) {
	var existingClass = $weetSelector.select(existing);
	existingClass.classList.remove(removable);
	return existingClass;
}




///////// EVENTDISPATCH MODULE /////////

 EventDispatch = {};

////////////////////////////////////////


EventDispatch.on = function(target, trigger()) {

}

EventDispatch.trigger = function(target) {
	
}