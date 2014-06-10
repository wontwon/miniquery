var SweetSelector = {
    select: function(element) {
        return document.querySelector(element);
    }
}


var DOM = {
    hide: function(element) {
        SweetSelector.select(element).style.display = "none";
    },
    show: function(element) {
        SweetSelector.select(element).style.display = "inline";
    }

    ,
    addClass: function(element, klass) {
        SweetSelector.select(element).classList.add(klass)
    },
    removeClass: function(element, klass) {
        SweetSelector.select(element).classList.remove(klass)
    }
}

var EventDispatcher = {
    on: function() {

    }
}