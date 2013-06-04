$(document).ready(function() {
     	$('h1').html('<img src="img/logo.png"/>');
	 
		$('#buttonC').click(function(){
			$('.cooked').fadeIn('slow');
			$('.raw').fadeOut('slow');
		});
		$('#buttonS').click(function(){
			$('.spicy').fadeIn('slow');
			$('.raw').fadeOut('slow');
			$('.unspicy').fadeOut('slow');
		});
		$('#buttonR').click(function(){
			$('.raw').fadeIn('slow');
			$('.cooked').fadeOut('slow');
		});
		$('.buttonA').click(function(){
			$('.raw').fadeIn('slow');
			$('.cooked').fadeIn('slow');
		});
		
		$('.caption').popover({
			trigger: 'hover',
			animation: 'true',
			placement: 'bottom'
		});
	
});	
