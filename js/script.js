$(document).ready(function(){
	//калькулятор и его ширина
	if($(window).width() > 1250 ){
		$('#calculate > img').css('right','125px');
		$('#calculate > #columns').css('margin-left','150px');
	}
	else {
		if($(window).width() > 1100 ){
			$('#calculate > img').css('right','75px');
			$('#calculate > #columns').css('margin-left','75px');
		}
		else{
			$('#calculate > img').css('right','0px');
			$('#calculate > #columns').css('margin-left','60px');
		}
	}
	
	//высота серого меню
	/* if( (window.location.href.split('/')[3]) == '' ){
		W = $($('.menu_cols')[0]).height();
		C = $('#content').height();
		S = 150;
		CSW = C+S+W;
		$('.menu_column').css('min-height', + CSW + 15);
	}
	else {
		if( $('.menu_column').height() > $('#content').height() ){

		}
		else {
			window.onload=function(){
				C_W = $('#content').height();
				$('.menu_column').css('min-height', + C_W+15);
			}
		}
	} */
	/* $('body').mouseover(function(){
	if( (window.location.href.split('/')[3]) == '' ){
		W = $($('.menu_cols')[0]).height();
		C = $('#content').height();
		S = 150;
		CSW = C+S+W;
		$('.menu_column').css('min-height', + CSW + 15);
	}
	else {
		if( $('.menu_column').height() > $('#content').height() ){

		}
		else {
			window.onload=function(){
				C_W = $('#content').height();
				$('.menu_column').css('min-height', + C_W+15);
			}
		}
	}
	}) */
	//сумма калькулятора
	if($(window).width() > 1100 ){
		$('#calculate > img').css('margin-left','35px');
	}
	$('.column .togler').click(function(){
		if( $(this).hasClass('deact') ){
			if( !$(this).hasClass('s')){
				$(this).removeClass('deact');
			}
		}
		else{
			if( !$(this).hasClass('s')){
				$(this).addClass('deact');
			}
		}
	})
	
	//скролбар калькулятора
	$('.togler .s').draggable({containment: ".column.toggler", scroll: false , axis: "y"});

	$("#columns .column .togler .value a").on("click", function(){
		var text = parseInt($('.togler .value i').text());
		if(isNaN(text)){
			text = 50;
		}
		if($(this).hasClass("top")){
			text = text + 5;
		} else {
			text = text - 5;
		}
		if(text > 400){
			text = 400;
		}

		if(text < 50){
			text = 50;
		}

		$('.togler.s .value i').text(text);
		calculator.Refresh('s');
		//var text = ((-10 + top - 70)*5)*-1;
		
		var top = 70 - (0.2 * (text - 50));
		//console.log(top);
		$('.togler.s').css('top', top);
		$('.fl_l > .value b').text(calculator.CurrentSum());
		return false;
	});
	
	$('#columns').mousemove(function(){
		var val_par = $('.togler').css('top');
		var var_par_pars = parseInt(val_par);
		$('.togler .value i').text(((-10 + var_par_pars - 70)*5)*-1);
		calculator.Refresh('s');
		$('.fl_l > .value b').text(calculator.CurrentSum());
	})
	
	var H_W = $('#header').width();
	$('#top_bar').css('width', H_W);
	
	//resize
	/* $(window).resize(function(){
		var H_W = $('#header').width();
		$('#top_bar').css('width', H_W);
		if($(window).width() > 1250 ){
			$('#calculate > img').css('right','125px');
			$('#calculate > #columns').css('margin-left','150px');
		}
		else {
			if($(window).width() > 1100 ){
				$('#calculate > img').css('right','75px');
				$('#calculate > #columns').css('margin-left','75px');
			}
			else{
				$('#calculate > img').css('right','0px');
				$('#calculate > #columns').css('margin-left','60px');
			}
		}
		var C_W = $('#content').height();
		$('.menu_column').css('height', + C_W+15);
	}) */
		
	//переключаемые кнопки на главной
	$('#switcher > .switch').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		if( $($('.switch')[0]).hasClass('active')){
			$('#panel > .fl_l').css('display','none');
			$('#columns').css('display','none');
			$('#calculate > img').css('display','none');
			$('#calculate #form').css('display','block');
		}
		else{
			$('#panel > .fl_l').css('display','block');
			$('#columns').css('display','block');
			$('#calculate > img').css('display','block');
			$('#calculate #form').css('display','none');
		}
	})
	if( $($('.switch')[0]).hasClass('active')){
		$('#panel > .fl_l').css('display','none');
		$('#columns').css('display','none');
		$('#calculate > img').css('display','none');
		$('#calculate #form').css('display','block');
	}
	else{
		$('#panel > .fl_l').css('display','block');
		$('#columns').css('display','block');
		$('#calculate > img').css('display','block');
		$('#calculate #form').css('display','none');
	}
	
	//очистить и закрыть форму
	$('.clear_form').click(function(){
		$(this).siblings('form').find('input').val('');
		$(this).siblings('form').find('textarea').val('')
		$('#panel > .fl_l').css('display','block');
		$('#columns').css('display','block');
		$('#calculate > img').css('display','block');
		$('#calculate #form').css('display','none');
		$($('#switcher > .switch')[0]).removeClass('active');
		$($('#switcher > .switch')[1]).addClass('active');
	})

	// кнопки преймуществ
	/* var len = $('#slider .line_slog').find('p').length;
	$('#slider .line_slog').css('width', 610*len);
	$('.arr_l p').eq(0).addClass('active');
	if( $('.arr_l p').eq(0).hasClass('active') ){
		$('.arr_l .a_l').css('display','none')
	}
	$('.arr_l .a_l').click(function(){
		var len = $('#slider .line_slog').find('p').length;
		$('.arr_l .a_r').css('display','block')
		$('.arr_l p.active').removeClass('active').prev().addClass('active');
		$('.arr_l .line_slog').css('margin-left','+=610px');
		if( $('.arr_l p').eq(0).hasClass('active') ){
			$('.arr_l .a_l').css('display','none')
		}
	})
	$('.arr_l .a_r').click(function(){
		var len = $('#slider .line_slog').find('p').length;
		$('.arr_l .a_l').css('display','block')
		$('.arr_l p.active').removeClass('active').next().addClass('active');
		$('.arr_l .line_slog').css('margin-left','-=610px');
		if( $('.arr_l p').eq(len-1).hasClass('active') ){
			$('.arr_l .a_r').css('display','none')
		}
	}) */
	
	setInterval(function(){
		
		var h = parseInt($("#content .wrap_content").outerHeight(true));
		if(isNaN(h)){
			var h = parseInt($("#content .wrap_content_inner").outerHeight(true));
			
		}
		/* if(window.location.href == ""){
			h = h + 
		} */
		$("#center .menu_column").css("min-height", h);
	}, 1000);
	
	/* var slider = $('#slider .line_slog').bxSlider({
		nextSelector: '#slider .a_r',
		prevSelector: '#slider .a_l',
		prevText: "&nbsp;",
		nextText: "&nbsp;",
		minSlides: 2,
		maxSlides: 2
		
	});
	
	$('.arrow a.r').click(function(){
	  slider.goToNextSlide();
	  return false;
	}); */
	
	$('.js-main-slider').bxSlider({
		
	});
	
})









