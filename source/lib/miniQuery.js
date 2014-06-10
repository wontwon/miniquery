var MQ = {};

MQ.SweetSelector = {};

MQ.SweetSelector.select = function(cssTag){
        return document.querySelectorAll(cssTag);
}

MQ.DOM = {};
MQ.DOM.displays = {};

MQ.DOM.hide = function(cssTag){
    var curElems = MQ.SweetSelector.select(cssTag)
    for(var i = 0; i < curElems.length; i++){
        MQ.DOM.displays[curElems[i]] = curElems[i].style.display
        curElems[i].style.display = "none";
    }
}

MQ.DOM.show = function(cssTag){
    var curElems = MQ.SweetSelector.select(cssTag);
    for(var i = 0; i < curElems.length; i++){
        var curElemOGDisplay = MQ.DOM.displays[curElems[i]];
        if( curElemOGDisplay ){
            curElems[i].style.display = curElemOGDisplay;
        }else{
            curElems[i].style.display = "";
        }
    }
}

MQ.DOM.addClass = function( cssTag, newClass ){
    MQ.SweetSelector.select(cssTag).classList.add(newClass);
}

MQ.DOM.removeClass = function( cssTag, dropClass ){
    MQ.SweetSelector.select(cssTag).classList.remove(dropClass);
}

MQ.EventDispatcher = {};
MQ.EventDispatcher.events = {};

MQ.EventDispatcher.on = function(cssTag, triggerName, funktion){
    var selectedItems = MQ.SweetSelector.select(cssTag);
    this.events[triggerName] = new Event(triggerName);
    for(var i = 0; i < selectedItems.length; i++){
        selectedItems[i].addEventListener(triggerName, funktion, false);
    }
}

MQ.EventDispatcher.trigger = function(cssTag, triggerName){
    var selectedItems = MQ.SweetSelector.select(cssTag);
    for(var i = 0; i < selectedItems.length; i++){
        selectedItems[i].dispatchEvent(this.events[triggerName]);
    }
}

MQ.AjaxWrapper = {};

MQ.AjaxWrapper.request = function(options){
    var oReq = new XMLHttpRequest();
    oReq.onload = options.success;
    oReq.open( options.type, options.url, (options.async || true) );
    oReq.send();
}