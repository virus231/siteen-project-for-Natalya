$("body").on("mouseenter", "[data-help]", function () {
  $(".help").removeClass("active");
  $("#" + $(this).data("help") + "").addClass("active");
});

$("body").on("mouseenter", "[data-house]", function () {
  $(".house").removeClass("active");
  $("#" + $(this).data("house") + "").addClass("active");
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

$(document).ready(function(){
  $(".down-block").on("click","a", function (event) {
      //отменяем стандартную обработку нажатия по ссылке
      event.preventDefault();

      //забираем идентификатор бока с атрибута href
      var id  = $(this).attr('href'),

      //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
       
      //анимируем переход на расстояние - top за 1500 мс
      $('body,html').animate({scrollTop: top}, 3500);
  });
});