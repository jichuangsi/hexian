// window.onload = function () {
setHTML();
// OSnow();

        // var u = navigator.userAgent;
        // var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        // var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        // // alert('是否是Android：'+isAndroid);
        // // alert('是否是iOS：'+isiOS);
        // if(isAndroid){
        //     alert('12123')
        //     // document.write("<link rel='stylesheet' href='./assets/style/reset_android.css'>")
        // }else if(isiOS){
        //     alert('23132123')
        //     // document.write("<link rel='stylesheet' href='./assets/style/reset_ios.css'>")
        // }

        
// 为了在pc端更好的去调试
// resize 事件 表示调整大小触发事件
onresize = function () {
setHTML();
var url = window.location.href
if(url.indexOf('index') != -1 || url.indexOf('product')){
        let w = window.innerWidth
        let h = window.innerHeight
    if(w>=1200){
        $('.imgList').css('height',h+'px')
        $('.imgList>li').css('height',h+'px')
        // $('.imgList>li').find('img').css('height',h+'px')
    }else{
        $('.imgList').css('height','635px')
        $('.imgList>li').css('height','635px')
        // $('.imgList>li').find('img').css('height','635px')
    }
}
}

function setHTML() {
// 基础值
const baseVal = 100;
// 设计稿的宽度
const pageWidth = 1920;
// 要适配的屏幕的宽度
let screenWidth = document.querySelector("html").offsetWidth;
// 要设置的fontsize
let fontsize = screenWidth * baseVal / pageWidth;

// 设置到html标签的中
document.querySelector("html").style.fontSize = fontsize + "px";

}
// function OSnow(){
//     var agent = navigator.userAgent.toLowerCase();
//     var isMac = /macintosh|mac os x/i.test(navigator.userAgent);
//     if (agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0) {
//       }
//     if (agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0) {
//     }
//     if(isMac){
//         document.write("<link rel='stylesheet' href='../style/reset_mac.css'>")
//     }
//   }
// }