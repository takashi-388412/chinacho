$(function () {

  //hamberger_menu click時 動作 
  // var sp_menu = $('.js-toggle-sp-menu');
  // var sp_menu_target = $('.js-toggle-sp-menu-target');
  var sp_menu = $('.hamberger-menu');
  var sp_menu_target = $('.nav');

  //hamberger-menu click動作
  sp_menu.on('click', function () {
    $(this).toggleClass('active');
    sp_menu_target.toggleClass('active');
  });
  // // 【sp】リンク内クリック時の動作
  // $('.nav-item a').on('click', function () {
  //   sp_menu.removeClass('active');
  //   sp_menu_target.removeClass('active');
  // });
});