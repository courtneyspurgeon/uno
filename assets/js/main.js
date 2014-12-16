/*globals $, document, window */
/*jshint indent:2 */

$(document).ready(function () {
  var $panelCover = $panelCover,
      $navigationWrapper = $('.navigation-wrapper'),
      $mobileMenu = $('.btn-mobile-menu__icon');

  $('body').removeClass('no-js');

  $('a.blog-button').click(function () {
    if ($panelCover.hasClass('panel-cover--collapsed')) return;

    var currentWidth = $panelCover.width();

    if (currentWidth < 960) {
      $panelCover.addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight');
    } else {
      $panelCover.css('max-width', currentWidth);
      $panelCover.animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function() {} );
    }
  });


  /* Panel Cover */
  /* Manage collapse state */
  /* -------------------------------------------------------------------- */
  if (window.location.hash && window.location.hash === "#blog") {
    $panelCover.addClass('panel-cover--collapsed');
  }
  if (window.location.pathname.substring(0, 5) === "/tag/") {
    $panelCover.addClass('panel-cover--collapsed');
  }

  /* Mobile Menu */
  /* Manages classes for nav wrapper and menu */
  /* -------------------------------------------------------------------- */
  $('.btn-mobile-menu').on('click', function() {
    $navigationWrapper.toggleClass('visible animated bounceInDown');
    $mobileMenu.toggleClass('icon-list icon-x-circle animated fadeIn');
  });

  $('.navigation-wrapper .blog-button').on('click', function() {
    $navigationWrapper.toggleClass('visible');
    $mobileMenu.toggleClass('icon-list icon-x-circle animated fadeIn');
  });


  /* External Links */
  /* Adds target _blank to external links so markdown is not cluttered with html */
  /* -------------------------------------------------------------------- */
  var links = document.links,
      linksLength = links.length,
      i;

  for (i = 0; i < linksLength; i++) {
    if (links[i].hostname !== window.location.hostname) {
      links[i].target = '_blank';
    }
  }


});
