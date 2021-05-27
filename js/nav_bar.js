$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var height = screen.height;
        if (scroll > height) {
            $(".navbar").css("background", "#1f1f25");
        } else {
            $(".navbar").css("background", "#100e17");
        }


    });

});

$(function() {
    // set main content lower than navbar
    var navHeight = $(".navbar").outerHeight(true);
    console.log(navHeight)
    $(".main-content").css("margin-top", navHeight);
});

$(function() {
    $('.topnav a').click(function() {
        $('.topnav a').removeClass('active');
        $(this).addClass('active');
    });
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}