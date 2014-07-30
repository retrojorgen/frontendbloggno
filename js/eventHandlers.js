

(function($) {

  $(function() {

    var firstSectionOffsetTop = $('.about-nettavisen').offset().top;

    // Make funky changes on scrolling
    $(window).on('scroll', function() {
      $('.header').css('background-position-y', -(window.scrollY/2));
    });

    // Scroll down to first section on button click
    $('.scroll-down').on('click', function() {
      $('body, html').animate({
        scrollTop: (firstSectionOffsetTop+40) + 'px'
      }, 400);
    });

  });
})(jQuery);