(function($) {
    "use strict";

    $.fn.andSelf = function() {
        return this.addBack.apply(this, arguments);
    }

    /*
    |===============
    | WOW ANIMATION
    |==================
    */
    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();

}(jQuery));