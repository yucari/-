jQuery(function ($) {

//$(".drawer-icon").on("click", function (e) {
//    e.preventDefault();
//
//    $(".drawer-icon").toggleClass("is-checked");
//    $(".drawer-content").toggleClass("is-checked");
//    $(".drawer-background").toggleClass("is-checked");
//});

  //WOWの繰り返しアニメーション//

    window.addEventListener('scroll', function (e) {
    if ($(window).scrollTop() <= 50) {
        $('.wow').removeClass('animated');
        $('.wow').removeAttr('style');
        new WOW().init();
    }
    });

    //ドロワー文字下から表示される実装//

    var isDrawerChecked = false;

  $(".drawer-icon").on("click", function (e) {
      e.preventDefault();
  
      // Toggle the drawer state
      isDrawerChecked = !isDrawerChecked;
  
      // Toggle classes for .drawer-icon, .drawer-content, .drawer-background
      $(".drawer-icon, .drawer-content, .drawer-background").toggleClass("is-checked", isDrawerChecked);
  
      // Toggle .drawer-content__nav-link with a delay
      setTimeout(function() {
          $(".drawer-content__nav-link").toggleClass("is-show", isDrawerChecked);
      }, 500);
  
      // Toggle .drawer-content__item with a delay
      setTimeout(function() {
          $(".drawer-content__item").toggleClass("is-active", isDrawerChecked);
      }, isDrawerChecked ? 5000 : 0); // Apply the delay only if the drawer is checked
  });
  
  // Handle subsequent clicks when .drawer-icon is already checked
  $(".drawer-icon.is-checked").on("click", function () {
      // Reset the drawer state
      isDrawerChecked = false;
  
      // Remove the .is-active class from .drawer-content__item
      $(".drawer-content__item").removeClass("is-active");
  });


  // ファーストビュースライダー 
  

const swiper1 = new Swiper(".swiper1", {
    loop: true, // ループ
    speed: 1500, // 少しゆっくり(デフォルトは300)
    effect: 'fade', // フェード
    autoplay: { // 自動再生
      delay: 3000, // 2秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 先輩の声スライダー 

  const swiper2 = new Swiper("#swiper2", {
    loop: true,
    speed: 6000,
    //delay: 3000,
    //autoHeight: true,
    autoplay: {
      delay: 0,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "p-voice__button-button-next",
      prevEl: ".p-voice__button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
        delay: 0,
        autoplay: {
          delay: 0,
        },
      },
    },
  });

  //QAセクションアコーディオンメニュー//

jQuery(document).ready(function () {
  // 最初の.js-accordionにis-openクラスを付与して次の兄弟要素を表示
  jQuery('.js-accordion:first').addClass("is-open").next().slideDown();

});
jQuery(".js-accordion").on("click", function () {
  //メニューバー閉じているなら／／
  if (jQuery(this).hasClass("is-open")) {
      jQuery(this).removeClass("is-open");
      jQuery(this).next().slideUp(1000);

      //メニューバーが開いているなら//
  } else {
      jQuery(this).addClass("is-open");
      jQuery(this).next().slideDown(1000);
      //jQuery(this).toggleClass("active");
  };
});

$(function () {
  // IDが'js-form'のフォーム内の、クラスが'js-form-input'のすべての入力要素を選択
  const inputElements = jQuery("#js-form .js-form-input");
  const submitButton = jQuery(".button");

  // 各入力要素に対して'invalid'イベントのリスナーを設定
  inputElements.on("invalid", function () {
      // この要素が無効（検証に合格しない）場合、'is-error'クラスを追加してスタイルを適用
      jQuery(this).addClass("is-error");
  });
  // フォームの要素に変更があった場合、'.button[disabled]'のスタイルを解除
  inputElements.on("input", function () {
      if (jQuery("#js-form")[0].checkValidity()) {
          submitButton.prop("disabled", false).removeClass("disabled");
      }
  });
  // 各入力要素に対して'input'イベントのリスナーを設定
  inputElements.on("input", function () {
      // この要素の値が有効（検証に合格する）場合、'is-error'クラスを削除
      if (this.checkValidity()) {
          jQuery(this).removeClass("is-error");
      }
  });

  // .buttonがクリックされたときの処理
  $('.button').on("click", function (event) {
      // もしis-errorクラスが付いている入力要素があれば、クリックイベントを無効にする
      if (inputElements.hasClass("is-error")) {
          event.preventDefault();
          jQuery(this).addClass("disabled")
      }
  });
});


});