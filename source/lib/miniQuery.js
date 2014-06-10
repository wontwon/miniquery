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

