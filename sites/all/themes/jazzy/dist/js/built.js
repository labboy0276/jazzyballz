/*!
 * enquire.js v2.1.0 - Awesome Media Queries in JavaScript
 * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

!function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

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

  });
})( jQuery );
