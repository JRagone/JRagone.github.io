// import 'is-in-viewport'

$(document).ready(function() {
    $('.carousel').carousel({
        pause: false
    })
    $(".nav-link").click(function() {
        try {
            var navbarHeight = $(this).closest("nav").outerHeight();
            var url = $(this).attr("href");
            var hash = url.substring(url.indexOf("#")+1);
            var p = $("#" + hash).first();
            var position = p.position().top;
            var top = position - navbarHeight + 1;
            $("html").scrollTop(top);
            return false;
        }
        catch(err) {
            console.error(err);
        }
    })
    // $('video').each(function(){
    //     if ($(this).is(":in-viewport")) {
    //         $(this)[0].play();
    //     } else {
    //         $(this)[0].pause();
    //     }
    // })
});