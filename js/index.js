$(function () {
    checkVersion();
});

$(function () {
   setTimeout(function () {
       $('.slider .welcome').addClass('current');
   }, 1000)
})
$(function () {
    $('.effect-h3').hover(function () {
        $(this).stop().animate({
            height: 80
        }, 'fast')
    }, function () {
        $(this).stop().animate({
            height: 40
        }, 'fast')
    })
})
        $(function() {
            $("img").lazyload({
                effect : "fadeIn",
            });
        })
$(function () {
    $('img').on('mousedown', function (e) {
        e.preventDefault()
    });
    setCenter();
    session();
    $(window).resize(function () {
        setCenter();
    })
})
$(function(){
    $(window).scroll(function(){
        throttle(scrollBar,window);
    })
})
$(function () {
    $('.tbf').hover(function () {
        $(this).find('ul').stop(false,true).fadeIn();
    }, function () {
        $(this).find('ul').stop(false,true).fadeOut();
    })
})
$(function () {
    $(".startTime").showCalendar({
        className: 'startDate',
        width: 200,
        icon:'.start'
    });
    $(".endTime").showCalendar({
        className: 'endDate',
        width: 200,
        icon:'.end'
    });
})
$(function(){
    iconBind('.start','.startTime');
    iconBind('.end','.endTime');
})
$(function(){
    var aPic=$('.travel-top li');
    var oPic=$('.travel-top');
    aPic.hover(function(){
        $(this).children(0).children(0).hide();
        $(this).stop().animate({'width':220})
    },function(){
           $(this).children(0).children(0).show();
       $(this).stop().animate({'width':70})
    })
})
function iconBind(iconName,domName){
    $(iconName).on('click',function(){
        $(domName).get(0).click();
    })
}
function setCenter() {
    var iImgWidth = 1920;
    var iWindwoWidth = $(window).width();
    var iOffSetLeft = (iImgWidth - iWindwoWidth) / 2
    $('.slider-pic li img').css({
        marginLeft: -iOffSetLeft
    })
}
$(function () {
    page({
        id: '#pagination',
        nowNum: 1,
        allNum: 20
    });
})
function throttle(method,context){
    clearTimeout(method.tId);
    method.tId=setTimeout(function(){
        method.call(context);
    },300);
}
function scrollBar(){
    var scrollTop=$(window).scrollTop();
    console.log(scrollTop)
    var oScrollBar=$('.tip-bar');
    var iHeight=$('.slider').offset().top+$('.slider').outerHeight();
    if(scrollTop>iHeight){
        oScrollBar.fadeIn(500);
    }else{
        oScrollBar.fadeOut(500);
    }

}
function page(options) {
    var obj = $(options.id);
    var nowNum = options.nowNum;
    var allNum = options.allNum;

    if (nowNum >= 2) {
        var oA = '<a href="#' + (nowNum - 1) + '" class="pagination-prev">上一页</a>';
        obj.append(oA);
    }
    for (var i = 1; i <= 9; i++) {
        var oA = document.createElement('a');
        $(oA).addClass('pagination-id')
        if (nowNum == 1 || nowNum == 2 || nowNum == 3 || nowNum == 4) {
            $(oA).attr('href', "#" + i);
            if (nowNum == i) {
                $(oA).addClass('pagination-now');
            }
            $(oA).html(i);
        }
        else if ((allNum - nowNum) == 0 || (allNum - nowNum == 1) || (allNum - nowNum == 2) || (allNum - nowNum == 3)) {
            $(oA).attr('href', '#' + (allNum - 9 + i));
            if ((allNum - nowNum) == 0 && i == 9) {
                $(oA).addClass('pagination-now')
            } else if ((allNum - nowNum) == 1 && i == 8) {
                $(oA).addClass('pagination-now')
            } else if ((allNum - nowNum) == 2 && i == 7) {
                $(oA).addClass('pagination-now')
            } else if ((allNum - nowNum) == 3 && i == 6) {
                $(oA).addClass('pagination-now')
            }
            $(oA).html(allNum - 9 + i);
        }
        else {
            $(oA).attr('href', '#' + ((nowNum - 5) + i));
            if (i == 5) {
                $(oA).addClass('pagination-now')
            }
            $(oA).html(nowNum - 5 + i);
        }
        obj.append(oA);
    }
    if ((allNum - nowNum) >= 1) {
        var oA = '<a href="#' + (nowNum + 1) + '" class="pagination-next">下一页</a>';
        obj.append(oA);
    }

    $('#pagination a').on('click', function () {
        var nowNum = parseInt($(this).attr('href').substring(1));
        obj.empty();
        page({
            id: options.id,
            nowNum: nowNum,
            allNum: options.allNum
        })
    })
}
$(function () {
    $('.search-tab li').on('click', function () {
        $(this).children($('i')).addClass('current').parent().siblings().children($('i')).removeClass('current');
    })
})
$(function () {
    var index = 0;
    var timer = null;
    var b = false;
    var fnSlider = function () {
        if (index >= 3) {
            index = 0;
        } else if (index <= -1) {
            index = 2;
        }
        $('.slider-pic li').hide().stop().eq(index).fadeIn('slow');
        b = false;
    }
    $('.left').on('click', function () {
        if (!b) {
            b = true;
            index++;
            fnSlider();
        }
    })
    $('.right').on('click', function () {
        if (!b) {
            b = true;
            index--;
            fnSlider();
        }
    })
    timer = setInterval(function () {
        index++;
        fnSlider();
    }, 5000);
    $('.slider').hover(function () {
        clearInterval(timer);
        $('.left').stop().animate({width: '37px'});
        $('.right').stop().animate({width: '37px'})
    }, function () {
        timer = setInterval(function () {
            index++;
            fnSlider();
        }, 5000);
        $('.left').stop().animate({width: '0'});
        $('.right').stop().animate({width: '0'})
    })
})
function ShowLoginBox() {
    $("#sPwd").val("");
    $("#sUserName").val("");
    $('.loginitem-wrong').hide();
    if($('#login_box').hasClass('show')){
        $('#login_box').removeClass('show')
        setTimeout(function(){
        $('.mask').hide();
            $('#login_box').hide();
        },300)
    }else{
        $('#login_box').show();
        $('.mask').show();
        setTimeout(function(){
                $('#login_box').addClass('show')
        },100)
    }
}
$(function (){
$('.nav-box-reg ').on('click',function(){
    $('.login-box').addClass('login-hide').siblings().removeClass('login-hide');
    ShowLoginBox();
});
    $('.nav-box-log').on('click',function(){
        $('.login-register').addClass('login-hide').siblings().removeClass('login-hide');
        ShowLoginBox();
    });
    $('.quick-login').on('click',function(){
        $('.login-register').addClass('login-hide').siblings().removeClass('login-hide');
    });
    $('.quick-reg').on('click',function(){
        $('.login-box').addClass('login-hide').siblings().removeClass('login-hide');
    });
    $('.login-register-times').on('click',function(){
        ShowLoginBox();
    })
})
$(function(){
    $('.tip-bar a').hover(function(){
       $(this).children().first().hide().next().show();
    },function(){
       $(this).children().first().show().next().hide();
    })
})
$(function(){
$('.tip-bar-icon-totop').on('click',function(){
    $('html,body').animate({scrollTop:0},1000);
        return false;
})
})
function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = /MSIE ([0-9]+[\.0-9]*)/;
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
function checkVersion() {
    var oWarming=$('.warming');
    var oClose=$('.warming span');
    var oH=$('.welcome h3');
    var oP=$('.welcome p');
    var ver = getInternetExplorerVersion();
    if (ver > -1) {
        if (ver <= 9.0)
            oWarming.show();
       oH.css('marginLeft','-108');
        oP.css('marginLeft','-78');
    };
    oClose.click(function(){
        oWarming.hide();
    })
}

function login() {
    var username = $.trim($("#sUserName").val());
    var pwd = $.trim($("#sPwd").val());
    var bUser=/^1[34578]\d{9}$/.test(username);
    if (!bUser){
        $('.loginitem-wrong').html('请填写正确的手机格式').show();
        return false;
    }
    if (bUser&&pwd!='') {
      $('.loginitem-wrong').css({color:'green'}).html('用户名密码正确<br/>正在登录...').show();
        window.sessionStorage.setItem('username',username);
        setTimeout(function(){
            ShowLoginBox();
            $('.loginitem-wrong').css({color:'#f00'});
            session();
        },1000);
    }else{
        $('.loginitem-wrong').html('请输入密码').show();
    }
}
function session(){
    var str=window.sessionStorage.getItem('username')
    if(str){
        $('.nav-box-login').hide();
        $('.nav-box-logined span').text(str);
        $('.nav-box-logined').show();
    }
}
function removeSession(){
    window.sessionStorage.removeItem('username');
    window.location.reload();
}