import 'slick-carousel';
import 'magnific-popup';

// $(function() {

// Create function for fire Element
// $sliderGalleryLink.on('click', function(event) {
//     const $sliderItemIndex = $(this).closest('.slick-active').data('slick-index');
//     event.preventDefault();
//     $portfolioGallery.slick('slickGoTo', parseInt($sliderItemIndex, 10));
// });
// });

const getCurrentSlideIndex = fireElement => {
    return $(fireElement).closest('.slick-active').data('slick-index');
};

const setupSlider = (elements, settings) => {
    elements.each((index, element) => {
        const elementDataName = $(element).data('name');
        $(element).slick(settings[elementDataName]);
    });
};

const goToOnGallerySlider = (gallerySlider, slideIndex) => {
    gallerySlider.each(element => $(element).slick('slickGoto', slideIndex));
};

const setupPopup = (elements, settings) => {
    // console.log(elements);
    // console.log(settings);
    elements.each((index, element) => {
        console.log($(element));
        const elementDataName = $(element).data('name');
        $(element).magnificPopup(settings[elementDataName]);
    });
};

export const init = (sliderSettings, popupSettings, fireGalleryElement, mainSlider, gallerySlider) => {
    setupSlider(mainSlider, sliderSettings);
    setupPopup(fireGalleryElement, popupSettings);
    setupSlider(gallerySlider, sliderSettings);
    $(fireGalleryElement).on('click', (event) => {
        const $this = event.currentTarget;
        // console.log($this);
        event.preventDefault();
        const currentIndex = getCurrentSlideIndex($this);
        goToOnGallerySlider(gallerySlider, currentIndex);
    });
};
