/** @odoo-module **/

odoo.define('@dhs/js/swiper_blog', function (require) {
    "use strict";

    const { whenReady } = require("@web/core/utils/functions");
    const Swiper = require('dhs.swiper');

    whenReady(() => {
        const slider = document.querySelector('#blogSlider1');
        if (!slider) {
            console.warn("Slider element #blogSlider1 not found");
            return;
        }

        new Swiper(slider, {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '[data-slider-next="#blogSlider1"]',
                prevEl: '[data-slider-prev="#blogSlider1"]',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            },
        });

        console.log("✅ Swiper initialized on #blogSlider1");
    });

    return {};
});
