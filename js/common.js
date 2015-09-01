head.ready(function() {

	$('.js-slider').slick({
		slidesToShow: 4,
	  	slidesToScroll: 1,
		arrows: true,
		dots: false
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