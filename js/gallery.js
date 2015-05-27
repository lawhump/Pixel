$(".image, .gal_overlay").click(function () {
//    alert('working');
    "use strict";
    $(".gal_overlay").toggleClass("active");
});

$(window).load(function () {
    var h = $('.quad-2').height();
    $('.quad-1').css({
        'height': h + 'px'
    });
    $('.quad-1 img').css({
        'height': h + 'px'
    });
});