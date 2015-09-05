head.ready(function() {

	$('.js-menu-mob').click(function() {
		$(this).toggleClass('is-active');
		$('.js-menu-drop').toggleClass('is-active');
		return false;
	});

	$('.js-slider').slick({
		slidesToShow: 4,
	  	slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 620,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        centerMode: true
		      }
		    },
		    {
		      breakpoint: 440,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        centerMode: true
		      }
		    }
		]
	});

	if ($(window).width() <=580) {
		$('.js-class').slick({
				slidesToShow: 1,
			  	slidesToScroll: 1,
				infinite: true,
		        centerMode: true,
		        centerPadding: '40px',
				arrows: true,
				dots: false
			});
	};

	$(window).resize(function() {
		if ($(window).width() <=580) {
			$('.js-class').slick({
				slidesToShow: 1,
			  	slidesToScroll: 1,
				infinite: true,
		        centerMode: true,
		        centerPadding: '40px',
				arrows: true,
				dots: false
			});
		}
		else {
			$('.js-class').slick('unslick');
		}
	});

	(function() {

	    var faq__main = $('.faq__main');

	    if ( faq__main.length ) {

	        var itemSelector    = '.faq__item',
	            btnSelector     = '.faq__title',
	            contentSelector = '.faq__content',
	            activeClass     = 'is-active';

	        faq__main.each(function() {
	            var el       = $(this),
	                btn      = el.find(btnSelector),
	                items    = el.find(itemSelector),
	                contents = el.find(contentSelector);

	            btn.on('click', function(event) {
	                event.preventDefault();

	                var currentBtn = $(this),
	                    item       = currentBtn.parent(itemSelector),
	                    content    = currentBtn.siblings(contentSelector);

	                if ( item.hasClass(activeClass) ) {
	                    item.removeClass(activeClass);
	                    content.slideUp(200);
	                } else {
	                    items.removeClass(activeClass);
	                    contents.slideUp(200);
	                    item.addClass(activeClass);
	                    content.slideDown(200);
	                }
	            });
	        });
	    }

	})();

});