$(document).ready(function(){
    'use strict';

    $(window).scroll(function(){
        var nav=$('.navbar');

        if($(this).scrollTop() >= nav.height()){
            if(!nav.hasClass('scrolled navbar-fixed-top')){
            nav.addClass('scrolled navbar-fixed-top')
        }
        }else{
            nav.removeClass('scrolled navbar-fixed-top')
        }
    })


    $('.tabs .tap-switch li').click(function(){
        $(this).addClass('activ').siblings().removeClass('activ');

        $('.content-list > div').hide();

        $('.'+ $(this).data('tap')).show(400)
    })

    $('.option  .choose-one').hover(function(){
$(' .option .protocols1').css('backgroundColor','#333')

$('.option .protocols1 ul li').css(
'color','#fff' )
    },function(){
        $(' .option .protocols1').css('backgroundColor','#fff')

$('.option .protocols1 ul li').css(
'color','gray' )
    })


    $('.option  .choose-tow').hover(function(){
        $(' .option .protocols2').css('backgroundColor','#333')
        
        $('.option .protocols2 ul li').css(
        'color','#fff' )
            },function(){
                $(' .option .protocols2').css('backgroundColor','#fff')
        
        $('.option .protocols2 ul li').css(
        'color','gray' )
            })

            $('.option  .choose-therr').hover(function(){
                $(' .option .protocols3').css('backgroundColor','#333')
                
                $('.option .protocols3 ul li').css(
                'color','#fff' )
                    },function(){
                        $(' .option .protocols3').css('backgroundColor','#fff')
                
                $('.option .protocols3 ul li').css(
                'color','gray' )
                    })

                    $(window).scroll(function(){
                        if ($(window).scrollTop() >= 700 ){
$('.up').fadeIn(400)
                        }else{
                            $('.up').fadeOut(400)
                        }
                    })

                    $('.up .fa-chevron-circle-up').click(function(){
                        $('html,body').animate({
                            scrollTop:0
                        },1000)
                    })

                    $(window).on('load',function(){
                        $('.sk-chase').fadeOut(1000,function(){
                            $('body').css('overflow','auto')
                            $(this).parent().fadeOut(1000,function(){
                                $(this).remove()
                            })
                        })
                    })

                    $('html').niceScroll({
                        cursorwidth: '15px',
 autohidemode: false,
  zindex: 999,
  cursorcolor:'#DB6400' 

                    })
})


