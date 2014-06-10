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