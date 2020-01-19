$(function() {

	$('.main__slider').slick({
		dots: true,
		arrows: false,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		// appendDots: htmlString,
		pauseOnDotsHover: true,
		dotsClass: 'container slick-dots'
	});

	$('.gallery-slider').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		slidesToShow: 4,
  		slidesToScroll: 1,
  		infinite: true,
  		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.reviews__slider').slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1000,
		slidesToShow: 3,
  		slidesToScroll: 1,
  		infinite: true,
  		responsive: [
  			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	var vue = new Vue({
		el: '#calculator_price',
		data: {
			price_brick: '61',
			result: '0',
			quantity: '0',
			result: '0',
			bricks: [
				{ text: 'Полуторный керамический', value: '61' },
				{ text: 'Одинарный керамический', value: '60' }
			],
		},
		methods: {
			brick: function (value) {

				var price_brick = value;
				this.calc();

			},

			input: function (value) {

				var quantity = value;
				this.calc();

			},

			calc: function () {

				var value = this.quantity;
				var price = this.price_brick;

				var total_price = value * price;

				if (total_price < 1000000) {
					
					this.finish(total_price);

				} if (total_price >= 1000000) {
					
					var new_price = price - 5;
					var new_total_price = value * new_price;
					
					this.finish(new_total_price);

				} if (total_price >= 1500000) {

					var new_price = price - 7;
					var new_total_price = value * new_price;
					this.finish(new_total_price);
				
				}

			},

			finish: function (value) {
				this.result = value.toLocaleString();
			}


		}
	});

	$("document").ready(function($){
		var nav = $('.main_header');

		$(window).scroll(function () {
			if ($(this).scrollTop() > 25) {
				nav.addClass("fixed_header");
			} else {
				nav.removeClass("fixed_header");
			}
		});

	});

	$(".anchor_link").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top - 125 + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });

	$('.gallery-slider').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled: true
	        }
	    });
	});

});

function popupsHide() {
	$('.background__popup-overflow').fadeOut(250);
	$('.popup__item').fadeOut(500);
}

function popupShow(block) {
	var popup = $('#'+ block +'');
	$('.background__popup-overflow').fadeIn(250);
	popup.fadeIn(500);
}


$(document).ready(function() {
	$('.mobile_nav').slideAndSwipe();

	//E-mail Ajax Send
	$(".callback__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявку успешно отправлена!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

function brickCalc() {
	
	var house_building = $('#house_building').prop('checked');
	var brick_building = $('#brick_building').prop('checked');

	if (house_building) {
		house_building_calc(calcTypeBrick());
	}

	if (brick_building) {
		brick_building_calc(calcTypeBrick());
	}
}

function calcTypeBrick() {
	var single_brick = $('#single_brick').prop('checked');
	var half_brick = $('#half_brick').prop('checked');

	if (single_brick) {
		var arr = ['64','320'];
	}

	if (half_brick) {
		var arr = ['70','350'];
	}

	return arr;
}

function calcS() {
	var p, s_house, s_masonry, total;

	// Ширина дома
	var width = $('#width-metr').val();
	
	// Высота дома
	var height = $('#height-metr').val();
	
	// Длинна дома 
	var length = $('#length-metr').val();

	// Площадь двери и окна
	var s_wind_doors = $('#more-metr').val();

	p = (+length + +width) * 2;

	s_house = p * height;
	console.log('S кладки:', s_house);

	if (s_wind_doors) {
		s_masonry = s_house - s_wind_doors;
		console.log('Итого S кладки (с учетом S дверей и окон):', s_masonry);
	} else {
		s_masonry = s_house;
		console.log('Итого S кладки:', s_masonry);
	}

	return s_masonry;
}

function house_building_calc(brick_metr) {
	var total;

	total = calcS() * brick_metr[0];

	showCalcResult(total);
}

function brick_building_calc(brick_metr) {
	var total;

	total = calcS() * brick_metr[1];

	showCalcResult(total);
}

function showCalcResult(result) {

	$('.brick_result').fadeIn();
	$('.brick_result').text('Итого: '+ result.toLocaleString() +' кирпичей');


	console.log('Всего кирпичей:', result);
}