$(function() {
	
	var $menu = $('.menu');
	var $button = $('.button');

	$button.on('mouseenter', function() {
		$menu.slideDown(300).delay(500);
	});
	
	$menu.on('mouseleave', function() {
		$menu.delay(500).slideUp(300);
	});
	
});