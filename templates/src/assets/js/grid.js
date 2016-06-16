$(function(){
   'use strict';
//1) When hovering over list item (.iconList):
//      - background-color changes
//      - bottom padding?margin?height changes
//      - text areas switch spots
//      - new text category displays
//2) easily replace icons and text updates
//3) add input to allow user to pick icon
//
//
//
var color = 'lightblue';
var hover = 'white';


//On hover, whichever (this) selection, change background, change back after hover stops
//reference pg. 335 in jon duckett's javascript and jquery book to help with the animation
//.animate({spead, easing, complete})

$('.iconList').hover( function onhover() {            //on hover
  $('.fa').animate({'padding-bottom': '1em'}, 500)    //move border down
            .css('color', hover)                      //change fa color
            .css('border-color', hover);              //change border color
  $(this).css('background-color', color)              //change background , this = .iconList
      .next($('.h2title').animate({
                            top: '3em'
                          }, 500)
                          .css('color', hover)
            );
}, function offhover() {
  $('.fa').animate({'padding-bottom': '.5em'}, 500)
          .css('color', color)
          .css('border-color', color);
  $(this).css('background-color', hover)
  .next($('.h2title').animate({
                top: '5em'
              }, 500)
            .css('color', color));
});


  $('.iconList').hover( function onhover(){
    $('.h4title').animate({
                          bottom: '2em'
                        }, 500)
                        .css('color', hover);
  }, function offhover() {
    $('.h4title').animate({
                          bottom: '1em'
                        }, 500)
                        .css('color', color);
  });



  // $('.h2title').addClass(function(h2){
  //   var counter = 0;
  //   for (i=0; i<h2.length; i++) {
  //     // $('.h2title'[i]).addClass(counter + 1);
  //   }
  // });




//display icon name
// $('.fa').each(function one() {
//   $('i').attr('class').toString().split(' ');
//     console.log(one);
//     // $.each(names, function (i, name){
//     //   console.log(name);
//     // });
// });

        // $(".iconList").click(function(){
        //     $("i").removeClass("fa-gitlab");
        // });

// var fa = $('.fa');
// var h2 = $('.h2title');
// $(function getTitle() {
//   for (t=0; t<h2.length; t++){
//     $('i'[t]).attr("class").toString().split(' ');
//     console.log(getTitle);
//
//         // $.each(classNames, function (i, className) {
//         //     console.log(className);
//         // });
//   }
//
// });


}); //use strict
