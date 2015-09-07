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
		        slidesToScroll: 1
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

	$('.js-class').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		responsive: [
		    {
		      breakpoint: 1210,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 850,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 580,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		        centerMode: true
		      }
		    }
		]
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

	$(".js-video").click(function() {
	    $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'title'         : this.title,
            'width'     	: 800,
            'height'        : 600,
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
                'wmode'        		: 'transparent',
                'allowfullscreen'   : 'true'
            }
        });

	    return false;
	});

});