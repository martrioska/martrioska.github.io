+// ----------- PAGE TRANSISITION -------------

window.scroll(0, 0)

setTimeout(function(){ 
document.querySelector('body').style.opacity = 1
}, 200);

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 400)
}


// ----------- BLOCK OVERFLOW -------------

// $(document).ready(function () {
// 	$("body").css({"overflow-y":"visible"});
//    $('html,body').animate({
//         scrollTop: $(".mtrk-header").offset().top},
//         'slow');
//     setTimeout(function(){
//         $("body").css({"overflow-y":"hidden"});  
//    }, 500); 
//         
//     });
        

    
// ----------- CASCADING APPEARING PARAGRAPH -------------

$(document).ready(function() { 
   $('#word1, #word2, #word3, #word4').each(function(fadeInDiv) {
     $(this).delay(fadeInDiv * 2000).fadeIn(2200);
   });
});


// ----------- VISIBILITY CHECKER-------------

function checkVisible( elm, eval ) {
    eval = eval || "object visible";
    var viewportHeight = $(window).height(), // Viewport Height
        scrolltop = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();   
    
    if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}

// -----------MATRIOSKA PICTOGRAMS-------------



$(window).on('scroll.scroll1',function() {
    if (checkVisible($('.line3'))) { 
    $(".line3 img").each(function(i) {
  		$(this).delay(i*50).fadeTo(200,1);
		});
        $(window).off('scroll.scroll1');
    } else {
         // do nothing
    }
});



// ----------- COUNTER -----------------

$(window).on('scroll.scroll2',function() {
    if (checkVisible($('.count-section1'))) { 
	$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 1600,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});
        $(window).off('scroll.scroll2');
    } else {
         // do nothing
    }
});




$(window).on('scroll.scroll7',function() {
    if (checkVisible($('.count-section2'))) { 
		$('.count-section-text').delay(1000).fadeIn(2000);
		$(".count2").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 3000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});
        $(window).off('scroll.scroll7');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll39',function() {
    if (checkVisible($('.count-section3'))) { 
		$('.count-section-text3').delay(1000).fadeTo(2000,1);
		$('.statement-bold').delay(2500).fadeTo(2000,1);
		$(".count3").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 3000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});
        $(window).off('scroll.scroll39');
    } else {
         // do nothing
    }
});

// ----------- FADE IN MATRIOSKA -------------

$(window).on('scroll.scroll4',function() {
    if (checkVisible($('.after-arrow-p'))) { 
		$('.text-section-pic').fadeTo(2000, 1);
		$('.text-section-pic').addClass( "move-down" ); 
		$('.small-arrow1').delay(4000).fadeTo(2000,1);
        $(window).off('scroll.scroll4');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll5',function() {
    if (checkVisible($('.after-arrow-p2'))) { 
   		$('.smallarrow').hide()
		$('.text-section-pic2').fadeTo(2000, 1);
		$('.text-section-pic2').addClass( "move-down" ); 
		$('.text-section-pic3').delay(3000).fadeTo(2000, 0.8);
		$('.small-arrow2').delay(3000).fadeTo(2000,1);
        $(window).off('scroll.scroll5');
    } else {
         // do nothing
    }
});

// ----------- FADE IN TEXT SECTION -------------

$(window).on('scroll.scroll6',function() {
    if (checkVisible($('.double-text-section1'))) { 
		$('.text-section-below').delay(1000).fadeIn(2000);
		$('.text-section-below').addClass( "entrance-down" );
        $(window).off('scroll.scroll6');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll8',function() {
    if (checkVisible($('.text-section-start'))) { 
		$('.bottom-paragraph').delay(2000).fadeIn(2000);
		$('.small-arrow3').delay(4000).fadeTo(2000,1);
        $(window).off('scroll.scroll8');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll18',function() {
    if (checkVisible($('.text-section-initial'))) { 
		$('.bottom-paragraph2').delay(1500).fadeIn(2000);
		$('.bottom-paragraph2').addClass( "entrance-down" );
		$('.second-arrow2').delay(3000).fadeTo(2000,1);
        $(window).off('scroll.scroll18');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll23',function() {
    if (checkVisible($('.text-section-final-two'))) { 
		$('.bottom-paragraph3').delay(1500).fadeIn(2000);
		$('.bottom-paragraph3').addClass( "entrance-down" );
		$('.second-arrow').delay(4000).fadeTo(2000,1);
        $(window).off('scroll.scroll23');
    } else {
         // do nothing
    }
});

// ----------- OPENING MATRIOSKA -------------

$(window).on('scroll.scroll9',function() {
    if (checkVisible($('.after-image-flag'))) { 
		$('.text-section-pic5').delay(2000).last().addClass( "float" );
        $(window).off('scroll.scroll9');
    } else {
         // do nothing
    }
});



// ----------- CASCADING APPEARING COUNTRIES -------------

$(window).on('scroll.scroll22',function() {
    if (checkVisible($('.late-text-section'))) { 
		$('.estonia-text, .slovenia-text').each(function(fadeInDiv) {
     $(this).delay(fadeInDiv * 1000).fadeTo(3000, 1);
   });
        $(window).off('scroll.scroll22');
    } else {
         // do nothing
    }
});



// ----------- REANIMATING THE CHARTS -------------

$(window).on('scroll.scroll11',function() {
    if (checkVisible($('#map-dist'))) { 
        if ('flag' in geo_dist && !geo_dist['flag']) {
            geo_dist.appear();
            geo_dist.series.each(function(series) {
                series.appear();
            });
            geo_dist['flag'] = true;
        }
    } else {
         geo_dist['flag'] = false;
    }
});


$(window).on('scroll.scroll12',function() {
    if (checkVisible($('#sw-col1'))) { 
        if ('view_flag' in sw_col1 && !sw_col1['view_flag']) {
            sw_col1.appear();
            sw_col1.series.each(function(series) {
                series.appear();
            });
            sw_col1['view_flag'] = true;
        }
    } else {
         sw_col1['view_flag'] = false;
    }
});

$(window).on('scroll.scroll13',function() {
    if (checkVisible($('#sw-col2'))) { 
        if ('view_flag' in sw_col2 && !sw_col2['view_flag']) {
            sw_col2.appear();
            sw_col2.series.each(function(series) {
                series.appear();
            });
            sw_col2['view_flag'] = true;
        }
    } else {
         sw_col2['view_flag'] = false;
    }
});

$(window).on('scroll.scroll14',function() {
    if (checkVisible($('#nested-pie'))) { 
        if ('flag' in nested_pie && !nested_pie['flag']) {
            nested_pie.appear();
            nested_pie.series.each(function(series) {
                series.appear();
            });
            nested_pie['flag'] = true;
        }
    } else {
         nested_pie['flag'] = false;
    }
});

$(window).on('scroll.scroll15',function() {
    if (checkVisible($('#alt-occ-female'))) { 
        if ('flag' in female_occ_chart && !female_occ_chart['flag']) {
            female_occ_chart.appear();
            female_occ_chart.series.each(function(series) {
                series.appear();
            });
            female_occ_chart['flag'] = true;
            male_occ_chart.appear();
            male_occ_chart.series.each(function(series) {
                series.appear();
            });
        }
    } else {
         female_occ_chart['flag'] = false;
    }
});


// ----------- CASCADING APPEARING FLAGS -------------

$(window).on('scroll.scroll10',function() {
    if (checkVisible($('.after-image-flag2'))) { 
		$('.flag-image1, .flag-image2, .flag-image3').each(function(fadeInDiv) {
     $(this).delay(fadeInDiv * 1000).fadeTo(4000, 1);
     $(this).delay(fadeInDiv * 1000).addClass( "entrance-down" );
     
   });
        $(window).off('scroll.scroll10');
    } else {
         // do nothing
    }
});

// ----------- OPENING MATRIOSKA 2 -------------

$(window).on('scroll.scroll17',function() {
    if (checkVisible($('.after-image-flag-new'))) { 
		$('.text-section-pic6').delay(2000).last().addClass( "float" );
        $(window).off('scroll.scroll17');
    } else {
         // do nothing
    }
});

// ----------- OPENING MATRIOSKA 3 -------------

$(window).on('scroll.scroll21',function() {
    if (checkVisible($('.after-image-flag-smaller'))) { 
		$('.text-section-pic9').delay(2000).last().addClass( "float" );
        $(window).off('scroll.scroll21');
    } else {
         // do nothing
    }
});

// ----------- CASCADING PARAGRAPHS + CIRCLES -------------

$(window).on('scroll.scroll19',function() {
    if (checkVisible($('.circles-text-section'))) { 
		$('.circles-text-second-p').delay(1000).fadeTo(3000,1);
		$('.circles-container').delay(2000).fadeTo(3000,1);
		$('.after-circles-flag').delay(2000).fadeTo(3000,1);
        $(window).off('scroll.scroll19');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll26',function() {
    if (checkVisible($('.before-mix-section'))) { 
		$('.before-mix-paragraph').delay(1000).fadeTo(3000,1);
		$('.circles-container2').delay(2000).fadeTo(3000,1);
		$('.after-circles-flag2').delay(2000).fadeTo(3000,1);
        $(window).off('scroll.scroll26');
    } else {
         // do nothing
    }
});

// ----------- MOVING CIRCLES -------------

$(window).on('scroll.scroll20',function() {
    if (checkVisible($('.after-circles-flag'))) { 
		$('.circle-full-image').delay(6000).fadeOut(3000);
		$('.circle-full-plus').delay(7000).fadeOut(3000);
		setTimeout(function(){
		$('.empty-circle-one').addClass( "move-to-right" );
		$('.empty-circle-two').addClass( "move-to-left" );      
   }, 9000);
		
        $(window).off('scroll.scroll20');
    } else {
         // do nothing
    }
});



$(window).on('scroll.scroll25',function() {
    if (checkVisible($('.after-circles-flag2'))) { 
		$('.circle-full-image2').delay(6000).fadeOut(3000);		
		setTimeout(function(){
     	$('.circle-full-image2').addClass( "move-up" ); 
   }, 6000);
		setTimeout(function(){
		$('.empty-circle-one2').fadeIn(3000);
		$('.empty-circle-two2').fadeIn(3000);
		$('.empty-circle-one2').addClass( "move-up2" );
		$('.empty-circle-two2').addClass( "move-up2" );      
   }, 9000);
		
        $(window).off('scroll.scroll25');
    } else {
         // do nothing
    }
});


// ----------------- MAP GRADIENT BAR -------------

$(window).on('scroll.scroll27',function() {
    if (checkVisible($('.map-section'))) { 
    	$('.map-legend-bar').addClass( "map-legend-bar-fullwidth" ); 		
	setTimeout(function(){
     	$('.map-legend-Title').fadeTo(3000,1);
     	$('.map-legend-NumInitial').fadeTo(3000,1);
     	$('.map-legend-NumFinal').fadeTo(3000,1);
     	$('#map-dist').fadeTo(3000,1);
   }, 3000);
		
        $(window).off('scroll.scroll27');
    } else {
         // do nothing
    }
});

// ----------------- FINAL PARAGRAPHS CONTENT 4 -------------

$(window).on('scroll.scroll28',function() {
    if (checkVisible($('.final-text-section2'))) { 
    	$('.final-text-section2 p').fadeTo(3000,1);
    
    	setTimeout(function(){
     	$('.myunderlined1').addClass( "test4" );
   }, 3000);
    	
        $(window).off('scroll.scroll28');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll29',function() {
    if (checkVisible($('.final-text-section3'))) { 
    	$('.final-text-section3-p').fadeTo(3000,1);
    	
    	setTimeout(function(){
     	$('.myunderlined2').addClass( "test4" );
   }, 3000);
        $(window).off('scroll.scroll29');
    } else {
         // do nothing
    }
});

// ----------------- MAP INTRO AND OUTRO -------------

$(window).on('scroll.scroll33',function() {
    if (checkVisible($('.before-map-text-section'))) { 
    	$('.before-map-text-intro').fadeTo(3000,1);
        $(window).off('scroll.scroll33');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll30',function() {
    if (checkVisible($('.after-map-text-section'))) { 
    	$('.after-map-text-intro').fadeTo(3000,1);
    	
        $(window).off('scroll.scroll30');
    } else {
         // do nothing
    }
});

// ----------------- OCCUPATION INTRO AND OUTRO -------------

$(window).on('scroll.scroll32',function() {
    if (checkVisible($('.before-occupation-text-section'))) { 
    	$('.before-occupation-text-intro').fadeTo(3000,1);
    	
        $(window).off('scroll.scroll32');
    } else {
         // do nothing
    }
});


$(window).on('scroll.scroll31',function() {
    if (checkVisible($('.before-occupation-circle'))) { 
    	$('.myselectcountry').addClass( "test4" );
        $(window).off('scroll.scroll31');
    } else {
         // do nothing
    }
});

// ----------------- ARTCHIVES ANIMATIONS -------------

$(window).on('scroll.scroll40',function() {
    if (checkVisible($('.artchives-paragraph1'))) { 
    	$('.artchives-paragraph2').delay(1000).fadeTo(3000,1);
    	$('.artchives-paragraph3').delay(2000).fadeTo(3000,1);
      	setTimeout(function(){
      	$('.zeri-image1').fadeTo(3000,1);
      	$('.zeri-image1').addClass( "entrance-down" );
    	$('.zeri-image3').delay(1000).fadeTo(3000,1);
    	$('.zeri-image5').delay(2000).fadeTo(3000,1);
   },3000);
        setTimeout(function(){
      	$('.zeri-image3').addClass( "entrance-down" );
   },4000);
           setTimeout(function(){
      	$('.zeri-image5').addClass( "entrance-down" );
   },5000);
              setTimeout(function(){
      	$('.zeri-image2').fadeTo(3000,1);
      	$('.zeri-image4').fadeTo(3000,1);
   },6000);
        $(window).off('scroll.scroll40');
    } else {
         // do nothing
    }
});

// ----------------- SECOND PICTOGRAMS CHART-------------

$(window).on('scroll.scroll41',function() {
    if (checkVisible($('.before-second-pictchart'))) { 
    setTimeout(function(){
      	$(".line4 img").each(function(i) {
  		$(this).delay(i*70).fadeTo(300,1);
		});
   },1000);
   	$('.after-second-pictchart').delay(2000).fadeTo(3000,1);
   	$('.after-second-pictchart').addClass( "entrance-down" );	
        $(window).off('scroll.scroll41');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll42',function() {
    if (checkVisible($('.question1'))) { 
   	$('.question2').delay(2000).fadeTo(3000,1);
   	$('.question2').addClass( "entrance-down" );	
        $(window).off('scroll.scroll42');
    } else {
         // do nothing
    }
});

// ----------------- PORTRAIT GALLERY -------------

$(window).on('scroll.scroll43',function() {
    if (checkVisible($('.portrait-card-3'))) { 
    $('.portrait-card-3').delay(700).fadeTo(3000,1);
    $('.portrait-card-4').delay(700).fadeTo(3000,1);
        $(window).off('scroll.scroll43');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll44',function() {
    if (checkVisible($('.portrait-card-5'))) { 
    $('.portrait-card-5').delay(700).fadeTo(3000,1);
    $('.portrait-card-6').delay(700).fadeTo(3000,1);
        $(window).off('scroll.scroll44');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll45',function() {
    if (checkVisible($('.portrait-card-7'))) { 
    $('.portrait-card-7').delay(700).fadeTo(3000,1);
    $('.portrait-card-8').delay(700).fadeTo(3000,1);
        $(window).off('scroll.scroll45');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll46',function() {
    if (checkVisible($('.portrait-card-9'))) { 
    $('.portrait-card-9').delay(700).fadeTo(3000,1);
    $('.portrait-card-10').delay(700).fadeTo(3000,1);
        $(window).off('scroll.scroll46');
    } else {
         // do nothing
    }
});

// ----------------- DOWNLOAD IMAGES -------------

$(window).on('scroll.scroll47',function() {
    if (checkVisible($('.download-section'))) { 
    $('.download-1').delay(1000).fadeTo(3000,1);
    $('.download-2').delay(1000).fadeTo(3000,1);
        $(window).off('scroll.scroll47');
    } else {
         // do nothing
    }
});


// ----------- SCROLL MAIN BAR FUNCTIONS -------------

$(window).scroll(function() {
    if ($(window).scrollTop() < 700) {
        document.getElementById('mtrk-sidebar').style.display = 'none';
        $('#sectionNumber .txt').text("00");
        $('#sectionName .txt').text("Introduction");
    }
});

$(window).scroll(function() {
	var d = document.getElementById("intro");
	var myposition = d.offsetTop + d.offsetHeight - $('#mtrk-header').outerHeight()
    if ($(window).scrollTop() > myposition) {
    document.getElementById('mtrk-sidebar').style.display = 'block';
        $('#sectionNumber .txt').text("01");
        $('#sectionName .txt').text("General overview"); 
        var image = document.getElementById('mtrsk1');
    var img2 = document.getElementById('mtrsk2');
    var img3 = document.getElementById('mtrsk3');
    var img4 = document.getElementById('mtrsk4');
    var img5 = document.getElementById('mtrsk5');
    if (image.src.match("svg/closedmtr.svg")) {
    	image.src = "svg/openmtr.svg";
        img2.src = "svg/closedmtr.svg";
        img3.src = "svg/closedmtr.svg";
        img4.src = "svg/closedmtr.svg";
        img5.src = "svg/closedmtr.svg";}
    }
    
});



$(window).scroll(function() {
	var d = document.getElementById("content01");
	var myposition = d.offsetTop + d.offsetHeight - $('#mtrk-header').outerHeight()
    if ($(window).scrollTop() > myposition) {
        $('#sectionNumber .txt').text("02");
        $('#sectionName .txt').text("Geographical distribution");
    var image = document.getElementById('mtrsk2');
    var img1 = document.getElementById('mtrsk1');
    var img3 = document.getElementById('mtrsk3');
    var img4 = document.getElementById('mtrsk4');
    var img5 = document.getElementById('mtrsk5');
    if (image.src.match("svg/closedmtr.svg")) {
    	image.src = "svg/openmtr.svg";
        img1.src = "svg/closedmtr.svg";
        img3.src = "svg/closedmtr.svg";
        img4.src = "svg/closedmtr.svg";
        img5.src = "svg/closedmtr.svg";
         }
        
            
    }
});


$(window).scroll(function() {
	var d = document.getElementById("content02");
	var myposition = d.offsetTop + d.offsetHeight - $('#mtrk-header').outerHeight()
    if ($(window).scrollTop() > myposition) {
        $('#sectionNumber .txt').text("03");
         $('#sectionName .txt').text("Occupation");
    var image = document.getElementById('mtrsk3');
    var img2 = document.getElementById('mtrsk2');
    var img1 = document.getElementById('mtrsk1');
    var img4 = document.getElementById('mtrsk4');
    var img5 = document.getElementById('mtrsk5');
    if (image.src.match("svg/closedmtr.svg")) {
    	image.src = "svg/openmtr.svg";
        img2.src = "svg/closedmtr.svg";
        img1.src = "svg/closedmtr.svg";
        img4.src = "svg/closedmtr.svg";
        img5.src = "svg/closedmtr.svg";}
    }
});

$(window).scroll(function() {
	var d = document.getElementById("content03");
	var myposition = d.offsetTop + d.offsetHeight - $('#mtrk-header').outerHeight()
    if ($(window).scrollTop() > myposition) {
        $('#sectionNumber .txt').text("04");
         $('#sectionName .txt').text("Scholarly works");
         var image = document.getElementById('mtrsk4');
    var img2 = document.getElementById('mtrsk2');
    var img3 = document.getElementById('mtrsk3');
    var img1 = document.getElementById('mtrsk1');
    var img5 = document.getElementById('mtrsk5');
    if (image.src.match("svg/closedmtr.svg")) {
    	image.src = "svg/openmtr.svg";
        img2.src = "svg/closedmtr.svg";
        img3.src = "svg/closedmtr.svg";
        img1.src = "svg/closedmtr.svg";
        img5.src = "svg/closedmtr.svg";}
    }
});

$(window).scroll(function() {
	var d = document.getElementById("content04");
	var myposition = d.offsetTop + d.offsetHeight - $('#mtrk-header').outerHeight()
    if ($(window).scrollTop() > myposition) {
    	$('.mtrk-header').removeClass( "mtrk-header-pink" );
        $('#sectionNumber .txt').text("05");
         $('#sectionName .txt').text("ARTchives");
    var image = document.getElementById('mtrsk5');
    var img2 = document.getElementById('mtrsk2');
    var img3 = document.getElementById('mtrsk3');
    var img4 = document.getElementById('mtrsk4');
    var img1 = document.getElementById('mtrsk1');
   	if (image.src.match("svg/openmtrpink.svg")) {
    	image.src = "svg/closedmtr.svg";}  
    if (image.src.match("svg/closedmtr.svg")) {
    	image.src = "svg/openmtr.svg";
        img2.src = "svg/closedmtr.svg";
        img3.src = "svg/closedmtr.svg";
        img4.src = "svg/closedmtr.svg";
        img1.src = "svg/closedmtr.svg";}
    } 
});



// $(window).scroll(function() {
//	var d = document.getElementById("content05");
//	var myposition = d.offsetTop + d.offsetHeight - $('#mtrk-header').outerHeight()
//    if ($(window).scrollTop() > myposition) {  
//    $("#zoom-matrioska").css({
// 'transform': 'scale(' + (1 + $(window).scrollTop() / 500) + ')'
//  }); 
//         
//    }
//});

    var number = 0;
$(window).scroll(function() {
	var d = document.getElementById("content05");
	var myposition = d.offsetTop + d.offsetHeight + $('#mtrk-header').outerHeight()*2
    if ($(window).scrollTop() > myposition) { 
    $('.mtrk-header').addClass( "mtrk-header-pink" );   
    	if (number < 30) {
    $(window).scroll(function(){
  	number = number + 0.05;
  	$("#zoom-matrioska").css({
  'transform': 'scale(' + (2 + number ) + ')'
  }); 
	});
       }
    }
});



$(window).scroll(function() {
	var d = document.getElementById("content05");
	var myposition = d.offsetTop + d.offsetHeight + $('#mtrk-header').outerHeight()
    if ($(window).scrollTop() > myposition) {
    var image = document.getElementById('mtrsk5');
    var img2 = document.getElementById('mtrsk2');
    var img3 = document.getElementById('mtrsk3');
    var img4 = document.getElementById('mtrsk4');
    var img1 = document.getElementById('mtrsk1');
        img1.src = "svg/closedmtrpink.svg";
        img2.src = "svg/closedmtrpink.svg";
        img3.src = "svg/closedmtrpink.svg";
        img4.src = "svg/closedmtrpink.svg";
        image.src = "svg/openmtrpink.svg";   
         
    }
});

// ----------- MOVE SIDEBAR -------------

$(window).on('scroll.scroll36',function() {
    if (checkVisible($('.zoom-matrioska'))) { 
    	     $('.mtrk-sidebar').addClass( "move_left");
        $(window).off('scroll.scroll36');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll37',function() {
    if (checkVisible($('.content07'))) { 
    	     $('.mtrk-sidebar').addClass( "move_back");
        $(window).off('scroll.scroll37');
    } else {
         // do nothing
    }
});

// ----------- DICTIONARY -------------

$(window).on('scroll.scroll38',function() {
    if (checkVisible($('.after-dict-flag'))) { 
    	$('.text-disappear1').fadeTo(2000,0);
    	$('.text-disappear2').delay(500).fadeTo(3000,0);
    	$('.text-disappear3').delay(1000).fadeTo(3000,0);
    	$('.text-disappear4').delay(1000).fadeTo(3000,0);
    	$('.personal-name').addClass( "test4" );
    	setTimeout(function(){
     	$('.personal-name').addClass( "personal-name-big" );
   }, 4000);
    	
    	
        $(window).off('scroll.scroll38');
    } else {
         // do nothing
    }
});



// ----------- SIDE BAR BUTTONS FUNCTIONS -------------

function changeImageOne() {
    var image = document.getElementById('mtrsk1');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content01").offset().top - $('#mtrk-header').outerHeight()},
        'slow');    
    }  else if (image.src.match("svg/closedmtrpink.svg")) {
    $('html,body').animate({
        scrollTop: $(".content01").offset().top - $('#mtrk-header').outerHeight()},
        'slow');    
    } else {
    image.src = "svg/openmtr.svg";
    }

}

function changeImageTwo() {
    var image = document.getElementById('mtrsk2');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content02").offset().top - $('#mtrk-header').outerHeight()},
        'slow');     
    } else if (image.src.match("svg/closedmtrpink.svg")) {
    $('html,body').animate({
        scrollTop: $(".content02").offset().top - $('#mtrk-header').outerHeight()},
        'slow');    
    } else {
    image.src = "svg/openmtr.svg";
    }
}

function changeImageThree() {
    var image = document.getElementById('mtrsk3');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content03").offset().top - $('#mtrk-header').outerHeight()},
        'slow');     
    } else if (image.src.match("svg/closedmtrpink.svg")) {
    $('html,body').animate({
        scrollTop: $(".content03").offset().top - $('#mtrk-header').outerHeight()},
        'slow');    
    } else {
    image.src = "svg/openmtr.svg";
    }
}

function changeImageFour() {
    var image = document.getElementById('mtrsk4');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content04").offset().top - $('#mtrk-header').outerHeight()},
        'slow');     
    } else if (image.src.match("svg/closedmtrpink.svg")) {
    $('html,body').animate({
        scrollTop: $(".content04").offset().top - $('#mtrk-header').outerHeight()},
        'slow');    
    } else {
    image.src = "svg/openmtr.svg";
    }
}

function changeImageFive() {
    var image = document.getElementById('mtrsk5');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content05").offset().top - $('#mtrk-header').outerHeight()},
        'slow');     
    } else if (image.src.match("svg/closedmtrpink.svg")) {
    $('html,body').animate({
        scrollTop: $(".content05").offset().top - $('#mtrk-header').outerHeight()},
        'slow');    
    } else {
    image.src = "svg/openmtr.svg";
    }
}


// ----------- ZOOM IN MATRIOSKA PINK EFFECT -------------

