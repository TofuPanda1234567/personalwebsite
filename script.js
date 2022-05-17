$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $("#pPage").offset().top},
        'slow');
});