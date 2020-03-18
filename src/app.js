$(function () {

  //hamberger_menu click時 動作 
  // var sp_menu = $('.js-toggle-sp-menu');
  // var sp_menu_target = $('.js-toggle-sp-menu-target');
  var sp_menu = $('.hamberger-menu');
  var sp_menu_target = $('.nav');

  // Top img-slider 
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true, // ループの指定
    effect: "fade", //フェードの指定
    autoplay: {
    delay: 4000, //４秒後に次のスライドへ
    disableOnInteraction: false //ユーザー側で操作してもスライドを止めない
    },
    speed: 2000, //２秒かけてフェードで切り替わる
  });
  // sticky header 
jQuery(window).on('scroll',function($) {
  if ( 500 < jQuery(this).scrollTop()) {
    jQuery('#header').addClass('m_scroll');
    jQuery('.reserve-btn').addClass('active');
  } else {
    jQuery('#header').removeClass('m_scroll');
    jQuery('.reserve-btn').removeClass('active');
  }
});
  //hamberger-menu click動作
  sp_menu.on('click', function () {
    $(this).toggleClass('active');
    sp_menu_target.toggleClass('active');
  });
  // 【sp】リンク内クリック時の動作
  $('.nav-item a').on('click', function () {
    sp_menu.removeClass('active');
    sp_menu_target.removeClass('active');
  });
  //acMenu
  jQuery( '.menu-1' ).on( 'click', function() {
    jQuery( '.price-1' ).slideToggle(300);
  });
  jQuery( '.menu-2' ).on( 'click', function() {
    jQuery( '.price-2' ).slideToggle(300);
  });
  jQuery( '.menu-3' ).on( 'click', function() {
    jQuery( '.price-3' ).slideToggle(300);
  });
  jQuery( '.menu-4' ).on( 'click', function() {
    jQuery( '.price-4' ).slideToggle(300);
  });
  //icon
  $('.menu-1').on('click', function() {
    $('.menu-1 i').toggleClass('fa-caret-right');
    $('.menu-1 i').toggleClass('fa-caret-down');
  });
  $('.menu-2').on('click', function() {
    $('.menu-2 i').toggleClass('fa-caret-right');
    $('.menu-2 i').toggleClass('fa-caret-down');
  });
  $('.menu-3').on('click', function() {
    $('.menu-3 i').toggleClass('fa-caret-right');
    $('.menu-3 i').toggleClass('fa-caret-down');
  });
  $('.menu-4').on('click', function() {
    $('.menu-4 i').toggleClass('fa-caret-right');
    $('.menu-4 i').toggleClass('fa-caret-down');
  });
});