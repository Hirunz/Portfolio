$(document).ready(function() {
    // set navigation bar colour only if scrolled.
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var height = screen.height;
        if ($(window).scroll) {
            $(".navbar").css("background", "#1f1f25");
        }

        if (scroll < 10) {
            $(".navbar").css("background", "#100e17");
        }


    });

});

$(function() {
    // set main content lower than navbar
    var navHeight = $(".navbar").outerHeight(true);
    // console.log(navHeight)
    $(".main-content").css("margin-top", navHeight);

    var viewHeight = $(window).height() - navHeight;
    // console.log(viewHeight)
    if (viewHeight > 700) {
        $(".home-page").css("height", viewHeight);
    }

});

// top navigation --> responsive 

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(function() {
    $('.topnav a').click(function() {
        $('.topnav a').removeClass('active');
        $(this).addClass('active');


        // animation
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split("#");
        var trgt = parts[1];


        //get the top offset of the target anchor
        var target_offset = $("#" + trgt).offset();

        if (target_offset != undefined) {
            var target_top = target_offset.top;

            $('html, body').animate({ scrollTop: target_top }, 1500);
            myFunction()
        }

    });

});