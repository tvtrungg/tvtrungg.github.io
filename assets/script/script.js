// Text Animation
var slides = document.querySelectorAll('.title_animation p');
var slideIndex = 0;

slides[slideIndex].classList.add('visible');

setInterval(function () {
	// hide the current slide
	slides[slideIndex].classList.remove('visible');
	slides[slideIndex].classList.add('hidden');
	// increment the slide index
	slideIndex = (slideIndex + 1) % slides.length;
	// show the next slide
	slides[slideIndex].classList.remove('hidden');
	slides[slideIndex].classList.add('visible');
}, 2000);


//download cv
$('.download_CV').click(function () {
	// mở tag mới và chuyển tới đường link
	window.open(
		"https://static.topcv.vn/topcv-cv-uploads/5703258c523139d2583bb34ca7a328fd.pdf#toolbar=0&navpanes=0&scrollbar=0"
	)
});

// btn open/close
$('.OC_btn').click(function () {
	$('.mobile_menu').toggleClass('active');
});

$('.close_btn').click(function () {
	$('.mobile_menu').removeClass('active');
});

$('.Mbnav_item').click(function () {
	$('.mobile_menu').removeClass('active');
});

// card animation 
VanillaTilt.init(document.querySelectorAll(".box"), {
	max: 15,
	speed: 200
});


/*HOTEL NEWS*/
/*Khi scroll đến thì mới hiện ra, bình thường sẽ ẩn đi*/
$(document).ready(function () {
	$(".skill_content").slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 2,
		adaptiveHeight: true,
		// autoplay: true,
		// autoplaySpeed: 3000,
		// speed: 1000,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev_suites"><ion-icon name="arrow-back-outline"></ion-icon></button>',
		nextArrow: '<button type="button" class="slick-next_suites"><ion-icon name="arrow-forward-outline"></ion-icon></button>',

	});
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 230) {
		$('.banner_about').addClass('active');
		$('.h1_title_About').addClass('active');
	} else {
		$('.banner_about').removeClass('active');
		$('.h1_title_About').removeClass('active');
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 1100) {
		$('.banner_skills').addClass('active');
		$('.h1_title_Skills').addClass('active');
	} else {
		$('.banner_skills').removeClass('active');
		$('.h1_title_Skills').removeClass('active');
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 1800) {
		$('.banner_projects').addClass('active');
		$('.h1_title_Projects').addClass('active');
	} else {
		$('.banner_projects').removeClass('active');
		$('.h1_title_Projects').removeClass('active');
	}
});
