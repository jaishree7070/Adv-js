
$(document).ready(function () {

    $(".btn").click(function () {
        let text = $(this).text();

        // console.log(text);
        // $('input').text(text);
        if (text == "Caps") {
            if ($(".num").hasClass("ucase")) {
                $(".num").removeClass("ucase").addClass("lcase");
            } else if ($(".num").hasClass("lcase")) {
                $(".num").removeClass("lcase").addClass("ucase");
            } else {
                $(".num").addClass("ucase");

            }
        } else if (text == "Backspace") {
            $('textarea').text(" ");
        } else if (text == "Enter") {
            $('textarea').text($('textarea').text() + "\n");
        } else if (text == "Spacebar") {
            $('textarea').text($('textarea').text() + " ");
        }
        else {
            $('textarea').text($('textarea').text() + text);
        }

    });

});
