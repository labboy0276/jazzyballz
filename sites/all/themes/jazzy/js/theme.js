( function($) {
  $(document).ready(function() {

    $("body").addClass("js");

    //scrolling click stuff
    $("a.scrollto").bind('click touchstart', function(e) {
      e.preventDefault();
      var el = $(this).attr("href");

      if (el != '#top') {
        el = el.substring(1, el.length);
      }

      if (el == '#top') {
        $('html, body').animate({
          scrollTop: 0
        }, 'slow');
      }
      else {
        $('html, body').animate({
          scrollTop: $(el).offset().top - 75
        }, 0400);
      }
    });

    // bootsrap 3.2 menu close problems
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
      $('.navbar-collapse').removeClass('in');
    });

    // slide out the colorz
    var slideout = $('#slideout');
    $("#click-me").toggle(function () {
        slideout.animate({
            left: '0'
        }, {
            queue: false,
            duration: 500
        });
        $('.click-div-arrow').removeClass('out');
        $('.click-div-arrow').toggleClass('in');
    }, function () {
        slideout.animate({
            left: '-625px'
        }, {
            queue: false,
            duration: 500
        });
        $('.click-div-arrow').removeClass('in');
        $('.click-div-arrow').toggleClass('out');
    });

    //responsive stuffz for the jCarousel
    enquire
      .register("screen and (min-width: 992px)", {
        match : function() {
          jQuery('.jcarousel').jcarousel({
            visible: 2,
            animation: 1000
          });
        }
      });
    enquire
      .register("screen and (max-width: 991px)", {
        match : function() {
          jQuery('.jcarousel').jcarousel({
            visible: 1,
            animation: 1600
          });
        }
      });

    //microdata win
    $('img').attr('itemprop', 'contentURL');
    $('img').wrap('<div itemscope itemtype="http://schema.org/ImageObject"></div>');

    // Modal finagling w 1 minute cookie and fixing glitchyness.
    var cookie = $.cookie('SESSjazzymodal');
    if (typeof cookie === 'undefined' || cookie === null ) {
      $('#holidayModal').removeClass('hide');
      $('#holidayModal').modal({
        backdrop: 'static',
        show: true,
        keyboard: false,
      });
    }

    $("button.modal-close").bind('click touchstart', function(e) {
      // Adds date for cookie exp of 1 min.
      var date = new Date();
      var minutes = 1;
      date.setTime(date.getTime() + (minutes * 60 * 1000));
      $.cookie('SESSjazzymodal', 'TRUE', { expires: date, path: '/' });

      // Hides the modal again.
      $('#holidayModal').addClass('hide');
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();

      // Go To Order.
      $('html, body').animate({
        scrollTop: $('#order').offset().top - 75
      }, 0400);
    });

  });
})( jQuery );
