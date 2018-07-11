$(document).ready(function() {
	setTimeout(function () {
	  $('#skills').slick({
		    infinite: true,
		    slidesToShow: 10,
		    slidesToScroll: 1,
		    autoplay: true,
		    autoplaySpeed: 2000,
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
	    slickStyles();
	}, 500);

	$('.slick-slide').hover(
		function(){
			$(this).find('p').show();
			$(this).css('padding-bottom', '0');
		}, 
		function(){
			$(this).find('p').hide();
			$(this).css('padding-bottom', '28px');
		}
	);

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

	$(window).resize(function(){
	    slickStyles();
	    if ($(window).width() > 1050){
	    	$('.slick-list').css('width', '100%');
	    	$('.slick-track').css('width', '100%');
	    	$('.slick-slide').css('width', '33.333333%!important');
	    }
	});

	$('#projects').slick({
	    infinite: false,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    autoplay: false,
	    arrows: false,
	    dots: false,
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
	    $(document).find('.slick-prev').html('<i class="fas fa-caret-left"></i>');
		$(document).find('.slick-next').html('<i class="fas fa-caret-right"></i>');
	  }
  slickStyles();
  
});