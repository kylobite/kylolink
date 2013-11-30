$(document).ready(function() {
    $(".btn, .modal").on("click", function() {
        if (!$(this).is(".btn.on")) {
            $(".modal, .app, .btn").toggleClass("on");
        }
    });
});