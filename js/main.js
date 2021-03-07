$(function(){
   $('.slider__inner').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next icon-angle-rights"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev icon-angle-left"></button>',
      infinite: false,
   });
   $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
});
