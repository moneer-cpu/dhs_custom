/** @odoo-module **/

import { mount } from "@odoo/owl";
import { SwiperBlogSlider } from 'dhs/static/src/js/components/swiper_blog_slider';

mount(SwiperBlogSlider, {
    target: document.querySelector('#your-target'),
    props: {
        slides: [
            {
                img: "/dhs/static/src/img/blog/blog_1_1.jpg",
                date: "15 March, 2024",
                title: "How Business Is Taking Over & What to Do About It"
            },
            {
                img: "/dhs/static/src/img/blog/blog_1_2.jpg",
                date: "16 March, 2024",
                title: "Health vs. Wealth Navigate Business in Medicine"
            }
        ]
    }
});
