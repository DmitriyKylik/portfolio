import $ from 'jquery';

import {popupSettings} from './configs/popup.settings';
import {sliderSettings} from './configs/slider.settings';
import * as portfolioSlider from './modules/portfolio.slider';
import * as magicScroll from './modules/magicScroll';
import * as mmenu from './modules/mmenu';
import * as parsley from './modules/messageForm';

$(function() {
    const $sliderGalleryLink = $('.slider_gallery-link');
    const $portfolioGallery = $('.portfolio_gallery');
    const $portfolioMainSlider = $('.portfolio_slider');
    const $headerMenu = $('#my-menu');
    const $navAnchors = $('.nav_anchor');
    const $messageForm = $('#message_form');

    portfolioSlider.init(sliderSettings, popupSettings, $sliderGalleryLink, $portfolioMainSlider, $portfolioGallery);
    mmenu.init($headerMenu);
    magicScroll.init($navAnchors);
    parsley.init($messageForm);
});

