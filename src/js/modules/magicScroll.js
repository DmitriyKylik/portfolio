import ScrollMagic from 'ScrollMagic';

$(function() {
    const controller = new ScrollMagic.Controller();
    const scene = new ScrollMagic.Scene({
        triggerElement: '.section'
    })
        .setClassToggle('.section', 'fade-in')
        .addIndicators({
            name: 'fade scene',
            colorTrigger: 'black',
            indent: 200,
            colorStart: 'pimk'
        })
        .addTo(controller);
});
