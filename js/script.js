$(document).ready(function(){
	$('.lastest-work__nav-link').click(function(){
		// reset active class
		$('.lastest-work__nav-link').removeClass("active");
		// add active class to selected
		$(this).addClass("active");
		// return needed to make function work
		return false;
	});
	
	
	$(function() {
    // create an empty variable
    var selectedClass = "";
    // call function when item is clicked
    $(".lastest-work__nav-link").click(function(){
      // assigns class to selected item
      selectedClass = $(this).attr("data-rel");
      // hide all portfolio items
      $(".demonstration-lastest-work .demonstration-lastest-work__inner").fadeOut(300);
      // show selected category
      if(selectedClass==='all'){
        $(".demonstration-lastest-work__inner").delay(300).fadeIn(300);
      } else {
        $("." + selectedClass).delay(300).fadeIn(300);
      }
    });
  });
  
}); // document ready


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
