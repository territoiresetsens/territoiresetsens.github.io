(function ($) {
	'use strict';

	/*--------------------------------
			Start About Me
	----------------------------------*/
	// Initializing Skillbar Animation
	$('.skill h3').waypoint({
		handler: function (direction) {
			if (direction == "up") {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').css("width", "0");
				});
			} else if (direction == "down") {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').animate({
						width: jQuery(this).attr('data-percent')
					}, 2000);
				});
			}
		},
		offset: 'bottom-in-view'
	});
	/*--------------------------------
			End About Me
	----------------------------------*/

	/*--------------------------------
			 Start Portfolio
	----------------------------------*/
	// Initialize filterizr Plugin
	var filterizd = $('.filtr-container').filterizr();

	// Styling of Filter Controls
	$(".portfolio-navigation li").on("click", function () {
		$(".portfolio-navigation li").removeClass("active");
		$(this).addClass("active");
	});

	// Initialize MagnificPopup Plugin
	$('.filtr-container').magnificPopup({
		type: 'image',
		delegate: 'a',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out'
		}
	});

	// Galley Shuffle When Scrolled Down
	$('.services').waypoint({
		handler: function (direction) {
			if (direction == "down") {
				filterizd.filterizr('shuffle');
			}
		},
		offset: "bottom-in-view"
	});

	// load more button

	/*--------------------------------
			 End Portfolio
	----------------------------------*/

	/*--------------------------------
			 Start Testimonials
	----------------------------------*/
	// Configure and Initialize Owl Carousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000
	});
	/*--------------------------------
			End Testimonials
	----------------------------------*/

	/*--------------------------------
			Start Code for Mobile Devices
	----------------------------------*/
	// Code for Opera Mini
	var vh = $(window).height();
	if (navigator.userAgent.indexOf('Opera Mini') != -1) {
		// Setting Fun Facts Value Immediately 
		work.start();
		happyClient.start();
		projects.start();
		coffee.start();
		// Setting Skillbar Value Immediately
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 0);
		});
		// Removing Bootstrap Class and Re-Style Input
		$("input").removeClass("form-control");
		$("input").css({
			"width": "100%",
			"height": "50px",
			"background": "#fff"
		});
		// Removing Full-Screen Nav
		$(".navigation-icon").css("display", "none");
	}

	// Code For UC Browser
	if (navigator.userAgent.indexOf('UCBrowser') != -1) {
		// Removing Full-Screen Nav
		$(".navigation-icon").css("display", "none");
		$(".fun-facts").css({
			"display": "table",
			"margin": "auto"
		});
		// Setting Fun Facts Value Immediately 
		work.start();
		happyClient.start();
		projects.start();
		coffee.start();
		// Setting Skillbar Value Immediately
		$('.skillbar').each(function () {
			$(this).find('.skillbar-bar').animate({
				width: jQuery(this).attr('data-percent')
			}, 0);
		});
	}
	/*--------------------------------
			End Code for Mobile Devices
	----------------------------------*/

	/*--------------------------------
			Others
	----------------------------------*/
	// Code for Internet Explorer
	if (navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)) {
		$(".header, .fullscreen-nav-container, .like-me, .contact").css("background-attachment", "scroll");
		$(".fullscreen-nav-holder").css("width", "100vw");
	}

	// Wow Plugin Initialization
	var wow = new WOW({
		animateClass: 'animated',
		offset: 70,
		mobile: false
	});
	wow.init();

	// Toggling Visibility of Scroll Up Button
	$(".about-me-images").waypoint({
		handler: function (direction) {
			$(".scroll-up").toggleClass("scroll-up-show");
		},
		offset: "bottom-in-view"
	});
	$(".sub-button").waypoint({
		handler: function (direction) {
			$(".scroll-up").toggleClass("scroll-up-show");
		},
		offset: "bottom-in-view"
	});
	/*--------------------------------
			Others
	----------------------------------*/
}(jQuery));