// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sass-official
//= require angular
//= require angular-animate
//= require angular-ui-router
//= require angular-rails-templates
//= require d3
//= require d3-tip
//= require qtip2
//= require eventEmitter
//= require eventie
//= require imagesloaded
//= require jquery-waypoints
//= require lodash
//= require restangular
//= require_tree .
//= require_tree ../templates

$(document).delegate('.facebook', 'click', function() {
  FB.ui(
   {
    method: 'share',
    href: 'https://www.nodezen.me'
  }, function(response){});
})
$(document).delegate('.twitter', 'click', function() {
  var width  = 575,
      height = 400,
      left   = ($(window).width()  - width)  / 2,
      top    = ($(window).height() - height) / 2,
      url    = this.href,
      opts   = 'status=1' +
               ',width='  + width  +
               ',height=' + height +
               ',top='    + top    +
               ',left='   + left;
  
  window.open(url, 'twitter', opts);

  return false;
})