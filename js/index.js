$(document).ready(function () {

    // header height...
    $(function () {
        $('.header').height($(window).height());
    });
    $(window).resize(function () {
        $('.header').height($(window).height());
    });



    // window loading sniper 

    $(window).on('load', function () {
        $('.loading').fadeOut(2000);
    });
    // window scroll 

    $(window).scroll(function () {
        if ($(window).scrollTop() > 97) {
            $("nav").css({
                "backgroundColor": "#080F24",
                "padding": "15px 0",
                "box-shadow": "5px 0 5px #000"
            });
        } else {

            $("nav").css({
                "backgroundColor": "transparent",
                "padding": "25px 0",
                "box-shadow": "none"
            });

        }


    });

    if ($(window).scrollTop() > 97) {
        $("nav").css({
            "backgroundColor": "#080F24",
            "padding": "15px 0",
        });
    } else {

        $("nav").css({
            "backgroundColor": "transparent",
            "padding": "25px 0",
        });

    }

    // smooth scroll 

    $('nav li a').on('click', function () {
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 80
        }, 100);

    });

    // add class active 
    $('nav li a').on('click', function () {
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });

    $(window).scroll(function () {
        $('section').each(function () {
            if ($(window).scrollTop() >= $(this).offset().top) {
                var secID = $(this).attr('id');
                $('nav li a').removeClass('active');
                $('nav li a[data-scroll="' + secID + '"]').addClass('active');
            }
        });

        if ($(window).scrollTop() >= 1000) {
            $('.up').fadeIn(1000);
        } else {
            $('.up').fadeOut(1000);

        }
    });

    // click on button up

    $('.up').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        });
    });



    // 1. Simple mode, it styles document scrollbar:
    // $(function () {
    //     $("body").niceScroll({
    //         cursorcolor: "#FD285C",
    //         cursorborder: "none",
    //         cursorwidth: "8px", // cursor width in pixel (you can also write "5px")
    //         zindex: "99999", // change z-index for scrollbar div
    //     });
    // });

    // swiper

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
