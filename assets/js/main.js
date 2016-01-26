$('#reg').on('click', function(){
 	$('.mainReg').fadeIn("slow");
 	$('body').css('overflow','hidden');
});
$('.closse').on('click', function(){
 	$('.mainReg').fadeOut("slow");
 	$('body').css('overflow','scroll');
});
$('#aut-form, #reg-form').on('click', function(){
	$('.forms').toggleClass('hide');
});
