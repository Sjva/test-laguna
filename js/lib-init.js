$(document).ready(function(){

    <!-- animation.js -->
    new WOW().init();


<!-- magnific-popup -->
    $('.popup-content').magnificPopup({
            type: 'inline'
        });

    // попап youtube
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });

    // дл плавной прокруттки страницы по якорю

    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });

// // закрытие document.ready
});

