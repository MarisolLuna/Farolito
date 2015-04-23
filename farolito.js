
// navegacion dinamica


$(window).scroll(function() {
	var menu = $(this).scrollTop();
	if ( menu > 500) {
		$(".navbar").addClass("scroll")
	} 
	else if (menu < 500) {
		$(".navbar").removeClass("scroll");
	}
});