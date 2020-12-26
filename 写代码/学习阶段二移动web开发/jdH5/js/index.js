window.addEventListener('load', function() {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    })

})