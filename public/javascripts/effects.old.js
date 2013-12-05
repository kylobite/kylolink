$(document).ready(function() {
    $(".btn, .modal").on("click", function() {
        if (!$(this).is(".btn.on") && !$(this).is(":hidden")) {
            $(".modal, .app, .btn, .eye").toggleClass("on");
        }
    });
    $(document).keydown(function(e) {
        if (e.keyCode === 27 && $(".btn").is(".on")) {
            $(".modal, .app, .btn, .eye").toggleClass("on");
        }
        else if (e.keyCode === 27 && $("header, .container, footer").is(":hidden")) {
            $(".terminal").fadeOut("slow");
            $("header, .container, footer").fadeIn("slow");
        }
    })
    $(".eye").on("click", function() {
        if (!(this).is(".on")) {
            $(".terminal").fadeIn("slow");
            $("header, .container, footer").fadeOut("slow");
        }
    });
});