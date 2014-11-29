$(document).ready(function () {
    $('#navigation').affix({
        offset: {
            top: $('.cover').height()
        }
    });

    $('#navigation').on('affix.bs.affix', function () {
        $('.container-fluid').css('margin-top', $('#navigation').outerHeight(true));
    });

    $('#navigation').on('affix-top.bs.affix', function () {
        $('.container-fluid').css('margin-top', 0);
    });

    $('.page_scroll').click(function (evt) {
        var $anchor = $(this);
        $('body').stop().animate({
            scrollTop: (($($anchor.attr('href')).offset().top)-$('#navigation').outerHeight(true))-10
        }, 300);
        evt.preventDefault();
    });
});