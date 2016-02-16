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
// წარმატებული რეგისტრაცია
$('#registration').on('click', function(){
	$('.mainReg').fadeOut("fast");
	$('.MainRegSuc').fadeIn("slow");
});
$('.closse').on('click', function(){
 	$('.MainRegSuc').fadeOut("slow");
});
// წარმატებული რეგისტრაცია
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
// quiz select
$('.QuizTest .QuizAnswers p').on('click', function(){
	$('.QuizTest .QuizAnswers .quizCats').removeClass('selected')
	$('.quizCats',this).addClass('selected');
});
// quiss select
// ტესტების კიკლზე ანიმაცია როდისაც კითხვას ვაჭერთ ადის თავში
  $('.testLeftNav ol li').on('click', function(){
    $('.testLeftNav ol li').removeClass('active');
    $(this).addClass('active');
    $('.fullHeight').animate({scrollTop:this.offsetTop}, 500);
  });
  // ტესტების კიკლზე ანიმაცია როდისაც კითხვას ვაჭერთ ადის თავში
  // ტესტის დროს შემდეგზე დაჭერისას შემდეგი ელემენტი გახდეს აქტივ
  $('#GoNexQuiz').on('click', function(){
    count = $('.testsAswers ol li').length;
    whoActive = $('.testsAswers ol li').find('.active');
    console.log(whoActive);
  });
  // ტესტის დროს შემდეგზე დაჭერისას შემდეგი ელემენტი გახდეს აქტივ
  // rows page click and active function
  $('.examsList').on('click', function(){
  	$('.examsList').removeClass('active');
  	$(this).addClass('active');
  })
  // rows page click and active function
  // statistics panel clic
  $('.statisticsButBar button').on('click', function(){
  	dateid = $(this).data('buttonid');
  	$('.statisticsButBar button , .allHidden').removeClass('active');
  	$(this).addClass('active');
  	$(dateid).addClass('active')
  });
  // statistics panel clic
  // click an animation
  $('.colapsee').on('click', function(){
  	paragHeight = parseFloat(($(this).siblings('.forClickAn').children('p').css('height')));
  	style = $(this).parent('.user-par').attr('style');
  	if(style == undefined){
    $(this).parent('.user-par').css('height', paragHeight +10 + 'px');
  	$(this).siblings('.forClickAn').css('height', paragHeight +10 + 'px');
    $(this).children('.whit-dw').addClass('active');      	
  	}else{
  	$(this).parent('.user-par').removeAttr('style');
    $(this).children('.whit-dw').removeClass('active'); 
    $(this).siblings('.forClickAn').css('height', '28px');
  	}
  })
  // click an animation