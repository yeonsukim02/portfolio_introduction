const product_color_all= new Swiper(".product_color_all",{
    slidesPerView: 1,    
    navigation: {
        prevEl: '.product_color_all .swiper-button-prev',
        nextEl: '.product_color_all .swiper-button-next',
    },
    loop:true,
})
const color_all= new Swiper(".color_all",{
    slidesPerView: 4,
    pagination: {
		el: ".product_color_wrap .swiper-pagination",
		type: 'progressbar',
        innerWidth: '125px',
        outerWidth: '625px',
    },
})
const item_all= new Swiper(".item_all",{
    slidesPerView: 4,
    navigation: {
        prevEl: '.withitem_wrap .swiper-button-prev',
        nextEl: '.withitem_wrap .swiper-button-next',
    },
    autoplay:{delay:2000},
    loop: true,
})
const picture_all= new Swiper(".picture_all",{
    slidesPerView: 5,
    spaceBetween: 40,
    autoplay:{delay:2000},
    loop: true,
})