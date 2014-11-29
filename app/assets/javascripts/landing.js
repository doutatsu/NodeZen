$(document).ready(function () {

    var height = $('.cover').height()
    $('#main').css('margin-top',height);
    $('.cover-text').css('padding-top',(height * 0.50)-190);

    // $('.node').waypoint(function(direction) {
    //   $('.node').addClass('animated fadeIn');
    // });
    // setTimeout(doSomethingUsefulThisTime, 10);
    

    $('#navigation').affix({
        offset: {
            top: height
        }
    });
    
    $('#navigation').on('affix.bs.affix', function () {
        $('.container-fluid').css('margin-top', $('#navigation').outerHeight(true))-10;
        $('#navigation').css('z-index', 3);
    });

    $('#navigation').on('affix-top.bs.affix', function () {
        $('.container-fluid').css('margin-top', 0);
        $('#navigation').css('z-index', 2);
    });

    $('.page_scroll').click(function (evt) {
        var $anchor = $(this);
        $('body').stop().animate({
            scrollTop: (($($anchor.attr('href')).offset().top)-$('#navigation').outerHeight(true))
        }, 300);
        evt.preventDefault();
    });
});