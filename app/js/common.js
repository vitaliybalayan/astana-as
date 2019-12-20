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

	var vue = new Vue({
		el: '#calculator_price',
		data: {
			price_brick: '1000',
			weight_value: '1',
			result: '0',
			quantity: '0',
			result: '0',
			bricks: [
				{ text: 'Полуторный керамический', value: '1000' },
				{ text: 'Одинарный керамический', value: '2000' }
			],
			weights: [
				{ text: 'Киллограм', value: '1' },
				{ text: 'Тонны', value: '1000' }
			]
		},
		methods: {
			input: function (quantity) {

				var quantity = quantity;
				this.finish();

			},

			brick: function (value) {

				var price_brick = value;
				this.finish();

			},

			weight: function (value) {

				var weight_value = value;
				this.finish();
			
			},

			finish: function () {
				var value = this.quantity;
				var price = this.price_brick;
				var weight = this.weight_value;

				var finish = value * price * weight;

				this.result = finish.toLocaleString();
			}
		}
	});

});