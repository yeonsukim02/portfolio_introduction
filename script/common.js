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

        //details
        const details_modal = document.querySelectorAll('.design_wrap .modal')
        const detail_big = document.querySelector('.detail_big')
        //console.log(details_modal[0].children[0].src)
        //console.log(detail_big.children[0].src)

        for(let i of details_modal){
            i.addEventListener('click',function(){
                detail_big.children[0].src = this.children[0].src
                detail_big.style.display = 'block'
                portfolio.disable(); //스와이퍼의 스크롤과 충돌되는 것 처리
            })
        }

        detail_big.addEventListener('click',function(){
            detail_big.style.display = 'none'
            portfolio.enable(); //스와이퍼의 스크롤과 충돌되는 것 처리
        })