window.onload = function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        speed: 400,
        forceToAxis: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    });

    var swiper2 = new Swiper('.swiper-container2', {
        slidesPerView: 1,
        spaceBetween: 10,
        // init: false,
        pagination: {
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        }
    });
}