$(function () {

    /* Боковое меню */
   $('.header__btn').on('click', function () {
    $('.rightside-menu').removeClass('rightside-menu--close');
    })
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('rightside-menu--close');
    })

    /* Слайдер */

    $('.header__content-slider').slick({
        arrows: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1
    });


})