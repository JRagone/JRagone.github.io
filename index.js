$(document).ready(function() {
    $(".nav-link").click(function() {
        try {
            var navbarHeight = $(this).closest("nav").height();
            var url = $(this).attr("href");
            var hash = url.substring(url.indexOf("#")+1);
            var p = $("#" + hash).first();
            var position = p.position().top;
            var top = position - navbarHeight;
            $("html").scrollTop(top);
            return false;
        }
        catch(err) {
            console.error(err);
        }
    })
});