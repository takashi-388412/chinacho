

// // モジュールとなるjsファイルのインポート
// import { test_01 } from './js/test';
// import { test_02 } from './js/test2';

// // モジュール先にある関数を実行
// test_01();
// test_02();


// $(function () {
//   $('div.top-image').each(function () {
//     var $win = $(window),
//       $winH = $win.height(), //要素の高さを取得
//       $connect = $(this),
//       // position = $connect.offset().top,
//       position = $connect.position().top,
//       current = 0,
//       scroll;
//     console.log($winH);
//     $win.on('load scroll', function () {
//       scroll = $win.scrollTop();
//       current = (1 - (position - scroll) / $winH) * 2 * 100;
//       if (current > 99.9) {
//         current = 100;
//       }
//       if (scroll > position - $winH) {
//       $connect.css({ width: current + '%' });
//       }
//     });
//   });
// });