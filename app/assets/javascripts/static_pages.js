$(document).ready(function () {
  // examples();
  $('.demo-btn').addClass('animated pulse');
  var height = $('.cover').height()
  $('#main').css('margin-top', height);
  // var bottom = $('.cover-text').css("bottom");
  var retina = window.devicePixelRatio > 1;
  if (retina) {
    $('.cover-text').css('bottom',($('.bg').height() + 40));
  } else{
    $('.cover-text').css('bottom',($('.bg').height() + 60));
  };
  
  $('#navigation').affix({
      offset: { top: height }
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
window.onresize = function(event) {
  var height = $('.cover').height()
  $('#main').css('margin-top',height);
};
