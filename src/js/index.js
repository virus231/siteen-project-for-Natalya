$("body").on("mouseenter", "[data-help]", function () {
  $(".help").removeClass("active");
  $("#" + $(this).data("help") + "").addClass("active");
});

$("body").on("mouseenter", "[data-house]", function () {
  $(".house").removeClass("active");
  $("#" + $(this).data("house") + "").addClass("active");
});

$(document).ready(function(){
  $("#calc_l_m_range").on("input", function(){
    $("#calc_l_meters").val(this.value);
  });
});


var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.5;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
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


$('#chk4, #chk5, #chk6').click(function () {
  if ($(this).is(':checked')) {
    $('#chk4, #chk5, #chk6').not(this).prop('checked', false);
  }
});

$('#chk, #chk2, #chk3').click(function () {
  if ($(this).is(':checked')) {
    $('#chk, #chk2, #chk3').not(this).prop('checked', false);
  }
});


const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("menu");

    if (hamburger)
    {
        hamburger.onclick = () =>
        {
            hamburger.classList.toggle("active");
            menu.classList.toggle("active");
        }
    }

    document.querySelectorAll("menu a").forEach((link) =>
    {
        link.onclick = () =>
        {
            hamburger.classList.remove("active");
            menu.classList.remove("active");
        }
    });