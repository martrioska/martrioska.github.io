// ----------- PAGE TRANSISITION -------------

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
     $(this).delay(fadeInDiv * 3500).fadeIn(2200);
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
    $(".line3 img").hide().each(function(i) {
  		$(this).delay(i*50).fadeIn(200);
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
		$('.count-section-text').delay(2000).fadeIn(2000);
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

// ----------- FADE IN MATRIOSKA -------------

$(window).on('scroll.scroll4',function() {
    if (checkVisible($('.after-arrow-p'))) { 
		$('.text-section-pic').fadeTo(4000, 1);
		$('.smallarrow').delay(4000).fadeIn(2000);
        $(window).off('scroll.scroll4');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll5',function() {
    if (checkVisible($('.after-arrow-p2'))) { 
		$('.text-section-pic2').fadeTo(4000, 1);
		$('.text-section-pic3').delay(3000).fadeTo(4000, 0.8);
		$('.smallarrow').delay(4000).fadeIn(2000);
        $(window).off('scroll.scroll5');
    } else {
         // do nothing
    }
});

// ----------- FADE IN TEXT SECTION -------------

$(window).on('scroll.scroll6',function() {
    if (checkVisible($('.double-text-section1'))) { 
		$('.text-section-below').delay(2000).fadeIn(2000);
        $(window).off('scroll.scroll6');
    } else {
         // do nothing
    }
});

$(window).on('scroll.scroll8',function() {
    if (checkVisible($('.text-section-start'))) { 
		$('.bottom-paragraph').delay(2000).fadeIn(2000);
		$('.smallarrow').hide().delay(4000).fadeIn(2000);
        $(window).off('scroll.scroll8');
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

// ----------- CASCADING APPEARING FLAGS -------------

$(window).on('scroll.scroll10',function() {
    if (checkVisible($('.after-image-flag2'))) { 
		$('.flag-image1, .flag-image2, .flag-image3').each(function(fadeInDiv) {
     $(this).delay(fadeInDiv * 1000).fadeTo(4000, 1);
   });
        $(window).off('scroll.scroll10');
    } else {
         // do nothing
    }
});

<<<<<<< HEAD
// ----------- CASCADING APPEARING COUNTRIES -------------

$(window).on('scroll.scroll15',function() {
    if (checkVisible($('.late-text-section'))) { 
		$('.estonia-text, .slovenia-text').each(function(fadeInDiv) {
     $(this).delay(fadeInDiv * 1000).fadeTo(4000, 1);
   });
        $(window).off('scroll.scroll15');
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
        if ('flag' in sw_col1 && !sw_col1['flag']) {
            sw_col1.appear();
            sw_col1.series.each(function(series) {
                series.appear();
            });
            sw_col1['flag'] = true;
        }
    } else {
         sw_col1['flag'] = false;
    }
});

$(window).on('scroll.scroll13',function() {
    if (checkVisible($('#sw-col2'))) { 
        if ('flag' in sw_col2 && !sw_col2['flag']) {
            sw_col2.appear();
            sw_col2.series.each(function(series) {
                series.appear();
            });
            sw_col2['flag'] = true;
        }
    } else {
         sw_col2['flag'] = false;
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
        $('#sectionNumber .txt').text("05");
         $('#sectionName .txt').text("ARTchives");
         var image = document.getElementById('mtrsk5');
    var img2 = document.getElementById('mtrsk2');
    var img3 = document.getElementById('mtrsk3');
    var img4 = document.getElementById('mtrsk4');
    var img1 = document.getElementById('mtrsk1');
    if (image.src.match("svg/closedmtr.svg")) {
    	image.src = "svg/openmtr.svg";
        img2.src = "svg/closedmtr.svg";
        img3.src = "svg/closedmtr.svg";
        img4.src = "svg/closedmtr.svg";
        img1.src = "svg/closedmtr.svg";}
         
    }
});

// ----------- SIDE BAR BUTTONS FUNCTIONS -------------

function changeImageOne() {
    var image = document.getElementById('mtrsk1');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content01").offset().top - $('#mtrk-header').outerHeight()},
        'slow');    
    } else {
    image.src = "svg/closedmtr.svg";
    }
}

function changeImageTwo() {
    var image = document.getElementById('mtrsk2');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content02").offset().top - $('#mtrk-header').outerHeight()},
        'slow');     
    } else {
    image.src = "svg/closedmtr.svg";
    }
}

function changeImageThree() {
    var image = document.getElementById('mtrsk3');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content03").offset().top - $('#mtrk-header').outerHeight()},
        'slow');     
    } else {
    image.src = "svg/closedmtr.svg";
    }
}

function changeImageFour() {
    var image = document.getElementById('mtrsk4');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content04").offset().top - $('#mtrk-header').outerHeight()},
        'slow');     
    } else {
    image.src = "svg/closedmtr.svg";
    }
}

function changeImageFive() {
    var image = document.getElementById('mtrsk5');
    if (image.src.match("svg/closedmtr.svg")) {
    $('html,body').animate({
        scrollTop: $(".content05").offset().top - $('#mtrk-header').outerHeight()},
        'slow');     
    } else {
    image.src = "svg/closedmtr.svg";
    }
}



