const portfolio = new Swiper('.portfolio',{
    direction:'vertical',
    mousewheel:true,
    on: {
        slideChange: function () {
            const currentSlide = this.activeIndex;
            if (currentSlide === 0) {
                document.querySelector('header').style.backgroundColor = 'transparent';
            }
            else if (currentSlide === 1) {
                document.querySelector('header').style.backgroundColor = '#B22B15';
            }
        }
    }
});
const page_wrap = new Swiper(".page_wrap",{
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {delay:2000},
    loop: true,
});
const banner_wrap = new Swiper(".banner_wrap",{
    slidesPerView: 2,
    spaceBetween: 0,
    autoplay: {delay:2000},
    loop: true,
});
const sns_wrap = new Swiper(".sns_wrap",{
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: {delay:2000},
    loop: true,
});