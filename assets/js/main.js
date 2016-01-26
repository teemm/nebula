$('#reg').on('click', function(){
 	$('.mainReg').fadeIn("slow");
});
$('.closse').on('click', function(){
 	$('.mainReg').fadeOut("slow");
});
$('#aut-form, #reg-form').on('click', function(){
	$('.forms').toggleClass('hide');
});
