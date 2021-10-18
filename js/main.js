$(document).ready(function () {

	$('.slider__inner, .news__slider-inner').slick({
		nextArrow: '<button type="button" class="slick__btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick__btn slick-prev"></button>',
		infinite: false,
	});

	$('select').styler();

	document.querySelector('.burger').addEventListener('click', () => {
		document.documentElement.classList.toggle('lock');
	});
	$(function () {
		$('.burger').on("click", function (e) {
			$('.burger, .menu__list').toggleClass('open');
		});

		$('.menu__link').on("click", function (e) {
			$('.burger,.menu__list').removeClass('open');
			$('html').removeClass('lock');
		});

		// ScrollTo
		$("a.scrollto").on("click", function () {
			elementClick = $(this).attr("href")
			destination = $(elementClick).offset().top;
			$("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1500);
			return false;
		});

		let selector = document.querySelectorAll('input[type="tel"]');
		let im = new Inputmask('+7 (999) 999-99-99');
		im.mask(selector);
	});
});