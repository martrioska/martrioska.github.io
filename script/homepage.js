
$(document).ready(function () {
	$("body").css({"overflow-y":"visible"});
    $('html,body').animate({
        scrollTop: $(".vidContain").offset().top},
        'slow');
    setTimeout(function(){
        $("body").css({"overflow-y":"hidden"});  
   }, 500); 
        
    });

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 400)
};

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
});




function changePageOne() {
	$("body").css({"overflow-y":"visible"});   
    $('html,body').animate({
        scrollTop: $("#aboutus").offset().top},
        'slow');
    setTimeout(function(){
        $("body").css({"overflow-y":"hidden"});  
   }, 900);
    };
    
function changePageTwo() {
	$("body").css({"overflow-y":"visible"});
    $('html,body').animate({
        scrollTop: $("#theproject").offset().top},
        'slow'); 
    setTimeout(function(){
        $("body").css({"overflow-y":"hidden"});  
   }, 900);   
    };
    
function changePageThree() {
	$("body").css({"overflow-y":"visible"});
    $('html,body').animate({
        scrollTop: $("#credits").offset().top},
        'slow');
    setTimeout(function(){
        $("body").css({"overflow-y":"hidden"});  
   }, 900);   
    };
     
function changePageBack() {
	$("body").css({"overflow-y":"visible"});
    $('html,body').animate({
        scrollTop: $(".vidContain").offset().top},
        'slow');
    setTimeout(function(){
        $("body").css({"overflow-y":"hidden"});  
   }, 900);    
    };
    
