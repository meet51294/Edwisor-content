
//Jquery For Nav-Bar, Box Model

$( document ).ready(function() {

/*Nav-Bar*/	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}
/*Image Slider*/
function fullSlider(){

	$('#full-slide .prev, #full-slide .next').click(function(){
		
		var $this = $(this),
				current = $('.banner').find('.active'),
				position = $('.banner').children().index(current),
				totalPics = $('.banner').children().length;
				
		if ($this.hasClass('next')){
			
			if (position < totalPics - 1){
				$('.active').removeClass('active').next().addClass('active');
			}
			
			else {	
				$('.banner li').removeClass('active').first().addClass('active');
			}
			
		}
		
		else {
			
			if (position === 0){
				$('.banner li').removeClass('active').last().addClass('active');
			}
			
			else {
				$('.active').removeClass('active').prev().addClass('active');
			}
			
		}
		
	});

}

nav();
fullSlider();
});

/*Model Box*/
$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

	$('a[data-modal-id]').click(function(e) {
		e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
		var modalBox = $(this).attr('data-modal-id');
		$('#'+modalBox).fadeIn($(this).data());
	});  
  
  
$(".js-modal-close, .modal-overlay").click(function() {
    $(".modal-box, .modal-overlay").fadeOut(500, function() {
        $(".modal-overlay").remove();
    });
 
});
 
$(window).resize(function() {
    $(".modal-box").css({
        top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
        left: ($(window).width() - $(".modal-box").outerWidth()) / 2
    });
});
 
$(window).resize();
 
});

/*End Model Box*/

/*Accordian Script*/
$(document).ready(function() {
	function close_accordion_section() {
		$('.accordion .accordion-section-title').removeClass('active');
		$('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	$('.accordion-section-title').click(function(e) {
		
		var currentAttrValue = $(this).attr('href');

		if($(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			$(this).addClass('active');
			// Open up the hidden content panel
			$('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});
/*End Accordian Script*/
