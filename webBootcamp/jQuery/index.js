'use strict'

$("h1").addClass('big-title');
// document.querySelector('h1').style.color = 'green';
// $('h1').removeClass('margin-50');
console.log($('img').attr('src'));
$('a').attr('href', 'https://yahoo.com');
$('a').text('search');

$('button').click(function() {
   $('h1').css("color", "purple");
})

// $(document).keydown(function(event) {
// $('h1').text(event.key);
//    console.log(event.key);
// })
