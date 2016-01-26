// პოპაპის გახსნა რეგისტაციაზე კლიკის დროს
$('#reg').on('click', function(){
 	$('.mainReg').fadeIn("slow");
 	$('body').css('overflow','hidden');
});
// პოპაპის გახსნა რეგისტაციაზე კლიკის დროს
// პოპაპის დახურვა
$('.closse').on('click', function(){
 	$('.mainReg').fadeOut("slow");
 	$('body').css('overflow','scroll');
});
// პოპაპის დახურვა
// რეგისტრაციდან ავტორიზაციაზე გადასვლა და პირიქით
$('#aut-form, #reg-form').on('click', function(){
	$('.forms').toggleClass('hide');
});
// რეგისტრაციდან ავტორიზაციაზე გადასვლა და პირიქით
