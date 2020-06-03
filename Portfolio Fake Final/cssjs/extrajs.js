window.onload = function () {
  var swiperH = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination-h',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiperV = new Swiper('.swiper-container-v', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 20,
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination-v',
      clickable: true,
    },
  });
};

