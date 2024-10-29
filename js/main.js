(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '-1px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-100px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Experience
    $('.experience').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });

})(jQuery);


document.getElementById('loadMoreEvents').addEventListener('click', function () {
    const hiddenEvents = document.querySelectorAll('.hide-event');
    // Show 3 more events each time the button is clicked
    for (let i = 0; i < 3 && hiddenEvents[i]; i++) {
        hiddenEvents[i].classList.remove('hide-event');
        hiddenEvents[i].classList.add('show-event');
    }

    // If no more hidden events, hide the "Load More" button
    if (document.querySelectorAll('.hide-event').length === 0) {
        this.style.display = 'none';
    }
});


// Handle publications loading
document.addEventListener('DOMContentLoaded', function () {
    const loadMorePublicationsBtn = document.getElementById('loadMorePublications');
    const hiddenPublications = document.querySelectorAll('.hide-publication');

    if (loadMorePublicationsBtn) {
        loadMorePublicationsBtn.addEventListener('click', function () {
            hiddenPublications.forEach(publication => {
                publication.classList.remove('hide-publication');
            });
            loadMorePublicationsBtn.style.display = 'none';
        });
    }
});


