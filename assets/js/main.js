// პოპაპის გახსნა რეგისტაციაზე კლიკის დროს
$('#reg').on('click', function(){
 	$('.mainReg').fadeIn("slow");
 	$('body').css('overflow','hidden');
});
// პოპაპის გახსნა რეგისტაციაზე კლიკის დროს
// პოპაპის დახურვა
$('.closse, .rel').on('click', function(){
 	$('.mainReg').fadeOut("slow");
 	$('body').css('overflow','scroll');
});
// პოპაპის დახურვა
// რეგისტრაციდან ავტორიზაციაზე გადასვლა და პირიქით
// $('#aut-form, #reg-form').on('click', function(){
// 	$('.forms').toggleClass('hide');
// });
// რეგისტრაციდან ავტორიზაციაზე გადასვლა და პირიქით
// წარმატებული რეგისტრაცია
$('#registration').on('click', function(){
	$('.mainReg').fadeOut("fast");
	$('.MainRegSuc').fadeIn("slow");
});
$('.closse, .rel').on('click', function(){
 	$('.MainRegSuc, .mainReg').fadeOut("slow");
});
// წარმატებული რეგისტრაცია
// ვიდეოს დროს კითხვა
$('#quizz, .limitButt').on('click', function(){
  $('.videoQuiz').fadeIn("slow");
  $('body').css('overflow','hidden');
});
$('#GoNexQuiz').on('click', function(){
  $('.videoQuiz').fadeOut("slow");
  $('body').css('overflow','scroll');
});
// ვიდეოს დროს კთხვა
// rows პანელზე ვიდეოს ნაწილზე კლიკის ბეგრაუნდი
$('#movingSlider li').on('click', function(){
	$('#movingSlider li').removeClass('active');
	$(this).addClass('active');
});
// rows პანელზე ვიდეოს ნაწილზე კლიკის ბეგრაუნდი სლაიდერი
// slide animation
// slider width

var lastElementcount =5;
function slideWidh(){
  sliderWidns = $('.slideMove').width();
  slideCount = $('.sliderbar .sliderBarArea .slideMove li').length;
  OneSlideWidth = sliderWidns / 6;
  $('.sliderbar .sliderBarArea .slideMove ul').css('width', slideCount * OneSlideWidth + 'px');
  $('.sliderbar .sliderBarArea .slideMove li').css('width',OneSlideWidth + 'px')
  if (slideCount > 5) {
     $('.slideMove').attr('data-countimage',lastElementcount);
  }
}

slideWidh();

$(window).resize(function(){
    slideWidh();
});
// slider width
$('.goToNext').on('click', function(){
  slideCount = $('.sliderbar .sliderBarArea .slideMove li').length;
  imgWidth = parseFloat($("#movingSlider li").attr("style").split(" ")[1]);
  datacount=Number($('.slideMove').attr('data-countimage'));
  if($('.sliderbar .sliderBarArea .slideMove li').length<6)return false;
  if ((lastElementcount+5)<slideCount) {
    lastElementcount = datacount+5;
    animateWidth =(imgWidth*(lastElementcount-5));   
  }
  else{
    sliceLast=slideCount-datacount-1;
    lastElementcount = Number(datacount)+sliceLast;
    animateWidth =(imgWidth*(lastElementcount-5)); 
  }
  $('.slideMove').attr('data-countimage',lastElementcount);
  $('#movingSlider').animate({ left: -animateWidth +"px"}); 
});

$('.goToPrev').on('click', function(){
  slideCount = $('.sliderbar .sliderBarArea .slideMove li').length; //17
  imgWidth = parseFloat($("#movingSlider li").attr("style").split(" ")[1]);//87.33
  datacount=Number($('.slideMove').attr('data-countimage'));//10
    if(datacount%5!=0 &&datacount<10)minus=datacount%5;
    else minus=5
    if(lastElementcount==5||(datacount-5)<0)return false;
    lastElementcount = datacount-5;//2

    
    animateWidth =(imgWidth*(lastElementcount-minus));   //0 
  $('.slideMove').attr('data-countimage',lastElementcount);
  $('#movingSlider').animate({ left: -animateWidth +"px"}); 
});
// slide animation
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
    var parHeight = $(this).siblings('.forClickAn').children('p').height();
   if (parHeight > 28) {
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
    }
  });
  // click an animation 
  // navbar dropdown
    $('#settingsDropdown').on('click', function(){
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
// coments colse
$('.comentarsSec .profileComent .header .colsse').on('click', function(){
  $(this).parent('.header').parent('.profileComent').fadeOut('slow');
});
// coments close
// formuls
$('#formuls').on('click', function(){
  $('.pdfPopup').fadeIn();
  $('body').css('overflow','hidden')
});
$('.closePdf, .rel').on('click', function(){
  $('.pdfPopup').fadeOut();
  $('body').css('overflow','scroll')
});
// formuls
// fill viev popup
$('.fullVersione').on('click', function(){
  $('.full-vers').fadeIn('slow');
  $('body').css('overflow','hidden');
});
$('.fullcls, .rel').on('click', function(){
  $('.full-vers').fadeOut('slow');
  $('body').css('overflow-y','scroll');
});
// play buttons percentage
setTimeout(function(){
 alllisets = $('.leftOlPanel ul li').length;
  for (var i = 0; i < alllisets; i++) {
     backgrou = ($('.leftOlPanel ul li').eq(i).find('.background-by-progress').css('background-color'));
     $('.leftOlPanel ul li').eq(i).find('.percentageVideo svg path').eq(1).css('stroke',backgrou);
     $('.leftOlPanel ul li').eq(i).find('.percentageVideo svg path').eq(0).css({'stroke':backgrou , 'opacity':'0.3'});
  }
}, 2);
// play buttons percentage  
// pdf
$('#pop').on('click', function(){
  $('.pdf_vers').fadeIn('slow');
  $('body').css('overflow','hidden');
});
$('.pdfcls, .rel').on('click', function(){
  $('.pdf_vers').fadeOut('slow');
  $('body').css('overflow-y','scroll');
});
// pdf 
// teach aut&reg
$('#teachAut').on('click', function(){
  $('#teachReg').removeClass('active');
  $(this).addClass('active');
  $('.regFade').fadeOut('fast');
  $('.autFade').fadeIn('slow');
 
});
$('#teachReg').on('click', function(){
  $('#teachAut').removeClass('active');
  $(this).addClass('active');
  $('.autFade').fadeOut('fast');
  $('.regFade').fadeIn('slow');
});
// teach aut&reg




