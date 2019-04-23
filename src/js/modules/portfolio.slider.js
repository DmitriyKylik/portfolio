import 'slick-carousel';
import 'magnific-popup';

const getCurrentSlideIndex = fireElement => {
    const index = $(fireElement).closest('.slick-active').data('slick-index');
    return index;
};

const setupSlider = (elements, settings) => {
    elements.each((index, element) => {
        const elementDataName = $(element).data('name');
        $(element).slick(settings[elementDataName]);
    });
};

const setupPopup = (elements, settings) => {
    elements.each((index, element) => {
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
        event.preventDefault();
        const currentIndex = getCurrentSlideIndex($this);
        $(gallerySlider).slick('setPosition');
        $(gallerySlider).slick('slickGoTo', parseInt(currentIndex, 10));
    });
};
