$(document).ready( function() {
    $('.slider').slick({
        arrows:false,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        easing:'linear',
        infinite:true,
        autoplay:false,
        autoplaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipr:true,
        tiuchThreshold:5,
        touchMove:true,
        waitForAnimate:true,
        centerMode:false,
        varianleWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
    $('.menu__btn').click(function(event){
            $('body').toggleClass('lock');
    });
});
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }