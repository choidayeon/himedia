$(function(){
	$("ul.sub").hide();
	$("#lnb>ul>li").mouseenter(function(){
		var i = $(this).index();
		$("#lnb>ul>li:eq("+i+") ul").slideDown();
	}).mouseleave(function(){
		$("ul.sub").hide();
	});

	$(".slider_wrap").bxSlider({
		auto:true
	});


	$(".top").click(function(){
		// window.scrollTo(0,0)
		// $("html,body").scrollTop(0);
		$("html,body").stop().animate({scrollTop:0},500);
	});	
});