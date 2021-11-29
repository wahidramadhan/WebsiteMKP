//parallax
// about
$(window).on('load',function(){
	$('.visit').addClass('pMuncul');
	$('.visit1').addClass('pMuncul');
});

$(window).scroll(function(){
	var wScroll=$(this).scrollTop();


//lookbook
	if(wScroll> $('.galeri').offset().top-60 ){
		$('.galeri .thumbnail').each(function(i){
			setTimeout(function(){
				$('.galeri .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});

		
	}

});	

