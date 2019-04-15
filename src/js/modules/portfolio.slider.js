$(function() {
    const $sliderGalleryLink = $('.slider_gallery-link');
    const $portfolioGallery = $('.portfolio_gallery');

    $('.portfolio_slider').slick({
        infinite: true,
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
    });

    $sliderGalleryLink.magnificPopup({
        type: 'inline',
        midClick: true,
        preloader: true,
        closeBtnInside: true
    });
    $portfolioGallery.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        navigateByKeyboard: true
    });

    $sliderGalleryLink.on('click', function(event) {
        const $sliderItemIndex = $(this).closest('.slick-active').data('slick-index');
        event.preventDefault();
        $portfolioGallery.slick('slickGoTo', parseInt($sliderItemIndex, 10));
    });
});
