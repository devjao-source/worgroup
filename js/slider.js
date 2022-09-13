$(function(){

    var curSlide = 0;

    var maxSlide = $('.banner-single').length - 1;

    var delay = 3;


    initSlider();
    changeSlide();

    function initSlider()
    {
		$('.banner-single').css('opacity','0');
		$('.banner-single').eq(0).css('opacity','1');
    }

    function changeSlide(){
        setInterval( function(){
                $('.banner-single').eq(curSlide).animate({'opacity':'0'},2000);
                curSlide++;
                if(curSlide > maxSlide)
                    curSlide = 0;
                $('.banner-single').eq(curSlide).animate({'opacity':'1'},2000);
        },delay * 1000);
    }
})