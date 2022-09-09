$(function () {
    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        parallax: true,
        effect: 'cube',
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'progressbar',
            renderProgressbar: function (progressbarFillClass) {
                return '<span class="' + progressbarFillClass + '"></span>';
            }
        },
    });
})