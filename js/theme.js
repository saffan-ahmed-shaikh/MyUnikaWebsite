$(".page-scroll").bind("click", function (o) {
    var t = $(this);
    $("html, body").stop().animate({
        scrollTop: $(t.attr("href")).offset().top - 64
    }, 1500, "easeInOutExpo"), o.preventDefault()
});
var cbpAnimatedHeader = function () {
    var t = document.documentElement,
        e = document.querySelector(".navbar-fixed-top"),
        l = !1,
        a = 10;

    function n() {
        var o = window.pageYOffset || t.scrollTop;
        a <= o ? classie.add(e, "navbar-shrink") : classie.remove(e, "navbar-shrink"), l = !1
    }
    window.addEventListener("scroll", function (o) {
        l || (l = !0, setTimeout(n, 250))
    }, !1)
}();
$("body").scrollspy({
    target: ".navbar",
    offset: 65
}), $(window).load(function () {
    $(".page-loader").fadeOut("slow")
}), $("#owl-intro-text").owlCarousel({
    singleItem: !0,
    autoPlay: 6e3,
    stopOnHover: !0,
    navigation: !1,
    navigationText: !1,
    pagination: !0
}), $("#owl-partners").owlCarousel({
    items: 4,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 2],
    autoPlay: 5e3,
    stopOnHover: !0,
    pagination: !1
}), $("#owl-testimonial").owlCarousel({
    singleItem: !0,
    pagination: !0,
    autoHeight: !0
}), $.stellar({
    horizontalScrolling: !1,
    verticalScrolling: !0
}), (new WOW).init(), $(".counter").counterUp({
    delay: 10,
    time: 2e3
}), $(window).load(function () {
    $(".portfolio_menu ul li").click(function () {
        $(".portfolio_menu ul li").removeClass("active_prot_menu"), $(this).addClass("active_prot_menu")
    });
    var t = $("#portfolio");
    t.isotope({
        itemSelector: ".col-sm-4",
        layoutMode: "fitRows"
    }), $("#filters").on("click", "a", function () {
        var o = $(this).attr("data-filter");
        return t.isotope({
            filter: o
        }), !1
    })
}), $(window).scroll(function () {
    100 < $(this).scrollTop() ? $(".scrolltotop").fadeIn() : $(".scrolltotop").fadeOut()
}), $(".scrolltotop").click(function () {
    return $("html, body").animate({
        scrollTop: 0
    }, 1500, "easeInOutExpo"), !1
}), $(document).on("click", ".navbar-collapse.in", function (o) {
    $(o.target).is("a") && "dropdown-toggle" != $(o.target).attr("class") && $(this).collapse("hide")
});