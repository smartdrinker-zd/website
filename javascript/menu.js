$(document).ready(function() {
  $('.fa-bars').click(function(){
      $('ul').slideToggle();
      $('ul ul').css('display', 'none');
  });

  $('ul li').click(function(){
      $('ul ul').slideUp();
      $(this).find('ul').slideToggle();
  });

  $(window).resize(function(){
    if($(window).width() > 500){
      $('ul').removeAttr('style');
    }
  });

});
