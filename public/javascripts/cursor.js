x = document.getElementById("CURSOR_ELEMENT")
y = $("CURSOR_ELEMENT") // Same difference
x.setSelectionRange(x.selectionStart + 0, x.selectionEnd + 2)
/*
    goto 0,1        |   go to first character on second line
    goto line 5     |   goto 0,5
    goto char 7     |   goto 7,(current line)
    goto 9          |   goto char 9
    goto 3.         |   goto line 3
    ~
    Determine lines by regexing via \n
    Determine line length by AJAXing new characters into array
        "Hello\nWorld"  ->  ["Hello","World"]   ->  [5,5]   (unless \n is char) ->  [6,6]
        "Hello\nWorld!" ->  ["Hello","World!"]  ->  [5,6]   (unless \n is char) ->  [6,7]
    Send AJAX call on keyup unless keydown is faster
*/