$('.cebu').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
			
//スムーズスクロール
$('.btn-home').on('click',function(){
	$('body,html').animate({scrollTop:0},1000);
});

// $(function(){
//    $('a[href^="#"]').click(function() {
//       var href= $(this).attr("href");
//       var target = $(href == "#" || href == "" ? 'html' : href);
//       var position = target.offset();
//       $('body,html').animate({scrollTop:position}, 400, 'swing');
//       return false;
//    });
// });