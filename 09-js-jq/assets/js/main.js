$(function(){
    $("#bacgraund-slider").lightSlider({
        item: 1,
        auto: true,
        controls: false,
        slideMargin: 0,
        loop: true,
    })

    const mySlick = $(".our-slick").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        centerPadding: "20px",
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 7,
                    centerPadding: "10px",
                }
            },
            {
                breakpoint: 775,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 630,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                }
            }
            
        ]
    })
    $("#btn-left").on('click', function(){
        mySlick.slick("slickPrev");
    })
    $("#btn-right").on('click', function(){
        mySlick.slick("slickNext");
    })
    const mySlider = $("#products-slider").lightSlider({
        item:4,
        loop: true,
        slideMargin: 20,
        controls: false,
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    item: 3,
                    slideMargin: 15,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    item: 2,
                    slideMargin: 15,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    item: 1,
                    slideMargin: 15,
                }
            }
        ]
    })
    $("#btn-prev").on('click', function(){
        mySlider.goToPrevSlide()
    })
    $("#btn-next").on('click', function(){
        mySlider.goToNextSlide()
    })

})

function toggleMobileNav(){
    document.body.classList.toggle('open-mb-menu')
    window.hamb_btn.classList.toggle('is-active')
}
window.hamb_btn.addEventListener('click', toggleMobileNav)

window.hamb_btn_mb.addEventListener('click', toggleMobileNav)
