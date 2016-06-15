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

$('.iconList').hover( function onhover() {
  $(this).css('background-color', color);
}, function offhover() {
  $(this).css('background-color', hover);
});

//display icon name
// $('.h3title')



}); //use strict
