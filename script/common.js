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
})