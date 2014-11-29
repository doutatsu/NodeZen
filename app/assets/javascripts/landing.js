$(document).ready(function () {

    var height = $('.cover').height()
    $('#main').css('margin-top',height);
    $('.cover-text').css('padding-top',(height * 0.50)-190);

    $('#navigation').affix({
        offset: {
            top: height
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
            scrollTop: (($($anchor.attr('href')).offset().top)-$('#navigation').outerHeight(true))
        }, 300);
        evt.preventDefault();
    });
    // $('.btn-lg').click(function (evt) {
    //     $('#main').css('display','block');
    // });
});