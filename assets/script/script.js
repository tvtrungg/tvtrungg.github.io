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
	window.open(
		"https://static.topcv.vn/topcv-cv-uploads/5703258c523139d2583bb34ca7a328fd.pdf#toolbar=0&navpanes=0&scrollbar=0"
	)
});

//open project
$('.project_covid').click(function () {
	window.open(
		"https://github.com/tvtrungg/web-covid19"
	)
});

$('.project_binsmart').click(function () {
	window.open(
		"https://github.com/tvtrungg/Bin-Smart"
	)
});


$('.project_cafe').click(function () {
	window.open(
		"https://github.com/nhthieu/CafeManagementApp"
	)
});


$('.project_foodorder').click(function () {
	window.open(
		"https://github.com/namhoai1109/SQL_project"
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

$(window).scroll(function () {
	if ($(this).scrollTop() > 2500) {
		$('.banner_contact').addClass('active');
		$('.h1_title_Contact').addClass('active');
	} else {
		$('.banner_contact').removeClass('active');
		$('.h1_title_Contact').removeClass('active');
	}
});

$(window).scroll(function () {
	if ($(this).scrollTop() > 2900) {
		$('.contact_content_bottom').addClass('active');
	} else {
		$('.contact_content_bottom').removeClass('active');
	}
});


/*Display iFrame */

$('.viewOnGG').click(function () {
	$('.iframe_map').addClass('active');
	$('.class_blur').addClass('active');
	$('body').addClass('hidden');
});

$('.close_iframe').click(function () {
	$('.iframe_map').removeClass('active');
	$('.class_blur').removeClass('active');
	$('body').removeClass('hidden');

});


/*Send mail */
$('.btn_submitForm').click(function () {
	console.log("name: " + $('.input_name').val() + " email: " + $('.input_email').val() + " message: " + $('.input_message').val());
	if ($('.input_name').val() == '' || $('.input_email').val() == '' || $('.input_message').val() == '') {
		swal(
			'Warning!',
			'Please <b style="color:coral;">complete</b> all information !!!',
			'warning'
		)
	}
	else {
		swal(
			'Success',
			'Your message has been sent <b style="color:green;">successfully</b>',
			'success'
		)
	}
});



$(document).ready(function () {
	$("#myForm").submit(function () {
		$.ajax({
			type: "POST",
			url: "https://formspree.io/f/xdovygbv",
			data: $(this).serialize(),
			success: function (data) {
				swal(
					'Success',
					'Your message has been sent <b style="color:green;">successfully</b>',
					'success'
				)
			}
		});
		return false;		// avoid to execute the actual submit of the form.
	});

	$('.btn_submitForm').click(function () {
		$('#myForm')[0].reset();
	});
});
