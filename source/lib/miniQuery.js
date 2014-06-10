/*!
 * minQuery
 */

SweetSelector = {
    select: function(htmlSelector){
        if (htmlSelector[0] === "#") {
            return [document.getElementById(htmlSelector.substr(1))];
        } else if (htmlSelector[0] === ".") {
            return document.getElementsByClassName(htmlSelector.substr(1));
        } else {
            return document.getElementsByTagName(htmlSelector);
        } 
    }
}

DOM = {
    hide: function(htmlSelector){
        var elements = SweetSelector.select(htmlSelector);
        console.log(elements);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display="none";
        };
    },
    
    show: function(htmlSelector){
        var elements = SweetSelector.select(htmlSelector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display="";
        };
    },

    addClass: function(htmlSelector, classToAdd){
        var elements = SweetSelector.select(htmlSelector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add(classToAdd);
        };
    },

    removeClass: function(htmlSelector, classToRemove){
        var elements = SweetSelector.select(htmlSelector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove(classToRemove);
        };
    }
}

EventDispatcher = {
    event: {},

    on: function(htmlSelector, eventName, response){
        this.event = new Event(eventName);
        var elements = SweetSelector.select(htmlSelector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener(eventName, response, false);
        };

    },

    trigger: function(htmlSelector){ // Using only one argument, need more?
        var elements = SweetSelector.select(htmlSelector);
        for (var i = 0; i < elements.length; i++) {
            elements[i].dispatchEvent(this.event);
        };
    }
}

AjaxWrapper = {
    request: function(options){
        var httpRequest = new XMLHttpRequest();
        httpRequest.open(options.type, options.url);
        httpRequest.send();
        httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                options.success
            } else {
                options.failure
            }
        };
    }
}


