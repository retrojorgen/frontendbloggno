

(function($) {

  $(function() {

    var firstSectionOffsetTop = $('.about-nettavisen').offset().top;

    // Make funky changes on scrolling
    $(window).on('scroll', function() {
      if($('.down-icon').css('font-size') !== '20px') {
        $('.header').css('background-position-y', -(window.scrollY/2));
      }
    });

    // Scroll down to first section on button click
    $('.scroll-down').on('click', function() {
      $('body, html').animate({
        scrollTop: firstSectionOffsetTop + 'px'
      }, 400);
    });

  });
})(jQuery);