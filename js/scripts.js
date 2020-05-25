
$( document ).ready(function() {

    if (screen.width < 768) {
        $('.carousel').slick({
            dots: false,
            infinite: false,
            speed: 300,
            arrows: false,
            slidesToShow: 1.2,
            slidesToScroll: 1
        });
    }

    if (screen.width < 769) {
        $('.all-icon-box').slick({
            dots: false,
            infinite: false,
            speed: 300,
            arrows: false,
            slidesToShow: 3.2,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1.1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }

    if (screen.width < 990) {
        $('.team-carousel').slick({
            dots: false,
            infinite: false,
            speed: 300,
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1.1
                    }
                }
            ]
        });

        $(".team-button-prev").click(function () {
            $('.team-carousel').slick('slickPrev');
        });
        $(".team-button-next").click(function () {
            $('.team-carousel').slick('slickNext');
        });
    }

    $('.post-carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1.2
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.2
                }
            }
        ]
    });

    $(".post-button-prev").click(function () {
        $('.post-carousel').slick('slickPrev');
    });
    $(".post-button-next").click(function () {
        $('.post-carousel').slick('slickNext');
    });

    $('.news-img-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.1,
                    dots:false
                }
            }
        ]
    });

    $(".news-button-prev").click(function () {
        $('.news-img-carousel').slick('slickPrev');
    });
    $(".news-button-next").click(function () {
        $('.news-img-carousel').slick('slickNext');
    });

    $('.get-carousel').slick({
        dots: false,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".get-button-prev").click(function () {
        $('.get-carousel').slick('slickPrev');
    });
    $(".get-button-next").click(function () {
        $('.get-carousel').slick('slickNext');
    });

    $('.faq-card-header').click(function() {
        var isActive = $(this).hasClass("active");
        $('div.faq-card-header').removeClass('active');
        if (isActive) {
            $(this).removeClass('active')
        } else {
            $(this).addClass("active");
        }

    });
});
