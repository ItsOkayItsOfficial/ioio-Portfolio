/*
* Author: ItsOkayItsOfficial
* URL: www.itsokayitsofficial.io
*
* Project Name: ItsOkayItsOfficial Page
* Version: 1.0
* Date: 04-15-2015
* URL: www.itsokayitsofficial.io
*/

/*=============================================
Elements
=============================================*/

var $page = $('.page');

$('.menu_toggle').on('click', function(){
	$page.toggleClass('shazam');
});
$('.content').on('click', function(){
	$page.removeClass('shazam');
});


/*=============================================
Nav Animation
=============================================*/

$(window).scroll(function() {

	if ($(window).scrollTop() > 200 ){

		$('.site-nav').addClass('show');
		$('.logo').addClass('nav-logo');

	} else {

		$('.site-nav').removeClass('show');
		$('.logo').removeClass('nav-logo');

	};    
});

$('.scroll').on('click', function(e){   
	e.preventDefault()

	$('html, body').animate({
		scrollTop : $(this.hash).offset().top
	}, 1500);
});