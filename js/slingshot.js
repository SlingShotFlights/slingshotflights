
$('.expand').click(function(){
  if($(this).parent().next().find('.answer').hasClass('answer-show')) {
    $(this).parent().next().find('.answer').removeClass('answer-show');
    $(this).html('&#43;');
  } else {
    $(this).parent().next().find('.answer').addClass('answer-show');
    $(this).html('&#8722;');
  }
});

$('.expand-p').click(function(){
  if($(this).next().hasClass('answer-show')) {
    $(this).next().removeClass('answer-show');
    $(this).parent().prev().children().html('&#43;');
  } else {
    $(this).next().addClass('answer-show');
    $(this).parent().prev().children().html('&#8722;');
  }
});

$('.hamburger').click(function() {
  if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $('.overlay').removeClass('show');
    $('body').removeClass('stop-scrolling');
    $('body').unbind('touchmove');
  } else {
    $(this).addClass('active');
    $('.overlay').addClass('show');
    $('body').addClass('stop-scrolling');
    $('body').bind('touchmove', function(e){e.preventDefault()});
  }
});
