$(document).ready(function() {

    //Navigation Menu Slider
    $('#nav-expander').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
    $('#nav-close').on('click', function(e) {
        e.preventDefault();
        $('body').removeClass('nav-expanded');
    });


    // Initialize navgoco with default options
    $(".main-menu").navgoco({
        //caret: '<span class="caret"></span>',
        accordion: false,
        openClass: 'open',
        save: true,
        cookie: {
            name: 'navgoco',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 300,
            easing: 'swing'
        }
    });

});

// Home Slider Section 2


$('.section-2-owl').owlCarousel({
    stagePadding: 80,
    loop:false,
    margin:30,
    responsive:{
        0:{
            stagePadding: 30,
			margin:20,
            items:1
        },
        600:{
			stagePadding: 30,
			margin:20,
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.section-10-owl').owlCarousel({
    stagePadding: 30,
    loop:false,
    margin:15,
	nav:false,
    dots: false,
    responsive:{
        0:{
            stagePadding: 30,
			margin:10,
            items:1
        },
        600:{
			stagePadding: 30,
			margin:15,
            items:3
        },
        1000:{
			margin:15,
            items:4
        }
    }
})

$('.timeline').owlCarousel({
	stagePadding: 30,
    loop:false,
    margin:15,
	nav:true,
    responsive:{
        0:{
			margin:15,
            items:1
        },
        600:{
			margin:15,
            items:4
        },
        1000:{
			margin:15,
            items:6
        }
    }
})



// Descubrir Slider
$('.newplace').owlCarousel({
    stagePadding: 80,
    loop:false,
    margin:30,
    responsive:{
        0:{
            stagePadding: 30,
			margin:20,
            items:1
        },
        600:{
			stagePadding: 30,
			margin:20,
            items:3
        },
        1000:{
            items:3
        }
    }
})

// Descubrir Slider
$('.icon-text-slider').owlCarousel({
    stagePadding: 80,
    loop:false,
    nav:false,
    margin:30,
    dots: false,
    responsive:{
        0:{
            stagePadding: 30,
            margin:20,
            items:1
        },
        600:{
            stagePadding: 30,
            margin:20,
            items:3
        },
        1000:{
            items:3
        }
    }
})

$('.sin-coste').owlCarousel({
    stagePadding: 30,
    loop:false,
    margin:15,
    nav:true,
    responsive:{
        0:{
            stagePadding: 30,
            margin:10,
            items:1
        },
        600:{
            stagePadding: 30,
            margin:15,
            items:3
        },
        1000:{
            margin:15,
            items:4
        }
    }
})






