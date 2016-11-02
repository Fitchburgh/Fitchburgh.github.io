console.log('party time');


var $contactBtn = $('#contact-btn');

$('#contact-btn').click( function() {

  $('.pastBlogLinks').hide(500);
  $('#contact-btn').slideUp(2000);
  $('.contact-form').fadeIn(3000);
  $('.slideFeat').slideUp(2000);
  $('.twitter-stuff').slideUp(1100);
});
