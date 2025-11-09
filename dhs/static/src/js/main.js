/** @odoo-module **/

import publicWidget from "@web/legacy/js/public/public_widget";
import { _t } from "@web/core/l10n/translation";

// لتضمين مكتبات خارجية مثل jQuery.datetimepicker, counterUp, Swiper, Isotope
// يجب التأكد من تحميلها مسبقاً عبر ملف assets.xml الخاص بوحدة Odoo.

publicWidget.registry.MediaxThemeMain = publicWidget.Widget.extend({
    // هذا المُحدد (Selector) يحدد أين سيتم تشغيل هذا الكود.
    // يمكن استبداله بمُحدد أكثر تحديداً إذا كان هذا الكود خاصاً بصفحة معينة.
    selector: 'body',

    // الوظيفة الأساسية التي يتم تشغيلها عند تحميل الويدجت
    start: function () {
        const self = this;
        const $ = this.$;

        // استدعاء الوظائف المترجمة
        self._initThMobileMenu($);
        self._initStickyFix($);
        self._initScrollToTop($);
        self._initBackgroundData($);
        self._initThSlider($);
        self._initAnimationProperties($);
        self._initSliderTabs($);
        self._initCustomServiceSlider($);
        self._initAjaxContactForm($);
        self._initPopupSearchBox($);
        self._initPopupSideMenu($);
        self._initMagnificPopup($);
        self._initSectionPosition($);
        self._initHoverItem($);
        self._initFilter($);
        self._initCounterUp($);
        self._initDateTimePicker($);
        self._initShapeMockup($);
        self._initProgressBar($);
        self._initCountdown($);
        self._initIndicator($);
        self._initImageSlider($);
        self._initWoocommerceToggle($);

        // إزالة وظيفة Preloader لتجنب التعارض مع آلية تحميل Odoo،
        // أو يجب تطبيقها بطريقة مختلفة عبر QWeb/CSS.

        return this._super.apply(this, arguments);
    },

    // 03. Mobile Menu - (معدّل)
    _initThMobileMenu: function ($) {
        $.fn.thmobilemenu = function (options) {
            // الكود الأصلي للدالة thmobilemenu
            var opt = $.extend(
                {
                    menuToggleBtn: ".th-menu-toggle",
                    bodyToggleClass: "th-body-visible",
                    subMenuClass: "th-submenu",
                    subMenuParent: "th-item-has-children",
                    subMenuParentToggle: "th-active",
                    meanExpandClass: "th-mean-expand",
                    appendElement: '<span class="th-mean-expand"></span>',
                    subMenuToggleClass: "th-open",
                    toggleSpeed: 400,
                },
                options
            );

            return this.each(function () {
                var menu = $(this);

                function menuToggle() {
                    menu.toggleClass(opt.bodyToggleClass);

                    var subMenu = "." + opt.subMenuClass;
                    $(subMenu).each(function () {
                        if ($(this).hasClass(opt.subMenuToggleClass)) {
                            $(this).removeClass(opt.subMenuToggleClass);
                            $(this).css("display", "none");
                            $(this).parent().removeClass(opt.subMenuParentToggle);
                        }
                    });
                }

                menu.find("li").each(function () {
                    var submenu = $(this).find("ul");
                    submenu.addClass(opt.subMenuClass);
                    submenu.css("display", "none");
                    submenu.parent().addClass(opt.subMenuParent);
                    submenu.prev("a").append(opt.appendElement);
                    submenu.next("a").append(opt.appendElement);
                });

                function toggleDropDown($element) {
                    var $parent = $($element).parent();
                    var $siblings = $parent.siblings();

                    $siblings.removeClass(opt.subMenuParentToggle);
                    $siblings.find("ul").slideUp(opt.toggleSpeed).removeClass(opt.subMenuToggleClass);

                    $parent.toggleClass(opt.subMenuParentToggle);
                    $($element).next("ul").slideToggle(opt.toggleSpeed).toggleClass(opt.subMenuToggleClass);
                }

                var expandToggler = "." + opt.meanExpandClass;
                $(expandToggler).each(function () {
                    $(this).on("click", function (e) {
                        e.preventDefault();
                        toggleDropDown($(this).parent());
                    });
                });

                $(opt.menuToggleBtn).each(function () {
                    $(this).on("click", function () {
                        menuToggle();
                    });
                });

                menu.on("click", function (e) {
                    e.stopPropagation();
                    menuToggle();
                });

                menu.find("div").on("click", function (e) {
                    e.stopPropagation();
                });
            });
        };

        $(".th-menu-wrapper", self.$el).thmobilemenu();
    },

    // 04. Sticky fix
    _initStickyFix: function ($) {
        $(window).on('scroll', function () {
            var topPos = $(this).scrollTop();
            if (topPos > 500) {
                $('.sticky-wrapper').addClass('sticky');
                $('.category-menu').addClass('close-category');
            } else {
                $('.sticky-wrapper').removeClass('sticky')
                $('.category-menu').removeClass('close-category');
            }
        });
    },

    // 05. Scroll To Top
    _initScrollToTop: function ($) {
        if ($('.scroll-top').length > 0) {

            var scrollTopbtn = document.querySelector('.scroll-top');
            var progressPath = document.querySelector('.scroll-top path');

            // تحقق من وجود مسار SVG قبل محاولة الوصول إلى خصائصه
            if (progressPath) {
                var pathLength = progressPath.getTotalLength();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                progressPath.style.strokeDashoffset = pathLength;
                progressPath.getBoundingClientRect();
                progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';      
                var updateProgress = function () {
                    var scroll = $(window).scrollTop();
                    var height = $(document).height() - $(window).height();
                    var progress = pathLength - (scroll * pathLength / height);
                    progressPath.style.strokeDashoffset = progress;
                }
                updateProgress();
                $(window).on('scroll', updateProgress);  
            }

            var offset = 50;
            var duration = 750;
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > offset) {
                    $(scrollTopbtn).addClass('show');
                } else {
                    $(scrollTopbtn).removeClass('show');
                }
            });            
            $(scrollTopbtn).on('click', function(event) {
                event.preventDefault();
                $('html, body').animate({scrollTop: 0}, duration);
                return false;
            });
        }
    },

    // 06. Set Background Image Color & Mask - (معدّل)
    _initBackgroundData: function ($) {
        $("[data-bg-src]", this.$el).each(function () {
            var src = $(this).attr("data-bg-src");
            $(this).css("background-image", "url(" + src + ")");
            $(this).removeAttr("data-bg-src").addClass("background-image");
        });

        $('[data-bg-color]', this.$el).each(function () {
            var color = $(this).attr('data-bg-color');
            $(this).css('background-color', color);
            $(this).removeAttr('data-bg-color');
        });

        $('[data-mask-src]', this.$el).each(function () {
            var mask = $(this).attr('data-mask-src');
            $(this).css({
                'mask-image': 'url(' + mask + ')',
                '-webkit-mask-image': 'url(' + mask + ')'
            });
            $(this).addClass('bg-mask');
            $(this).removeAttr('data-mask-src');
        });
    },

    // 07. Global Slider - (معدّل)
    _initThSlider: function ($) {
        // يتطلب تحميل مكتبة Swiper.js في assets.xml
        if (typeof Swiper === 'undefined') {
            console.warn('Swiper library is not loaded. Skipping ThSlider initialization.');
            return;
        }

        $('.th-slider', this.$el).each(function () {
            var thSlider = $(this);
            var settings = thSlider.data('slider-options') || {};
            var prevArrow = thSlider.find('.slider-prev');
            var nextArrow = thSlider.find('.slider-next');
            var paginationEl = thSlider.find('.slider-pagination');
            var autoplayconditon = settings['autoplay'];

            var sliderDefault = {
                slidesPerView: 1,
                spaceBetween: settings['spaceBetween'] ? settings['spaceBetween'] : 24,
                loop: settings['loop'] === false ? false : true,
                speed: settings['speed'] ? settings['speed'] : 1000,
                autoplay: autoplayconditon ? autoplayconditon : {delay: 6000, disableOnInteraction: false},
                navigation: {
                    nextEl: nextArrow.get(0),
                    prevEl: prevArrow.get(0),  
                },
                pagination: {
                    el: paginationEl.get(0),
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '" aria-label="Go to Slide ' + (index + 1) + '"></span>';
                    },
                },
            };

            var options = JSON.parse(thSlider.attr('data-slider-options') || '{}');
            options = $.extend({}, sliderDefault, options);

            // استخدام Swiper مباشرة
            var swiper = new Swiper(thSlider.get(0), options);

            if ($('.slider-area').length > 0) {
                $('.slider-area').closest(".container").parent().addClass("arrow-wrap");
            }

            // Logic for Swiper Tabs/View (يحتاج إلى كود منفصل لإدارة swiperView و swiperTab)
            // نكتفي بالتهيئة الأساسية الآن.
        });

        // Add click event handlers for external slider arrows based on data attributes
        $('[data-slider-prev], [data-slider-next]', this.$el).on('click', function (e) {
            e.preventDefault();
            var sliderSelectors = ($(this).data('slider-prev') || $(this).data('slider-next')).split(', ');

            sliderSelectors.forEach(function(sliderSelector) {
                var targetSlider = $(sliderSelector);

                if (targetSlider.length) {
                    // يجب أن تكون طريقة الوصول إلى Swiper Instance بهذا الشكل في بيئة Odoo
                    var swiper = targetSlider[0].swiper;

                    if (swiper) {
                        if ($(this).data('slider-prev')) {
                            swiper.slidePrev();
                        } else {
                            swiper.slideNext();
                        }
                    }
                }
            }.bind(this)); // Bind this to access $(this) correctly inside forEach
        });
    },

    // 07. Global Slider - Animation Properties
    _initAnimationProperties: function ($) {
        $('[data-ani]', this.$el).each(function () {
            var animationName = $(this).data('ani');
            $(this).addClass(animationName);
        });

        $('[data-ani-delay]', this.$el).each(function () {
            var delayTime = $(this).data('ani-delay');
            $(this).css('animation-delay', delayTime);
        });
    },

    // 08. Slider Tab
    _initSliderTabs: function ($) {
        $.fn.activateSliderThumbs = function (options) {
            // ... الكود الأصلي للدالة activateSliderThumbs
            var opt = $.extend(
                {
                    sliderTab: false,
                    tabButton: ".tab-btn",
                },
                options
            );

            return this.each(function () {
                var $container = $(this);
                var $thumbs = $container.find(opt.tabButton);
                var $line = $('<span class="indicator"></span>').appendTo($container);

                var sliderSelector = $container.data("slider-tab");
                var $slider = $(sliderSelector);

                var swiper = $slider.length ? $slider[0].swiper : null; // التحقق من وجود swiper

                $thumbs.on("click", function (e) {
                    e.preventDefault();
                    var clickedThumb = $(this);

                    clickedThumb.addClass("active").siblings().removeClass("active");
                    linePos(clickedThumb, $container);

                    if (opt.sliderTab && swiper) {
                        var slideIndex = clickedThumb.index();
                        swiper.slideTo(slideIndex);
                    }
                });

                if (opt.sliderTab && swiper) {
                    swiper.on("slideChange", function () {
                        var activeIndex = swiper.realIndex;
                        var $activeThumb = $thumbs.eq(activeIndex);

                        $activeThumb.addClass("active").siblings().removeClass("active");
                        linePos($activeThumb, $container);
                    });

                    var initialSlideIndex = swiper.activeIndex;
                    var $initialThumb = $thumbs.eq(initialSlideIndex);
                    $initialThumb.addClass("active").siblings().removeClass("active");
                    linePos($initialThumb, $container);
                }

                function linePos($activeThumb) {
                    if (!$activeThumb || $activeThumb.length === 0) return; // حماية
                    var thumbOffset = $activeThumb.position();

                    var marginTop = parseInt($activeThumb.css('margin-top')) || 0;
                    var marginLeft = parseInt($activeThumb.css('margin-left')) || 0;

                    $line.css("--height-set", $activeThumb.outerHeight() + "px");
                    $line.css("--width-set", $activeThumb.outerWidth() + "px");
                    $line.css("--pos-y", thumbOffset.top + marginTop + "px");
                    $line.css("--pos-x", thumbOffset.left + marginLeft + "px");
                }
            });
        };

        if ($(".hero-thumb").length) {
            $(".hero-thumb", this.$el).activateSliderThumbs({
                sliderTab: true,
                tabButton: ".tab-btn",
            });
        }
    },

    // 09. Custom Service Slider
    _initCustomServiceSlider: function ($) {
        $('.service-list-wrap', this.$el).on('click', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
        function showNextService() {
            var $activeService = $('.service-list-area .service-list-wrap.active', this.$el);
            if ($activeService.next().length > 0) {
                $activeService.removeClass('active');
                $activeService.next().addClass('active');
            } else {
                $activeService.removeClass('active');
                $('.service-list-area .service-list-wrap:first', this.$el).addClass('active');
            }
        }

        function showPreviousService() {
            var $activeService = $('.service-list-area .service-list-wrap.active', this.$el);
            if ($activeService.prev().length > 0) {
                $activeService.removeClass('active');
                $activeService.prev().addClass('active');
            } else {
                $activeService.removeClass('active');
                $('.service-list-area .service-list-wrap:last', this.$el).addClass('active');
            }
        }
        $('.service-prev', this.$el).on('click', showPreviousService.bind(this));
        $('.service-next', this.$el).on('click', showNextService.bind(this));
    },

    // 10. Ajax Contact Form - (معدّل)
    _initAjaxContactForm: function ($) {
        const form = ".ajax-contact";
        const invalidCls = "is-invalid";
        const $email = '[name="email"]';
        const $validation = '[name="name"],[name="email"],[name="subject"],[name="number"],[name="message"]';
        const formMessages = $(".form-messages", this.$el);

        const validateContact = function() {
            var valid = true;
            var formInput;

            function unvalid($validation) {
                $validation = $validation.split(",");
                for (var i = 0; i < $validation.length; i++) {
                    formInput = form + " " + $validation[i];
                    if (!$(formInput, this.$el).val()) {
                        $(formInput, this.$el).addClass(invalidCls);
                        valid = false;
                    } else {
                        $(formInput, this.$el).removeClass(invalidCls);
                    }
                }
            }
            unvalid($validation);

            if (
                !$(form + " " + $email, this.$el).val() ||
                !$(form + " " + $email, this.$el).val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)
            ) {
                $(form + " " + $email, this.$el).addClass(invalidCls);
                valid = false;
            } else {
                $(form + " " + $email, this.$el).removeClass(invalidCls);
            }
            return valid;
        }.bind(this); // ربط الوظيفة بنطاق الويدجت

        const sendContact = function() {
            var formData = $(form, this.$el).serialize();
            var valid;
            valid = validateContact();
            if (valid) {
                // ملاحظة: يجب تعديل هذه الآلية لترسل إلى Controller/Route في Odoo
                // أو استخدام نموذج (Form) أودو التقليدي بدلاً من AJAX خام.
                // هذا الكود هو فقط لمحاكاة سلوك القالب الأصلي:
                $.ajax({
                    url: $(form, this.$el).attr("action"),
                    data: formData,
                    type: "POST",
                })
                .done(function (response) {
                    formMessages.removeClass("error").addClass("success").text(response);
                    $(
                        form + ' input:not([type="submit"]),' + form + " textarea", this.$el
                    ).val("");
                })
                .fail(function (data) {
                    formMessages.removeClass("success").addClass("error");
                    if (data.responseText !== "") {
                        formMessages.html(data.responseText);
                    } else {
                        formMessages.html(_t("Oops! An error occurred and your message could not be sent."));
                    }
                });
            }
        }.bind(this);

        $(form, this.$el).on("submit", function (element) {
            element.preventDefault();
            sendContact();
        });
    },

    // 11. Search Box Popup
    _initPopupSearchBox: function ($) {
        function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
            $($searchOpen, this.$el).on("click", function (e) {
                e.preventDefault();
                $($searchBox).addClass($toggleCls);
            });
            $($searchBox).on("click", function (e) {
                e.stopPropagation();
                $($searchBox).removeClass($toggleCls);
            });
            $($searchBox)
                .find("form")
                .on("click", function (e) {
                    e.stopPropagation();
                    $($searchBox).addClass($toggleCls);
                });
            $($searchCls, this.$el).on("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                $($searchBox).removeClass($toggleCls);
            });
        }
        popupSarchBox( ".popup-search-box", ".searchBoxToggler", ".searchClose", "show" );
    },

    // 12. Popup Sidemenu
    _initPopupSideMenu: function ($) {
        function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
            $($sideMunuOpen, this.$el).on('click', function (e) {
                e.preventDefault();
                $($sideMenu).addClass($toggleCls);
            });
            $($sideMenu).on('click', function (e) {
                e.stopPropagation();
                $($sideMenu).removeClass($toggleCls)
            });
            var sideMenuChild = $sideMenu + ' > div';
            $(sideMenuChild).on('click', function (e) {
                e.stopPropagation();
                $($sideMenu).addClass($toggleCls)
            });
            $($sideMenuCls, this.$el).on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                $($sideMenu).removeClass($toggleCls);
            });
        };
        popupSideMenu('.sidemenu-cart', '.sideMenuCart', '.sideMenuCls', 'show');
        popupSideMenu('.sidemenu-info', '.sideMenuInfo', '.sideMenuCls', 'show');
    },

    // 13. Magnific Popup - (يتطلب تحميل المكتبة)
    _initMagnificPopup: function ($) {
        // تأكد من تحميل Magnific-Popup
        if ($.fn.magnificPopup) {
            $(".popup-image", this.$el).magnificPopup({
                type: "image",
                mainClass: 'mfp-zoom-in',
                removalDelay: 260,
                gallery: { enabled: true },
            });
            $(".popup-video", this.$el).magnificPopup({ type: "iframe" });
            $(".popup-content", this.$el).magnificPopup({ type: "inline", midClick: true });
        }
    },

    // 14. Section Position
    _initSectionPosition: function ($) {
        function convertInteger(str) {
            return parseInt(str, 10);
        }

        $.fn.sectionPosition = function (mainAttr, posAttr) {
            $(this).each(function () {
                var section = $(this);

                function setPosition() {
                    var sectionHeight = Math.floor(section.height() / 2),
                        posData = section.attr(mainAttr),
                        posFor = section.attr(posAttr),
                        topMark = "top-half",
                        bottomMark = "bottom-half",
                        parentPT = convertInteger($(posFor).css("padding-top")),
                        parentPB = convertInteger($(posFor).css("padding-bottom"));

                    if (posData === topMark) {
                        $(posFor).css( "padding-bottom", parentPB + sectionHeight + "px" );
                        section.css("margin-top", "-" + sectionHeight + "px");
                    } else if (posData === bottomMark) {
                        $(posFor).css( "padding-top", parentPT + sectionHeight + "px" );
                        section.css("margin-bottom", "-" + sectionHeight + "px");
                    }
                }
                setPosition();
            });
        };

        var postionHandler = "[data-sec-pos]";
        if ($(postionHandler).length) {
             // imagesLoaded يتطلب تحميل المكتبة
            if ($.fn.imagesLoaded) {
                $(postionHandler).imagesLoaded(function () {
                    $(postionHandler, this.$el).sectionPosition("data-sec-pos", "data-pos-for");
                });
            } else {
                $(postionHandler, this.$el).sectionPosition("data-sec-pos", "data-pos-for");
            }
        }
    },

    // 15. Hover Item
    _initHoverItem: function ($) {
        $(".hover-item", this.$el).hover(function() {
            $(this).addClass("item-active");
            $(this).siblings().removeClass("item-active");
        });
    },

    // 16. Filter (Isotope) - (يتطلب تحميل المكتبة)
    _initFilter: function ($) {
        // يتطلب تحميل مكتبتي Isotope و imagesLoaded
        if (!$.fn.imagesLoaded || !$.fn.isotope) {
            console.warn('Isotope or ImagesLoaded library is not loaded. Skipping Filter initialization.');
            return;
        }

        $(".filter-active", this.$el).imagesLoaded(function () {
            var $filter = ".filter-active",
                $filterItem = ".filter-item",
                $filterMenu = ".filter-menu-active";

            if ($($filter).length > 0) {
                var $grid = $($filter).isotope({
                    itemSelector: $filterItem,
                    filter: "*",
                    masonry: { },
                });

                $($filterMenu).on("click", "button", function () {
                    var filterValue = $(this).attr("data-filter");
                    $grid.isotope({ filter: filterValue });
                });

                $($filterMenu).on("click", "button", function (event) {
                    event.preventDefault();
                    $(this).addClass("active");
                    $(this).siblings(".active").removeClass("active");
                });
            }
        });

        $(".masonary-active, .woocommerce-Reviews .comment-list", this.$el).imagesLoaded(function () {
            var $filter = ".masonary-active, .woocommerce-Reviews .comment-list",
                $filterItem = ".filter-item, .woocommerce-Reviews .comment-list li";

            if ($($filter).length > 0) {
                $($filter).isotope({
                    itemSelector: $filterItem,
                    filter: "*",
                    masonry: { columnWidth: 1 },
                });
            }
            // إعادة تصفية عند تغيير التاب
            $('[data-bs-toggle="tab"]').on('shown.bs.tab', function () {
                $($filter).isotope({ filter: "*" });
            });
        });
    },

    // 17. Counter Up - (يتطلب تحميل المكتبة)
    _initCounterUp: function ($) {
        if ($.fn.counterUp) {
            $(".counter-number", this.$el).counterUp({ delay: 10, time: 1000 });
        }
    },

    // 18. Date Time Picker - (يتطلب تحميل المكتبة)
    _initDateTimePicker: function ($) {
        if ($.fn.datetimepicker) {
            $('.date-pick', this.$el).datetimepicker({ timepicker: false, datepicker: true, format: 'd-m-y', step: 10 });
            $('.time-pick', this.$el).datetimepicker({ datepicker:false, format:'H:i', step:30 });
            $('.date-time-pick', this.$el).datetimepicker({});
        }
    },

    // 19. Shape Mockup
    _initShapeMockup: function ($) {
        $.fn.shapeMockup = function () {
            var $shape = $(this);
            $shape.each(function () {
                var $currentShape = $(this),
                    shapeTop = $currentShape.data("top"),
                    shapeRight = $currentShape.data("right"),
                    shapeBottom = $currentShape.data("bottom"),
                    shapeLeft = $currentShape.data("left");
                $currentShape
                    .css({
                        top: shapeTop,
                        right: shapeRight,
                        bottom: shapeBottom,
                        left: shapeLeft,
                    })
                    .removeAttr("data-top")
                    .removeAttr("data-right")
                    .removeAttr("data-bottom")
                    .removeAttr("data-left")
                    .parent()
                    .addClass("shape-mockup-wrap");
            });
        };

        if ($(".shape-mockup").length) {
            $(".shape-mockup", this.$el).shapeMockup();
        }
    },

    // 20. Progress Bar Animation - (يتطلب تحميل مكتبة Waypoints)
    _initProgressBar: function ($) {
        if ($.fn.waypoint) {
            $('.progress-bar', this.$el).waypoint(function() {
                $('.progress-bar', this.$el).css({
                    animation: "animate-positive 1.8s",
                    opacity: "1"
                });
            }, { offset: '75%', context: window }); // تحديد context: window لضمان العمل
        }
    },

    // 21. Countdown
    _initCountdown: function ($) {
        $.fn.countdown = function () {
            $(this).each(function () {
                var $counter = $(this),
                    countDownDate = new Date($counter.data("offer-date")).getTime(),
                    exprireCls = "expired";

                function s$(element) {
                    return $counter.find(element);
                }

                var counter = setInterval(function () {
                    var now = new Date().getTime();
                    var distance = countDownDate - now;

                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    days < 10 ? (days = "0" + days) : null;
                    hours < 10 ? (hours = "0" + hours) : null;
                    minutes < 10 ? (minutes = "0" + minutes) : null;
                    seconds < 10 ? (seconds = "0" + seconds) : null;

                    if (distance < 0) {
                        clearInterval(counter);
                        $counter.addClass(exprireCls);
                        $counter.find(".message").css("display", "block");
                    } else {
                        s$(".day").html(days);
                        s$(".hour").html(hours);
                        s$(".minute").html(minutes);
                        s$(".seconds").html(seconds);
                    }
                }, 1000);
            });
        };

        if ($(".counter-list").length) {
            $(".counter-list", this.$el).countdown();
        }
    },

    // 22. Indicator
    _initIndicator: function ($) {
        $.fn.indicator = function () {
            $(this).each(function () {
                var $menu = $(this),
                    $linkBtn = $menu.find("a"),
                    $btn = $menu.find("button");

                $menu.append('<span class="indicator"></span>');
                var $line = $menu.find(".indicator");

                var $currentBtn;
                if ($linkBtn.length) {
                    $currentBtn = $linkBtn;
                } else if ($btn.length) {
                    $currentBtn = $btn;
                }

                $currentBtn.on("click", function (e) {
                    e.preventDefault();
                    $(this).addClass("active");
                    $(this).siblings(".active").removeClass("active");
                    linePos();
                });

                function linePos() {
                    var $btnActive = $menu.find(".active");
                    if (!$btnActive.length) return; // حماية

                    var $height = $btnActive.css("height"),
                        $width = $btnActive.css("width"),
                        $top = $btnActive.position().top + "px",
                        $left = $btnActive.position().left + "px";

                    $(window).on('resize', function () {
                        $top = $btnActive.position().top + "px";
                        $left = $btnActive.position().left + "px";
                    });

                    $line.get(0).style.setProperty("--height-set", $height);
                    $line.get(0).style.setProperty("--width-set", $width);
                    $line.get(0).style.setProperty("--pos-y", $top);
                    $line.get(0).style.setProperty("--pos-x", $left);
                }

                linePos();
                $(window).on('resize', linePos);
            });
        };

        if ($(".indicator-active").length) {
            $(".indicator-active", this.$el).indicator();
        }
    },

    // 20. image Slider
    _initImageSlider: function ($) {
        $("#compslider", this.$el).on("input change", (e)=>{
            const sliderPos = e.target.value;
            $('.foreground-img', this.$el).css('width', `${sliderPos}%`)
            $('.slider-button', this.$el).css('left', `calc(${sliderPos}% - 32px)`)
        });
    },

    // 00. Woocommerce Toggle
    _initWoocommerceToggle: function ($) {
        // Ship To Different Address
        $("#ship-to-different-address-checkbox", this.$el).on("change", function () {
            if ($(this).is(":checked")) {
                $("#ship-to-different-address", this.$el).next(".shipping_address").slideDown();
            } else {
                $("#ship-to-different-address", this.$el).next(".shipping_address").slideUp();
            }
        });

        // Login Toggle
        $(".woocommerce-form-login-toggle a", this.$el).on("click", function (e) {
            e.preventDefault();
            $(".woocommerce-form-login", this.$el).slideToggle();
        });

        // Coupon Toggle
        $(".woocommerce-form-coupon-toggle a", this.$el).on("click", function (e) {
            e.preventDefault();
            $(".woocommerce-form-coupon", this.$el).slideToggle();
        });

        // Woocommerce Shipping Method
        $(".shipping-calculator-button", this.$el).on("click", function (e) {
            e.preventDefault();
            $(this).next(".shipping-calculator-form").slideToggle();
        });

        // Woocommerce Payment Toggle
        $('.wc_payment_methods input[type="radio"]:checked', this.$el).siblings(".payment_box").show();
        $('.wc_payment_methods input[type="radio"]', this.$el).each(function () {
            $(this).on("change", function () {
                $(".payment_box", this.$el).slideUp();
                $(this).siblings(".payment_box").slideDown();
            });
        });

        // Woocommerce Rating Toggle
        $(".rating-select .stars a", this.$el).each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(this).siblings().removeClass("active");
                $(this).parent().parent().addClass("selected");
                $(this).addClass("active");
            });
        });

        // Quantity Plus Minus
        $(".quantity-plus", this.$el).each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                var $qty = $(this).siblings(".qty-input");
                var currentVal = parseInt($qty.val(), 10);
                if (!isNaN(currentVal)) {
                    $qty.val(currentVal + 1);
                }
            });
        });

        $(".quantity-minus", this.$el).each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                var $qty = $(this).siblings(".qty-input");
                var currentVal = parseInt($qty.val(), 10);
                if (!isNaN(currentVal) && currentVal > 0) {
                    $qty.val(currentVal - 1);
                }
            });
        });
    },

});