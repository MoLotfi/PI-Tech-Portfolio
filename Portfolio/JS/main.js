$(function(){
'use strict';

/*Nav Bar*/

$('.toggle').on('click', function(){

if($('.item').hasClass('active')===true){
    $('.item').removeClass('active');
}
else {
    $('.item').addClass('active');
}
if($('.toggle .A').hasClass('left')===true){
    $('.toggle .B').removeClass('left');
$('.toggle .A').removeClass('left');
$('.toggle .C').removeClass('left');
}
else{
    $('.toggle .B').addClass('left');
$('.toggle .A').addClass('left');
$('.toggle .C').addClass('left');
}


});
$(window).scroll(function(){

if($(window).scrollTop()+$(window).height()>$('.footer').offset().top+$('.footer').height()/2){
$('.footer .foot').addClass('active');

}
if($(window).scrollTop()+$(window).height()>$('.service h2').offset().top+$('.service h2').height()+100){
$('.service h2').addClass('active');
$('.service .stand').addClass('active');


}

if($(window).scrollTop()+$(window).height()>$('.skills').offset().top+$('.skills').height()){
    $('.progressBarValue:first-child').addClass('active');
   
    
    
    
    }


if($(window).scrollTop()+$(window).height()>$('.clean-code').offset().top+$('.clean-code').height()/2){
$('.clean-code').addClass('active');
$('.code').addClass('active');



}
if($(window).scrollTop()+$(window).height()>$('.responsive').offset().top+$('.responsive').height()/2){
$('.responsive').addClass('active');
$('.design').addClass('active');



}
if($(window).scrollTop()+$(window).height()>$('.user-friend').offset().top+$('.user-friend').height()/2){
$('.user-friend').addClass('active');
$('.sit').addClass('active');



}
if($(window).scrollTop()+$(window).height()>$('.wordpress').offset().top+$('.wordpress').height()/2){
$('.wordpress').addClass('active');




}
/*if($(window).scrollTop()>$('nav').innerHeight()){
 $('nav').addClass('sticky');
    

}*/
if($(window).scrollTop()>300){
    $('#up').removeClass('sleep');
    $('#up').addClass('active');
    

}

else{
    $('#up').removeClass('active');
    $('#up').addClass('sleep');
}


    if($(window).scrollTop() + $(window).height() > $('.features .skills').offset()){

   $('.features .skills').addClass('active');
}

if($(window).scrollTop() + $(window).height()/2 > $('.service').offset()) {

   $('.service .section').addClass('active');
}


});


$('#up').on('click', function(){

$('html, body').animate({scrollTop:0},0);


});

$('.top-page .arrow .fa.fa-arrow-down').click(function(){

$('html, body').animate({scrollTop:$('.our-skills').offset().top-8},750);

});




/*Adjust Top-page*/

$('.top-page').css('margin-top',$('nav').innerHeight()) ;

/*Typer*/
var typed =new Typed('.type', {

    strings: ['Affordable','Creative', 'Professional'],
typeSpeed: 200,
    loop: true,
    backspeed: 100

});


});
/*Particles*/

$(function(){

const particlesJSON = {
    "particles": {
        "number": {
            "value": 50, //change br2t
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#FFD700"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#FFD700"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
            "enable": false,
            "speed": 1,
         "opacity_min": 0.2,
             "sync": false
      }
        },
        "size": {
            "value": 30, //changed
            "random": true,
            "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
        },
        "line_linked": {
            "enable": true, //changed
            "distance": 300,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6, //changed
            "direction": "none", //chaged
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" //changed
                    
                
            },
            "onclick": {
                "enable": true, //changed
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 240,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

particlesJS("particles-js", particlesJSON)
});
/*End of Particles*/



 $(".loading").ready(
    function () {
        setTimeout(function () {
            $(".loading").fadeOut();

        }, 2500);
    });
/* end loading*/









