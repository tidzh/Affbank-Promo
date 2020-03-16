var reviews_dom,
    winWidth,
    reviewsSlider,
    aboutSlider,
    reviewsSliderOption = {
        mode: 'horizontal',
        pager: true,
        controls: false,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1
    },
    webSliderOption = {
        mode: 'vertical',
        controls: false,
        pager: false,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        pause: 3000,
        auto: true
    };

$(window).ready(function ($) {
    winWidth = window.innerWidth;
    reviews_dom = $('.comments').html();
    $('.menu__burger').on('click', function (e) {
        $('.menu').toggleClass('active');
    });

    $('.menu__close').on('click', function (e) {
        $('.menu').toggleClass('active');
    });

    $('.header__video')[0].play();



    $('.menu__item-link').click(function (e) {
        e.preventDefault();
        var tar = e.currentTarget.id;
        $("html, body").animate({
            scrollTop: $("." + tar).offset().top
        }, 1000);
        return false;
    });
});

$(window).load(function () {
    if (winWidth <= 991) {
        reviewsSlider = $('.comment__list').bxSlider(reviewsSliderOption);
        aboutSlider = $('.about__list').bxSlider(reviewsSliderOption);
    } else {
        reviewsSlider = $('.comment__list').bxSlider(webSliderOption);
    }
});

$(window).resize(function () {
    winWidth = window.innerWidth;
    if (winWidth <= 991) {
        reviewsSlider.destroySlider();
        $('.comments').html(reviews_dom);
        reviewsSlider = $('.comment__list').bxSlider(reviewsSliderOption);
    } else if (winWidth > 991) {
        reviewsSlider.destroySlider();
        $('.comments').html(reviews_dom);
        reviewsSlider = $('.comment__list').bxSlider(webSliderOption);
    }
    if (winWidth <= 991 && !aboutSlider) {
        aboutSlider = $('.about__list').bxSlider(reviewsSliderOption);
    } else if (winWidth > 991 && aboutSlider) {
        aboutSlider.destroySlider();
        aboutSlider = null;
    }
});