var SweetSelector = {};

SweetSelector.select = function(cssTag){
        return document.querySelector(cssTag);
}

var DOM = {};
DOM.displays = {};

DOM.hide = function(cssTag){
    var curElem = SweetSelector.select(cssTag)
    DOM.displays[curElem] = curElem.style.display
    curElem.style.display = "none";
}

DOM.show = function(cssTag){
    var curElem = SweetSelector.select(cssTag);
    var curElemOGDisplay = DOM.displays[curElem]
    if( curElemOGDisplay ){
        curElem.style.display = curElemOGDisplay;
    }
}

DOM.addClass = function( cssTag, newClass ){
    SweetSelector.select(cssTag).classList.add(newClass);
}

DOM.removeClass = function( cssTag, dropClass ){
    SweetSelector.select(cssTag).classList.remove(dropClass);
}

var EventDispatcher = {};

EventDispatcher.on = function(cssTag, triggerName, funktion){
    SweetSelector.select(cssTag)[triggerName] = funktion;
}

EventDispatcher.trigger = function(cssTag, triggerName){
    SweetSelector.select(cssTag)[triggerName]();
}

