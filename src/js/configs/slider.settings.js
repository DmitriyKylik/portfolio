export const sliderSettings = {
    portfolioMain: {
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '.portfolio_slider_next',
        prevArrow: '.portfolio_slider_prev',
        navigateByKeyboard: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    },
    portfolioGallery: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        navigateByKeyboard: true
    }
};
