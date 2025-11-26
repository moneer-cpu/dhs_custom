/** @odoo-module **/
import { publicWidget } from "@web/legacy/js/public/public_widget";

publicWidget.registry.DhsSwiper = publicWidget.Widget.extend({
    selector: '.swiper-container, .swiper', // حسب نوع الكلاس الموجود عندك
    start() {
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library not loaded!');
            return;
        }
        // تهيئة الـ Swiper
        new Swiper(this.el, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    },
});
