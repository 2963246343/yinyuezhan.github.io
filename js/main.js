//弹窗样式
iziToast.settings({
    timeout: 10000,
    progressBar: false,
    close: false,
    closeOnEscape: true,
    position: 'topCenter',
    transitionIn: 'bounceInDown',
    transitionOut: 'flipOutX',
    displayMode: 'replace',
    layout: '1',
    backgroundColor: '#00000040',
    titleColor: '#efefef',
    messageColor: '#efefef',
    icon: 'Fontawesome',
    iconColor: '#efefef',
});

//加载完成后执行
window.addEventListener('load', function () {

    //载入动画
    $('#loading-box').attr('class', 'loaded');
    $('#bg').css("cssText", "transform: scale(1);filter: blur(0px);transition: ease 1.5s;");
    $('.cover').css("cssText", "opacity: 1;transition: ease 1.5s;");
    $('#section').css("cssText", "transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important");

    //用户欢迎
    setTimeout(function () {
        iziToast.show({
            timeout: 2500,
            icon: false,
            title: hello,
            message: '欢迎来到鬼鬼的emo音乐'
        });
    }, 800);
}, false)

setTimeout(function () {
    $('#loading-text').html("字体及文件加载可能需要一定时间")
}, 3000);

//延迟加载音乐播放器
function downloadJSAtOnload() {
    var element = document.createElement("script");
    element.src = "./js/music.js";
    document.body.appendChild(element);
}
if (window.addEventListener)
    window.addEventListener("load", downloadJSAtOnload, false);
else if (window.attachEvent)
    window.attachEvent("onload", downloadJSAtOnload);
else window.onload = downloadJSAtOnload;

//新春灯笼 （ 需要时取消注释 ）
/*
new_element=document.createElement("link");
new_element.setAttribute("rel","stylesheet");
new_element.setAttribute("type","text/css");
new_element.setAttribute("href","./css/lantern.css");
document.body.appendChild(new_element);

new_element=document.createElement("script");
new_element.setAttribute("type","text/javascript");
new_element.setAttribute("src","./js/lantern.js");
document.body.appendChild(new_element);
*/

//火狐浏览器独立样式
if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.href = './css/firefox.css';
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
    window.addEventListener('load', function () {
        setTimeout(function () {
            iziToast.show({
                timeout: 8000,
                icon: "fa-solid fa-circle-exclamation",
                message: '您正在使用火狐浏览器，部分功能可能不支持'
            });
        }, 3800);
    }, false)
}

//获取一言
fetch('https://v1.hitokoto.cn?max_length=24')
    .then(response => response.json())
    .then(data => {
        $('#hitokoto_text').html(data.hitokoto)
        $('#from_text').html(data.from)
    })
    .catch(console.error)



//获取天气
//每日限量 100 次
//请前往 https://www.tianqiapi.com/ 申请（免费）
fetch('https://www.yiketianqi.com/free/day?appid=43656176&appsecret=I42og6Lm&unescape=1')
    .then(response => response.json())
    .then(data => {
        $('#wea_text').html(data.wea)
        $('#city_text').html(data.city)
        $('#tem_night').html(data.tem_night)
        $('#tem_day').html(data.tem_day)
        // $('#win_text').html(data.win)
        // $('#win_speed').html(data.win_speed)
    })
    .catch(console.error)

//获取时间
var t = null;
t = setTimeout(time, 1000);

function time() {
    clearTimeout(t);
    dt = new Date();
    var y = dt.getYear() + 1900;
    var mm = dt.getMonth() + 1;
    var d = dt.getDate();
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var day = dt.getDay();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    //document.getElementById("time").innerHTML = y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>";
    $("#time").html(y + "&nbsp;年&nbsp;" + mm + "&nbsp;月&nbsp;" + d + "&nbsp;日&nbsp;" + "<span class='weekday'>" + weekday[day] + "</span><br>" + "<span class='time-text'>" + h + ":" + m + ":" + s + "</span>");
    t = setTimeout(time, 1000);
}

//链接提示文字
$("#social").mouseover(function () {
    $("#social").css({
        "background": "rgb(0 0 0 / 25%)",
        'border-radius': '6px',
        "backdrop-filter": "blur(5px)"
    });
    $("#link-text").css({
        "display": "block",
    });
}).mouseout(function () {
    $("#social").css({
        "background": "none",
        "border-radius": "6px",
        "backdrop-filter": "none"
    });
    $("#link-text").css({
        "display": "none"
    });
});


//更多弹窗页面
$('#openmore').on('click', function () {
    $('#box').css("display", "block");
    $('#row').css("display", "none");
    $('#more').css("cssText", "display:none !important");
});
$('#closemore').on('click', function () {
    $('#box').css("display", "none");
    $('#row').css("display", "flex");
    $('#more').css("display", "flex");
});



//移动端切换功能区
var changemore = false;
$('#changemore').on('click', function () {
    changemore = !changemore;
    if (changemore) {
        $('#rightone').attr('class', 'row menus mobile');
    } else {
        $('#rightone').attr('class', 'row menus');
    }
});


//屏蔽右键
document.oncontextmenu = function () {
    iziToast.show({
        timeout: 2000,
        icon: "fa-solid fa-circle-exclamation",
        message: '为了浏览体验，本站禁用右键'
    });
    return false;
}

//控制台输出
var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-size:12px;
color: rgb(244,167,89);
`
var styleContent = `
color: rgb(30,152,255);
`
var title1 = '笒鬼鬼'

console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)