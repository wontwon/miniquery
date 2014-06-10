/*!
 * minQuery
 */


var SweetSelector = {

    select: function( element ) {
        this.element = element
        if ( element[0] === "#" ) {
            this.bind(document.getElementbyId(this.element));
        }
        else if ( element[0] === "." ) {
            this.brind(document.getElementsByClassName(this.element));
        }
        else {
            this.bind(document.getElementsByTagName(this.element));
        }
    }
};

