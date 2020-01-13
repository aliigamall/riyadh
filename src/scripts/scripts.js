// burger menu
document.querySelector('.main-header__responsive-icon').addEventListener('click', function(){
    document.querySelector('.main-header').classList.toggle('main-header--open');
});

document.querySelector('.main-header__overlay').addEventListener('click', function(){
    document.querySelector('.main-header').classList.toggle('main-header--open');
});


$(function () {
    // tabs
    var tabsComponent = $('.tabs__tab-bar');
    if (tabsComponent) {
        $('.tabs__tab-item').on('click', function (event) {
            event.preventDefault();
            var $scope = $(this).parents('.tabs');
            var tabTarget = this.hash;
            $scope.find('.tabs__tab-item').removeClass('tabs__tab-item--active');
            $(this).addClass('tabs__tab-item--active');

            $scope.find('.tabs__tab-panel').removeClass('tabs__tab-panel--active');
            $scope.find('.tabs__tab-panel').find('[data-animation]').removeClass('is-animated');
            $(tabTarget).addClass('tabs__tab-panel--active');
            setTimeout(() => {
                $(tabTarget).find('[data-animation]').addClass('is-animated');
            }, 10);
            var govsSwiper = new Swiper('#govsSwiper', {
                spaceBetween: 20,
                navigation: {
                    nextEl: '#govsSwiper .swiper-button-next',
                    prevEl: '#govsSwiper .swiper-button-prev',
                },
                pagination: {
                    el: '#govsSwiper .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }
            });
        });
    }

    // search box
    $(".search-box__icon").on("click", function(e){
        e.preventDefault();
        $(".search-box__input").focus();
        $(".search-box").toggleClass("is-open");
    });

    // body grey scale
    $("#enableGreyScale").on("click", function(e){
        e.preventDefault();
        $("body").toggleClass("body--grayscale");
    });

    $("#BtnVotingResult").on("click", function (e) {
        e.preventDefault();
        $(".voting__results").addClass('voting__results--show');
    });
    $("#BtnVotingBack").on("click", function (e) {
        e.preventDefault();
        $(".voting__results").removeClass('voting__results--show');
    });
    var servicesSwiper = new Swiper('#servicesSwiper', {
        spaceBetween: 10,
        navigation: {
            nextEl: '#servicesSwiper .swiper-button-next',
            prevEl: '#servicesSwiper .swiper-button-prev',
        },
        pagination: {
            el: '#servicesSwiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 4,
            },
        }
    });
    var newsSwiper = new Swiper('#newsSwiper', {
        spaceBetween: 20,
        navigation: {
            nextEl: '#newsSwiper .swiper-button-next',
            prevEl: '#newsSwiper .swiper-button-prev',
        },
        pagination: {
            el: '#newsSwiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        }
    });

    

    var adsSwiper = new Swiper('#adsSwiper', {
        pagination: {
            el: '#adsSwiper .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        }
    });

    var galleryThumbs = new Swiper('#bannerThmubs', {
        spaceBetween: 10,
        slidesPerView: 3,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('#bannerSlider', {
        parallax:true,
        effect: 'fade',
        autoplay: {
            delay: 10000,
        },
        loop: true,
        thumbs: {
            swiper: galleryThumbs
        }
    });
    // scrolltop btton 
    $("#scrollTop").on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });
});



