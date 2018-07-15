$(document).ready(function() {
	setTimeout(function () {
	  $('#skills').slick({
		    infinite: true,
		    slidesToShow: 10,
		    slidesToScroll: 1,
		    autoplay: true,
		    autoplaySpeed: 2000,
		    //adaptiveHeight: true,
	        responsive: [
			    {
			      breakpoint: 1150,
			      settings: {
			        slidesToShow: 8,
			        slidesToScroll: 1,
			        dots: false,
			      }
			    },
			    {
			      breakpoint: 900,
			      settings: {
			        slidesToShow: 6,
			        slidesToScroll: 1,
			        dots: false,
			      }
			    },
			    {
			      breakpoint: 750,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        dots: false,
			      }
			    },
			    {
			      breakpoint: 500,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        dots: false,
			      }
			    }
			  ]
		});
	  	$('.skills .slick-slide').hover(
			function(){
				$(this).find('p').show();
				$(this).css('padding-bottom', '0');
			}, 
			function(){
				$(this).find('p').hide();
				$(this).css('padding-bottom', '28px');
			}
		);
	    slickStyles();
	}, 500);


	if ($(window).width() > 768){
		$('.links a').hover(
			function(){
				$(this).find('span').fadeIn(750);
				$(this).find('svg').fadeOut(0);
			}, 
			function(){
				$(this).find('span').fadeOut(0);
				$(this).find('svg').fadeIn(750);
			}
		);
	}	

	$(window).resize(function(){
	    slickStyles();
	    if ($(window).width() > 1050){
	    	$('.projects .slick-list').css('width', '100%');
	    	$('.projects .slick-track').css('width', '100%');
	    	$('.projects .slick-slide').css('width', '33.333333%!important');
	    }
	});

	$('#projects').slick({
	    infinite: false,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    autoplay: false,
	    arrows: false,
	    dots: false,
	    adaptiveHeight: true,
	    responsive: [
		    {
		      breakpoint: 1100,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        arrows: true,
		      }
		    },
		    {
		      breakpoint: 750,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: true,
		      }
		    },
	    ]
	});

    function slickStyles(){
    	$(document).find('.projects .slick-arrow').appendTo('.secondary .shadow');
	    $(document).find('.slick-prev').html('<i class="fas fa-caret-left"></i>');
		$(document).find('.slick-next').html('<i class="fas fa-caret-right"></i>');
	  }
	  slickStyles();
  
});