/** @odoo-module **/

import { Component, onMounted } from "@odoo/owl";
import { xml } from "@odoo/owl";
const Swiper = require('dhs.swiper');

export class SwiperBlogSlider extends Component {
    setup() {
        onMounted(() => {
            const slider = this.el.querySelector('#blogSlider1');
            if (!slider) return;

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
        });
    }

    static template = xml/* xml */`
        <div class="slider-area">
            <div class="swiper th-slider has-shadow" id="blogSlider1">
                <div class="swiper-wrapper">
                    <t t-foreach="props.slides" t-as="slide">
                        <div class="swiper-slide">
                            <div class="blog-card">
                                <div class="blog-img">
                                    <img t-att-src="slide.img" alt="blog image"/>
                                </div>
                                <div class="blog-content">
                                    <div class="blog-meta">
                                        <a href="blog.html"><i class="fal fa-user"></i>By Mediax</a>
                                        <a href="blog.html"><i class="fal fa-calendar"></i><t t-esc="slide.date"/></a>
                                    </div>
                                    <h3 class="box-title">
                                        <a href="blog-details.html"><t t-esc="slide.title"/></a>
                                    </h3>
                                    <a href="blog-details.html" class="th-btn btn-sm">Read More</a>
                                </div>
                            </div>
                        </div>
                    </t>
                </div>
            </div>
            <button data-slider-prev="#blogSlider1" class="slider-arrow slider-prev">
                <i class="far fa-arrow-left"></i>
            </button>
            <button data-slider-next="#blogSlider1" class="slider-arrow slider-next">
                <i class="far fa-arrow-right"></i>
            </button>
        </div>
    `;
}
