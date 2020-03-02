$(function () {
    $('.main-slider__wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 400,
        rows: 0,
        cssEase: 'linear',
        pauseOnHover: false,
    });
    $('.features__item-text').mCustomScrollbar({
        theme: "light-thin",
        setHeight: false,
        scrollButtons: false,
    })
})