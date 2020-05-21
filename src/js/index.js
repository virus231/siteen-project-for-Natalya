$("body").on("mouseenter", "[data-help]", function () {
    $(".help").removeClass("active");
    $("#"+$(this).data("help")+"").addClass("active");
});

$("body").on("mouseenter", "[data-house]", function () {
    $(".house").removeClass("active");
    $("#"+$(this).data("house")+"").addClass("active");
});
