$ ->
    $(".btn, .modal").on "click", ->
        if not $(this).is ".btn.on" and not $(this).is ":hidden"
            $(".modal, .app, .btn, .eye").toggleClass "on"

    $(document).keydown (e) ->
        if e.keyCode is 27 and $(".btn").is ".on"
            $(".modal, .app, .btn, .eye").toggleClass "on"
        else if e.keyCode is 27 and $("header, .container, footer").is ":hidden"
            $(".terminal")
                .fadeOut("slow")
                .removeClass "shell"
            $("header, .container, footer").fadeIn "slow"
        else if e.keyCode is 13 and not $(".terminal").is ":hidden"
            $(".text .active")
                .removeClass("active")
                .prop("disabled", true)
                .after("<br>> <input type='text' class='active'>")
            $(".active").focus()

    $(".eye").on "click", ->
        if not $(this).is ".on"
            $(".terminal")
                .fadeIn("slow")
                .addClass "shell"
            $("header, .container, footer").fadeOut "slow"
            $(".text input")
                .addClass("active")
                .focus()