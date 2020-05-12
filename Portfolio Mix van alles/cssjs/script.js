window.onload = function () {
    /*var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        mousewheel: true,
    });*/
    var swiper = new Swiper('.swiper-container', {
        effect: 'flip',
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}