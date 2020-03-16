var reviews_dom = $('.comments').html();
$(document).ready(function($) {
    $('.menu__burger').on('click', function(e) {
        $('.menu').toggleClass('active');
    });

    $('.menu__close').on('click', function(e) {
        $('.menu').toggleClass('active');
    });

    var winWidth = window.innerWidth;
    var reviewsSlider;
    var aboutSlider;
    var reviewsSliderOption = {
        mode: 'horizontal',
        pager: true,
        controls: false,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 1,
        slideWidth: 285
    };
    var webSliderOption = {
        controls: false,
        pager: false,
        minSlides: 4,
        maxSlides: 4,
        moveSlides: 1,
        pause: 3000,
        auto: true,
        mode: 'vertical'
    };
    $('.header__video')[0].play();

    if (winWidth <= 991) {
        reviewsSlider = $('.comment__list').bxSlider(reviewsSliderOption);
        aboutSlider = $('.about__list').bxSlider(reviewsSliderOption);
    } else {
        reviewsSlider = $('.comment__list').bxSlider(webSliderOption);
    }
    $(window).resize(function() {
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
    $('.menu__item-link').click(function(e) {
        e.preventDefault();
        var tar = e.currentTarget.id;
        var fix = 0;
        if (tar == 'links') {
            fix = 600;
        }
        $("html, body").animate({
            scrollTop: $("." + tar).offset().top - fix
        }, 1000);
        return false;
    });
    $('[data-open-modal]').click(function(event) {
        var id = $(this).data('open-modal');
        $('body').addClass('modal-open');
        $('#' + id).addClass('show in');
    });
    $('.modal-dialog').click(function(event) {
        return event.stopPropagation();
    });
    $('.modal').click(function(event) {
        $(this).removeClass('show in');
        $('body').removeClass('modal-open');
    });
    $('.close').click(function() {
        $(this).closest('.modal').click();
    });
    $('.js_search_comments').keyup(function() {
        var val = $(this).val().toLowerCase();
        if (val) {
            $('.js_search > *').hide();
            console.log('.js_search > [data-username*="' + val + '"], ' + '.js_search > [data-message*="' + val + '"], ' + '.js_search > [data-id*="' + val + '"], ' + '.js_search > [data-network*="' + val + '"]');
            $('.js_search > [data-username*="' + val + '"], ' + '.js_search > [data-message*="' + val + '"], ' + '.js_search > [data-id*="' + val + '"], ' + '.js_search > [data-network*="' + val + '"]').show();
        } else {
            $('.js_search > *').show();
        }
    });
});
