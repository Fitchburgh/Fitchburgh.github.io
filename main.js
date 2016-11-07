console.log('party time');


var $contactBtn = $('#contact-btn');
var $hideContactBtn = $('#hide-contact-btn');


$('#contact-btn').click(function() {
  $('.pastBlogLinks').hide(500);
  $('#contact-btn').slideUp(2000);
  $('.contact-form').fadeIn(3000);
  $('.slideFeat').slideUp(2000);
  $('.twitter-stuff').slideUp(1100);
});

$('#hide-contact-btn').click(function() {
  $('.pastBlogLinks').fadeIn(3000);
  $('#contact-btn').slideDown(3000);
  $('.contact-form').fadeOut(1500);
  $('.blog-list').fadeIn(2500);
  $('.slideFeat').slideDown(2000);
  $('.twitter-stuff').fadeIn(1500);
  $('.twitter-follow-button').fadeIn(1500);
});
