$(document).ready(function () {
    let currentSlide = 0;
    const slides = $('.slide');

    function showSlide(index) {
        slides.removeClass('active');
        slides.eq(index).addClass('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event handlers for next and previous slide buttons
    $('#next-slide').on('click', nextSlide);
    $('#prev-slide').on('click', prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Initial fade-in for main body
    $('#main-body').hide().fadeIn(1000);
    
    // Hide sections initially
    $('#top-offer, #airline-info').hide();
    
    $(window).scroll(function () {
        $('#top-offer').each(function () {
            if ($(this).is(":hidden") && $(window).scrollTop() >= $(this).offset().top - $(window).height()) {
                $(this).slideDown(1000);
            }
        });
        $('#airline-info').each(function () {
            if ($(this).is(":hidden") && $(window).scrollTop() >= $(this).offset().top - $(window).height()) {
                $(this).slideDown(1000);
            }
        });
    });
});
