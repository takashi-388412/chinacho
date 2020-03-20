$(function () {
  //reload topへ戻る
  $('html,body').animate({ scrollTop: 0 }, '1');

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
  // 【sp】リンク内クリック時の動作
  $('.nav-item a').on('click', function () {
    sp_menu.removeClass('active');
    sp_menu_target.removeClass('active');
  });

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
    jQuery('.reserve-btn').addClass('active2');
  } else {
    jQuery('#header').removeClass('m_scroll');
    jQuery('.reserve-btn').removeClass('active2');
  }
});
// //section fadein
// $(function(){
// 　$(window).scroll(function (){
//     $('.fade').each(function(){
//         var elemPos = $(this).offset().top;
//         var scroll = $(window).scrollTop();
//         var windowHeight = $(window).height();
//         if (scroll > elemPos - windowHeight){
//             $(this).addClass('effect-scroll');
//         }
//     });
// 　});
// });
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

//loading-page
$(function(){
　var loading = $("#loading");　//loading-areaを取得
　var isHidden = function(){　//loading-area hide
　　loading.fadeOut(1000); //1000ミリ秒かけてフェードアウト
　};
　setTimeout(isHidden,1500);　//1000ミリ秒後にloadingFunc開始
});
//fadein text
$(function(){
  $('.text').children().addBack().contents().each(function() {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span class="text-move">$&</span>'));
  });
   setTimeout(function(){
      $(".text").addClass("active");
  },2000);
});

// fadein left
$(function() {
  // $('.box img').addClass('move');
  $(window).scroll(function(){
    $(".fade-left").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        // $(this).find("img").removeClass('move');
        $(this).addClass('move');
      } else {
        // $(this).find("img").addClass('move');
      }
    });
  });
});
//section fadein
$(function() {
　$(window).scroll(function (){
    $('.fade-up').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + windowHeight/5){
          $(this).addClass('effect-scroll');
      } else {
        $(this).removeClass('effect-scroll');
      }
    });
　});
});