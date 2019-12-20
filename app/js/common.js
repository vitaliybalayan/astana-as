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
					
					console.log(new_price);
					this.finish(new_total_price);

				} if (total_price >= 1500000) {

					var new_price = price - 7;
					console.log(new_price);
					var new_total_price = value * new_price;
					this.finish(new_total_price);
				
				}

			},

			finish: function (value) {
				this.result = value.toLocaleString();
			}


		}
	});

});