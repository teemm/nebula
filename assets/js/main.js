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
// rows პანელზე ვიდეოს ნაწილზე კლიკის ბეგრაუნდი
$('#movingSlider li').on('click', function(){
	$('#movingSlider li').removeClass('active');
	$(this).addClass('active');
});
// rows პანელზე ვიდეოს ნაწილზე კლიკის ბეგრაუნდი სლაიდერი
$('.goToNext').on('click', function(){
	animateWidth = '-100%';
	$('#movingSlider li').removeClass('active');
	size = parseFloat($('#movingSlider').css('left'));
	if (size == parseFloat($('#movingSlider').css('width'))/2 * (-1)){
		animateWidth = 0;
	};
	$('#movingSlider').animate({ left: animateWidth });

});
$('.goToPrev').on('click', function(){
	animateWidth = '0%';
	$('#movingSlider li').removeClass('active');
	if (!parseFloat($('#movingSlider').css('left'))){
		animateWidth = '-100%';
	};
	$('#movingSlider').animate({ left: animateWidth });
});


// სლაიდერი