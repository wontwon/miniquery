function $(selector){
    return (new CashMoney(selector))
}

var CashMoney = function(selector){
    this.selector = selector;
}

$.events = {};
$.displays = {};

CashMoney.prototype = {
    select: function(){
        return document.querySelectorAll(this.selector);
    },
    hide: function(){
        var elems = this.select();
        for(var i = 0; i < elems.length; i++){
            $.displays[elems[i]] = elems[i].style.display
            elems[i].style.display = 'none';
        }
    },
    show: function(){
        var elems = this.select();
        for(var i = 0; i < elems.length; i++){
            elems[i].style.display = $.displays[elems[i]] || "";
        }
    },
    addClass: function(newClass){
        var elems = this.select();
        for(var i = 0; i < elems.length; i++){
            elems[i].classList.add(newClass);
        }
    },
    removeClass: function(newClass){
        var elems = this.select();
        for(var i = 0; i < elems.length; i++){
            elems[i].classList.remove(newClass);
        }
    },
    on: function(triggerName, funktion){
        $.events[triggerName] = new Event(triggerName);
        var elems = this.select();
        for(var i = 0; i < elems.length; i++){
            elems[i].addEventListener(triggerName, funktion, false);
        }
    },
    trigger: function(triggerName){
        var elems = this.select();
        for(var i = 0; i < elems.length; i++){
            elems[i].dispatchEvent($.events[triggerName]);
        }
    },
    request: function(options){
        var oReq = new XMLHttpRequest();
        oReq.onload = options.success;
        oReq.open( options.type, options.url);
        oReq.send();
    },
    css: function(newStyle, value){
        var elems = this.select();
        for(var i = 0; i < elems.length; i++){
            elems[i].style[newStyle] = value;
        }
    }
}