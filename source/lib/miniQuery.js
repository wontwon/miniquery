function $(element) {
    return (new miniQuery(element));
}

function miniQuery(element) {
    this.element = element;
    this.elements = document.querySelectorAll(element);
}

miniQuery.prototype = {
    hide: function() {
        for (var i = 0; i < this.elements.length; i++) {
            (this.elements[i]).style.display = "none";
        }
    },
    show: function() {
        for (var i = 0; i < this.elements.length; i++) {
            (this.elements[i]).style.display = "block";
        }
    },
    addClass: function(klass) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(klass)
        }
    },
    removeClass: function(klass) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(klass)
        }
    },
    on: function(triggerName, funktion) {
        event = new Event(triggerName);
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(triggerName, funktion, false);
        }
    },
    trigger: function(triggerName) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].dispatchEvent(event);
        }
    }
}



// }

// var AjaxWrapper = {
//     request: function(options) {
//         var oReq = new XMLHttpRequest();
//         oReq.onload = options.success;
//         oReq.open(options.method, options.url, true);
//         oReq.send();
//     }