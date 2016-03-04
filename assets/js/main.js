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
// ვიდეოს დროს კითხვა
$('#quizz ,.limitButt').on('click', function(){
  $('.videoQuiz').fadeIn("slow");
  $('body').css('overflow','hidden');
});
$('#GoNexQuiz').on('click', function(){
  $('.videoQuiz').fadeOut("slow");
  $('body').css('overflow','scroll');
});
// ვიდეოს დროს კთხვა
// ტემპის შეცვლის პოპაპი
$('.limitButt').on('click', function(){
  $('.TempPop').fadeIn("slow");
  $('body').css('overflow','hidden');
});
$('.closseTempBut').on('click', function(){
  $('.TempPop').fadeOut("slow");
  $('body').css('overflow','scroll');
});
// ტემპის შეცვლის პოპაპი
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
    var allAnswersArr = $('.testsAswers ol li'),
        indexOfActive = 0;
    for(var i = 0, length = allAnswersArr.length;i<length;i++){
        if($(allAnswersArr[i]).hasClass('active')){
            indexOfActive = i;
            break;
        }
    }
    if(allAnswersArr[indexOfActive + 1]){
        $('.testLeftNav ol li.active').removeClass('active');        
        $(allAnswersArr[indexOfActive + 1]).addClass('active');
        $('.fullHeight').animate({scrollTop:allAnswersArr[indexOfActive + 1].offsetTop}, 500);
    }
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
  // ტემპის შეცვლის პოპაპი
    $('.TempPop .tempp .tempArea .buTtonsBar button').on('click', function(){
    tempId = $(this).attr('data-tempId');
    $('.TempPop .tempp .tempArea .buTtonsBar button, .allHidden').removeClass('active');
    $(this).addClass('active');
    $(tempId).addClass('active')
  });
  // ტემპის შეცვლის პოპაპი
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
  // navbar dropdown
  $('.navbarDropDown').on('click', function(){
    $('.FrodDropAllBlock').fadeIn('slow');
    if($('#prodIcon').hasClass('active')){
      $('#prodIcon').removeClass('active');
      $('.FrodDropAllBlock').fadeIn('slow');
    } else if (!$('#prodIcon').hasClass('active')){
      $('#prodIcon').addClass('active');
    }
  });
  $('.FrodDropAllBlock').on('click', function(){
    $('.FrodDropAllBlock').fadeOut('fast');
     $('#prodIcon').removeClass('active');
  });
  // navbar dropdown
  $(".meter > span").each(function() {
        $(this)
          .data("origHeight", $(this).height())
          .height(0)
          .animate({
            height: $(this).data("origHeight")
          }, 1200);
      });
  // vidoe bar click adn active
  $('.leftOlPanel ul li').on('click', function(){
  $('.leftOlPanel ul li').removeClass('active');
  $(this).addClass('active');
  });
  // videobar  click and active
  // bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip(); 
   $("a").tooltip();  
  //  bootstrap tooltips
  // full screeb animate
  // $(window).scroll(function(){
  //   if ($('body').scrollTop() > 0) {
  //     $('.prgoressJumbotron').slideUp();
  //   }else if ($('body').scrollTop() == 0) {
  //     // alert(1);
  //     $('.prgoressJumbotron').slideDown();
  //   }
  // });
  // full screeb animate
  $('.answ-pnl td').on('click', function(){
    $(this).parent('tr').children('td').removeClass('active');
    $(this).addClass('active');
  });
