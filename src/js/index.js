$("body").on("mouseenter", "[data-help]", function () {
    $(".help").removeClass("active");
    $("#"+$(this).data("help")+"").addClass("active");
});

$("body").on("mouseenter", "[data-house]", function () {
    $(".house").removeClass("active");
    $("#"+$(this).data("house")+"").addClass("active");
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
