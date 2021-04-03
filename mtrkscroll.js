window.scroll(0, 10)

setTimeout(function(){ 
document.getElementById("content01").style.opacity = "1"; 
// document.body.style.overflowY = "visible";
}, 8000);

setTimeout(function(){ 
document.querySelector('body').style.opacity = 1
}, 200);

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 400)
}

$(".line3 img").hide().each(function(i) {
  $(this).delay(i*50).fadeIn(200);
});

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
        

$(window).scroll(function() {        
var d = document.getElementById("intro");
	var myposition = d.offsetTop + d.offsetHeight - $('#mtrk-header').outerHeight()
    if ($(window).scrollTop() > myposition) {
    
    $(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text()
      },
      {
        duration: 4000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
});
    }
});     
 

window.onload = function() {
$("#intro p").hide().each(function(i) {
  $(this).delay(i*3500).fadeIn(2200);
});

 }

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



