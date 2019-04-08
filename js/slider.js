$(document).ready(function(){
	Slider = function () {

		var sliderImageW = $('#s_images').width();
		var sliderImageH = $('#s_images').height();
		var numImages = $('#s_images_line img').length;
		var texts = $('.s_text');
		var points = $('.s_button');
		var n = 0;
		var speed = 600;
		var speedSlide = 6000;

		//Предварительные вычисления

		comp = function () {
			$('#s_images_line').css('width', numImages*sliderImageW);
			$('#s_images_line img').css('width', sliderImageW);
			$('#s_images_line img').css('height', sliderImageH);

			textDrive(0);
			pointDrive(0);

		}

		//Создание кнопок
		pointButton = function () {
			for (var i=0; i<numImages; i++) {
				$('#s_buttons').append('<div class="s_button"></div>');
			}
			points = $('.s_button');
		}
		//Обработчик нажатия 
		$('#banner .s_button').live('click', function (e) {
			n = $(e.currentTarget).index();
			move(n);
		});
		
		//Обработчик нажатия 
		$('#banner .arrow.l').live('click', function (e) {
			n = $(".s_button.active").index();
			n = n - 1;
			if(n < 0){
				n = numImages - 1;
			}
			move(n);
		});
		//Обработчик нажатия 
		$('#banner .arrow.r').live('click', function (e) {
			n = $(".s_button.active").index();
			n = n + 1;
			move(n);
		});
		
		
		
		//Переключение картинок
		imageDrive = function (num) {
			if ((num == 0) && (n == numImages-1)) {
				$('#s_images_line').css('margin-left', (-1)*num*sliderImageW);
			}
			else {
				$('#s_images_line').animate({'margin-left': (-1)*num*sliderImageW}, speed);
			}
		}
		//Переключение текста
		textDrive = function (num) {
			$(texts).fadeOut(speed).css('display', 'none');
			//$(texts).css('display', 'none');
			$(texts[num]).fadeIn(speed);
		}
		//Переключение кнопок
		pointDrive = function (num) {
			$(points).css({
				'background': 'url(img/point.png)'
			}).removeClass("active");
			$(points[num]).css({
				'background': 'url(img/point-a.png)'
			}).addClass("active");
		}
		
		//Слайдшоу
		slShow = function () {
			n = n + 1;
			timeout = setTimeout(function(){move()}, speedSlide);
		}
		
		//Движок
		move = function () {
			if ( n == numImages ) {
				imageDrive(0);
				textDrive(0);
				pointDrive(0);
				n = 0;
			}
			else {
				imageDrive(n);
				textDrive(n);
				pointDrive(n);
			}
			clearTimeout(timeout);
			slShow();
		}
		pointButton();
		comp();		
		slShow(n);		
	}
	Slider();
})