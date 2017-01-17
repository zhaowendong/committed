//if (jQuery) {alert("success")}
	$(function(){

	$('.menu-trigger').click(function(){
	   if ($(this).find('a').hasClass('close')) {
	   	$(this).find('a').removeClass('close');
	   	$('.navbox').removeClass('nav-rotate')
	   	// $('.navbox').hide();

	   }else{
	   	$(this).find('a').addClass('close');
	   	$('.navbox').addClass('nav-rotate')
	   	// $('.navbox').show();
	   }
		
	});
$('.navlist').find('li').each(function(){
	$(this).click(function(){
		var val=$(this).data('nav-val');
$('html,body').animate({'scrollTop':$('.'+val).offset().top},700)
	})
});
	slider()
	function slider(){
		var width=$('.worksitem').outerWidth();
		var index=0;
		var num=Math.ceil($('.workslist').find('li').length/3);
		$('.last').bind('click',function(){
			index-=1;
			 if(index == -1){
			    index= num-1;
			 }
            move(index*width);
		});
		$('.next').bind('click',function(){
		index+=1;	 
		if(index == num) {index = 0;}	
		move(index*width);	
		});
	}
function move(wid){
      $('.workslist').css({'transition':'all 800ms linear','transform':'translate3d('+(-wid)+'px,0,0)','-webkit-transform':'translate3d('+(-wid)+',0,0)'});
};
	})