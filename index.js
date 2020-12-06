// import 'is-in-viewport'

$(document).ready(function() {
    $('.carousel').carousel({
        pause: false
    })
    $(".nav-link").on("click", function() {
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
    $(".same-page-link").on("click", function() {
        try {
            var navbarHeight = $(document).find("nav").outerHeight();
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
    $('video').on('mouseenter', function() {
        $(this).get(0).play();
    })
    $('video').on('mouseout', function() {
        $(this).get(0).pause();
    })
});