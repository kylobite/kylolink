$(document).ready(function() {
    $(".btn, .modal").on("click", function() {
        if (!$(this).is(".btn.on") && !$(this).is(":hidden")) {
            if ($(this).is(":hidden")) console.log(1)
            $(".modal, .app, .btn").toggleClass("on");
        }
    });
});