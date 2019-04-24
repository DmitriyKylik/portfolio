import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
import 'ScrollTo';

const controller = new ScrollMagic.Controller();

controller.scrollTo((target) => {
    TweenMax.to(window, 0.5, {
        scrollTo: {
            y: target,
            offsetY: 50,
            autoKill: true
        },
        ease: Cubic.easeInOut
    });
});

export const init = elements => {
    $(elements).on('click', event => {
        const $this = event.currentTarget;
        const id = $($this).attr('href');
        if (id.length > 0) {
            event.preventDefault();
            // trigger scroll
            controller.scrollTo(id);
        }
    });
};
