

jQuery( document ).ready(function( $ ) {
 
var text1 = $('.text1'),
	text2 = $('.text2'),
	text3 = $('.text3')
	text4 = $('.text4'),
	text5 = $('.text5'),
	text6 = $('.text6'),
	text7 = $('.text7'),
	text8 = $('.text8'),
	myBg = $('.bg'),
	smoke = $('.smoke'),
	hero1 = $('.heroLeft'),
	hero2 = $('.heroRight'),
	shield = $('.shield');
 var smoke2 = smoke.clone().appendTo('body').addClass('smoke2');
 var myVideo = $('video');

 $('.text1, .text2, .text3, .text4, .text5, .text6, .text7, .text8, .bg, .heroLeft, .heroRight, .shield').hide();
 

 
 //    text and images animation functions

function textAnimationTop(name){
	name.removeClass('animated fadeOutUp');
	name.addClass('animated fadeInDown').css('display', 'inline');
};

function textAnimationTopBack(name){
	name.removeClass('animated fadeInDown');
	name.addClass('animated fadeOutUp');
};


function textAnimationTop2(name){
	name.removeClass('animated fadeOutDown');
	name.addClass('animated fadeInUp').css('display', 'inline');
};

function textAnimationTopBack2(name){
	name.removeClass('animated fadeInUp');
	name.addClass('animated fadeOutDown');
};


function textAnimationWobble(name){
	name.removeClass('animated wobble');
	name.addClass('animated wobble').css('display', 'inline');
};

function textAnimationZoomOut(name){
	name.removeClass('animated wobble');
	name.addClass('animated zoomOut').css('display', 'inline');
};

function textAnimation(name){
	name.removeClass('animated fadeOutRight');
	name.addClass('animated fadeInRight').css('display', 'inline');
};

function textAnimation2(name){
	name.removeClass('animated fadeOutLeft');
	name.addClass('animated fadeInLeft').css('display', 'inline');
};

function textAnimationBack(name){
	name.removeClass('animated fadeInRight');
	name.addClass('animated fadeOutRight');
};

function textAnimationBack2(name){
	name.removeClass('animated fadeInLeft');
	name.addClass('animated fadeOutLeft');
};
 
 function setDelay(name, time)
{
  setTimeout(name, time);
}
 
 //animation 1 
var animationOne = function()
{
	  textAnimationTop(text1);
	  textAnimationTop2(text2)
};

//animation 1 remove
var animationOneRemove = function()
{
	textAnimationTopBack(text1);
	textAnimationTopBack(text2);

};

//animation 2 
var animationTwo = function()
{
	  textAnimationTop(text3)
	  textAnimationTop2(text4);
};

//animation 2 remove
var animationTwoRemove = function()
{
	textAnimationTopBack(text3);
	textAnimationTopBack(text4);
};


//animation 3 
var animationThree = function()
{
	  textAnimationTop(text5)
	  textAnimationTop2(text6);
	  setDelay(videoStopAndHide, 2000);
	  setDelay(animateBg, 4000);
};

var videoStart = function(){
	myVideo[0].play();
};

var videoStopAndHide = function()
{
	myVideo.animate({opacity:0}, 3000);
};

var mySmoke1 = function()
	{
	   smoke.css({opacity: 0.6, bottom: '-2000px'}).animate({bottom: '100%'}, 60000, mySmoke1);
	  // setDelay(mySmoke1, 40000);	   
	}
	
var mySmoke2 = function()
	{

		smoke2.css({opacity: 0.6, left: '10%', width: '600px', bottom: '-2000px'}).animate({bottom: '100%'}, 50000, mySmoke2);
		//setDelay(mySmoke2, 50000); 
	}


var animateBg = function()
{
	myBg.css({opacity: 0, visibility: "visible", display: "block"}).animate({opacity:1}, 5000);	
	
};

var heroAnimation = function()
{
	var left = 'left',
	    right = 'right';
	myAnimation(hero1, left);
	myAnimation(hero2, right);
};

var myAnimation = function(obj, side)
{
	var counter = 5;
	console.log(side);
	var slideDisplay = 'none';
	var slideHero1 = obj.clone().appendTo('body').css({'display': slideDisplay, 'z-index': counter--}).css(side, '100px');
	var slideHero2 = obj.clone().appendTo('body').css({'display': slideDisplay, 'z-index': counter--}).css(side, '0px');
	var slideHero3 = obj.clone().appendTo('body').css({'display': slideDisplay, 'z-index': counter--}).css(side, '-100px');
	var slideHero4 = obj.clone().appendTo('body').css({'display': slideDisplay, 'z-index': counter--}).css(side, '-200px');
	var slideHero5 = obj.clone().appendTo('body').css({'display': slideDisplay, 'z-index': counter--}).css(side, '-300px');
	heroAppear(slideHero5);
	setTimeout(function(){heroAppear(slideHero4)}, 100);
  	setTimeout(function(){heroAppear(slideHero3)}, 200);
	setTimeout(function(){heroAppear(slideHero2)}, 300);
	setTimeout(function(){slideHero1.css({'display': 'block'})}, 400);
}

var heroAppear = function(slide)
{
        slide.css({'opacity': 1, 'display': 'block'}).animate({opacity:0.7}, 200).animate({opacity:0.5}, 200).animate({opacity:0.3}, 200).animate({opacity:0}, 200);

};

var hero2Animation = function()
{
	var counter = 5;
	var slideHero1 = hero2.clone().appendTo('body').css({'right': '100px', 'display': 'block', 'z-index': counter--});
	var slideHero2 = hero2.clone().appendTo('body').css({'right': '0px', 'display': 'block', 'z-index': counter--});
	var slideHero3 = hero2.clone().appendTo('body').css({'right': '-100px', 'display': 'block', 'z-index': counter--});
	var slideHero4 = hero2.clone().appendTo('body').css({'right': '-200px', 'display': 'block', 'z-index': counter--});
	var slideHero5 = hero2.clone().appendTo('body').css({'right': '-300px', 'display': 'block', 'z-index': counter--});
}

var shieldAnimation = function()
{
		shield.css({'display':'block', 'opacity': 0 }).animate({'opacity': 1})
}
$(window).load(function() {
	setDelay(animationOne, 2000);
	setDelay(videoStart, 2000);
	setDelay(animationOneRemove, 7000);
	setDelay(animationTwo, 9000);
	setDelay(animationTwoRemove, 14000);
	setDelay(animationThree, 16000);
	setDelay(mySmoke1, 16000);
	setDelay(mySmoke2, 16000); 
	setDelay(heroAnimation, 22000); 
	setDelay(shieldAnimation, 22000); 
	});
});

(jQuery);