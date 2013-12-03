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
    })
});