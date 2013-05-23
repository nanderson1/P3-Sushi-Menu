$(document).ready(function() {
     	$('h1').html('<img src="img/logo.png"/>');
	 
		$('#buttonC').click(function(){
			$('.cooked').show('fast');
			$('.raw').hide('fast');
		});
		$('#buttonS').click(function(){
			$('.spicy').show('fast');
			$('.raw').hide('fast');
			$('.unspicy').hide('fast');
		});
		$('#buttonR').click(function(){
			$('.raw').show('fast');
			$('.cooked').hide('fast');
		});
		$('.buttonA').click(function(){
			$('.raw').show('fast');
			$('.cooked').show('fast');
		});
		
		$('.caption').popover({
			trigger: 'hover',
			animation: 'true',
			placement: 'bottom'
		});
	
});	
