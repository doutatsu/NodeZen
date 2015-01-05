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
//= require jquery-ujs
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

$(document).delegate('.twitter', 'click', function() {
  ga('send', {'hitType': 'social','eventCategory': 'button', 'eventAction': 'click','eventLabel': 'Twitter Share' });
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
$(document).delegate('.facebook', 'click', function() {
  ga('send', {'hitType': 'social','eventCategory': 'button', 'eventAction': 'click','eventLabel': 'Facebook Share'});
  return !window.open(this.href, 'Facebook', 'width=640,height=300');
})
$(document).delegate('.expand', 'click', function() {
  ga('send', {'hitType': 'event','eventCategory': 'button', 'eventAction': 'click','eventLabel': 'Website Expand'});
})
$(document).ready(function () {
  // Staging tracking
  ga('create', 'UA-57217646-1', 'auto');
  // Production tracking
  // ga('create', 'UA-57217646-2', 'auto');
  ga('send', 'pageview');             // Sends a pageview.
})