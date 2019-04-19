import $ from 'jquery';

import TweenMax from 'TweenMax';
import 'animation.gsap';
import 'debug.addIndicators';

import {popupSettings} from './configs/popup.settings';
import {sliderSettings} from './configs/slider.settings';
import * as portfolioSlider from './modules/portfolio.slider';
import './modules/magicScroll';
import './modules/mmenu';

$(function() {
    const initPortfolioSlider = () => {
        const $sliderGalleryLink = $('.slider_gallery-link');
        const $portfolioGallery = $('.portfolio_gallery');
        const $portfolioMainSlider = $('.portfolio_slider');
        const $portfolioPopup = $('.portfolio_popup');
        portfolioSlider.init(sliderSettings, popupSettings, $sliderGalleryLink, $portfolioMainSlider, $portfolioGallery);
    };
    initPortfolioSlider();
});

