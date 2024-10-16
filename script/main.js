const visual_all = new Swiper('.visual_all', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {delay:5000},
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const rank_product_wrap = new Swiper(".rank_product_wrap",{
    slidesPerView: 4.5,
    spaceBetween: 50,
    autoplay:{delay:2000},
    loop: true,
    // navigation
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})
const sport_product_all = new Swiper(".sport_product_all",{
    slidesPerView: 4,
    spaceBetween: 60,
    autoplay:{delay:2000},
    loop: true,
})
const item_product_all = new Swiper(".item_product_all",{
    slidesPerView: 4,
    spaceBetween: 60,
    autoplay:{delay:2000},
    loop: true,
})
const look_product_all = new Swiper(".look_product_all",{
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay:{delay:2000},
    loop: true,
})