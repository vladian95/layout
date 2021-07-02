$(function(){

$('.slider__inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>'
});

$('select').styler();

$('.news__slider-inner').slick({
    nextArrow: '<button type="button" class="news__slick-btn news__slick-next"></button>',
    prevArrow: '<button type="button" class="news__slick-btn news__slick-prev"></button>'
});

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});
    
});