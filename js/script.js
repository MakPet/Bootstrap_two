$(document).ready(function(){
  	$('.about-us__slider').slick({
  		infinite: false,
  		slidesToShow: 4,
  		slidesToScroll: 1,
  		prevArrow:"<div class='about-us__slider__arrow about-us__slider__arrow_prev text-center icon-angle-left'></div>",
		nextArrow:"<div class='about-us__slider__arrow about-us__slider__arrow_next text-center icon-angle-right'></div>",
		autoplay: false,
		speed: 1500,

		responsive: [
	    	{
	    		breakpoint: 1200,
	    		settings: {
	    			slidesToShow: 3
	    		}
	    	},
	    	{
	    		breakpoint: 992,
	    		settings: {
	    			slidesToShow: 2
	    		}
	    	},
	    	{
	    		breakpoint: 768,
	    		settings: {
	    			slidesToShow: 1,
	    			arrows: false,
	    			infinite: true,
	    			autoplay: true,
	    			autoplaySpeed: 2000
	    		}
	    	}
	    ]
	});
});