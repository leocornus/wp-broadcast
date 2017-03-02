jQuery(document).ready(function($) {

    var tSelector = '#wp-admin-bar-boardcast > .ab-item > .ab-icon';
    // define the cookie name: tooltip-tracker
    var cookieName = 'boardcast-tracker';
    // get cookie value in the tooltip icon,
    var tracker = $(tSelector).attr(cookieName);
    // get the cookie value from browser
    //var trackerCookie = getCookie('tooltip-tracker');
    var allCookies = "; " + document.cookie;
    var parts = allCookies.split("; " + cookieName + "=");
    var trackerCookie = parts.pop().split(";").shift();
    //console.log(trackerCookie);
    if((typeof trackerCookie != 'undefined') &&
       (tracker === trackerCookie)) {
        // compare the two, if same do nothing...
    } else {
        // if different, reset the cookie and show tooltip
        document.cookie = cookieName + "=" + tracker;

        // get ready the tooltip message.
        var tooltip = '<span class="tip">OPSpedia has new updates</span>';
        $('body').append(tooltip);

        // find the right position:
        var left = $(tSelector).offset()['left'];

        //var selector = "div.tooltips > span";
        var selector = "span.tip";

        var showProperty = {
          "opacity": 1,
          "top": "43px",
          "left": left + "px",
          "margin-left": "-220px",
        };

        $(selector).animate(showProperty, 1000,
                                         function() {
            setTimeout(function() {
                // set the tooltips to disappear
                $(selector).animate({opacity: 0}, 3000);
            }, 3000);
        });
    }
});