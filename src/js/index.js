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

// $(document).ready(function(){
//   $(".down-block").on("click","a", function (event) {
//       //отменяем стандартную обработку нажатия по ссылке
//       event.preventDefault();

//       //забираем идентификатор бока с атрибута href
//       var id  = $(this).attr('href'),

//       //узнаем высоту от начала страницы до блока на который ссылается якорь
//           top = $(id).offset().top;
       
//       //анимируем переход на расстояние - top за 1500 мс
//       $('body,html').animate({scrollTop: top}, 3500);
//   });
// });

$(document).ready(function(){
  $("#calc_l_m_range").on("input", function(){
    $("#calc_l_meters").val(this.value);
  });
});


var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 1;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
