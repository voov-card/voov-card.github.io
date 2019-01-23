$(document).ready(function(){
    $('.go-link').on('click',function(){
        var link = $(this).attr('data-link');
        var target = $(this).attr('data-link-target');

        if (target == "_blank"){
            window.open(link);
        }

        if (target == "_self"){
            location.href = link;
        }
    }).css('cursor','pointer');
});


function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    if (aTag.length > 0){
        $('html,body').stop().animate({scrollTop: aTag.offset().top},'slow');
    }
}