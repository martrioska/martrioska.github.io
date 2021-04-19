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


$(window).on('scroll.scroll3',function() {
    if (checkVisible($('.count-section2'))) { 
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
        $(window).off('scroll.scroll3');
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



