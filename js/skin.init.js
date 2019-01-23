$(document).ready(function(){

    //媛ㅻ윭由� init
    gallery();

    // 媛ㅻ윭由� �섎윭蹂닿린
    $('.gallery_anchor').click(function(){
        scrollToAnchor('section-gall');
    });

    $('.bgm').find('img').click(function(){
        bgm_player();
    });
});

function bgm_player() {
    var bgm = document.getElementById("bgm");

    if (bgm.paused) {
        bgm.play();
        $(".bgm").find('img').attr("src","/images/common/bgm_on.png");
    } else {
        bgm.pause();
        $(".bgm").find('img').attr("src","/images/common/bgm_off.png");
    }
}

// 媛ㅻ윭由�
function gallery()
{
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 3,
        onTap : function(swiper, event){
            $('#gallery-layer').css('visibility', 'visible');
            galleryLayerThumbs.slideTo(swiper.activeIndex,0,true);
        }
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        nextButton: '.swiper-button-top',
        prevButton: '.swiper-button-btm',
        spaceBetween: 10,
        slidesPerView: 3,
        touchRatio: 0.2,
        loop:true,
        loopedSlides: 3,
        slideToClickedSlide: true,
        direction: 'vertical'
    });

    var galleryLayerThumbs = new Swiper('.gallery-layer-thumbs', {
        spaceBetween: 10,
        loop:true,
        loopedSlides: 3
    });

    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

    $('#gallery-layer').find('.close').click(function(){
        galleryTop.slideTo(galleryLayerThumbs.activeIndex,0,true);
        galleryThumbs.slideTo(galleryLayerThumbs.activeIndex,0,true);
        $(this).parent().css('visibility', 'hidden');
    });
}