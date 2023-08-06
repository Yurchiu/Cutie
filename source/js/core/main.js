function getQueryString(name) {
  const url_string = window.location.href;
  const url = new URL(url_string);
  return url.searchParams.get(name);
}
//getQueryString

function saveData(key, data) {  
    key = 'Yurchiu_' + key;  
    data = JSON.stringify(data);  
    if (window.localStorage) {  
        localStorage.setItem(key, data);  
    }  
}   
function readData(key) {  
    if (!window.localStorage) return '';  
    key = 'Yurchiu_' + key;  
    return JSON.parse(localStorage.getItem(key));  
}
//Cookie

//-------------------------main-------------------------//

function HideIt()
{
  if(readData("toolbar")==1) $(".toolbar").hide();
  if(readData("disVRecord")==1) {
    santaRemove();
    natsukiRemove();
  }
  if(readData("disAplayer")==1) metingRemove();
}

function hideBars()
{
  $(".toolbar").hide();
  $(".sidebar").hide();
  $(".fake-sidebar").hide();
  $(".hideBars").hide();
  $(".showBars").show();
  $(".article").css("margin-left","0");
  $(".footer").css("margin-left","0");
  $(".article").css("width","100%");
  HideIt();
}

function showBars()
{
  $(".toolbar").show();
  $(".sidebar").show();
  $(".fake-sidebar").show();
  $(".hideBars").show();
  $(".showBars").hide();
  $(".article").css("margin-left",article_left_margin);
  $(".footer").css("margin-left",article_left_margin);
  $(".article").css("width",article_width);
  HideIt();
}

function topbarToggle() {
  $('.sidebar').toggleClass('sidebar-display');
  $('.santa-container').toggleClass('appear');
  $('.natsuki-container').toggleClass('appear');
  $('meting-js').toggleClass('appear');
  HideIt();
}

function santaColorEgg() {
  $(".santa").attr("onclick","santaRemove()");
  $(".santa-body").attr("style","font-size: 500px;");
}
function metingRemove() {
  $("meting-js").removeClass("appear");
  $("meting-js").hide();
}
function santaRemove() {
  $(".santa-container").removeClass("appear");
  $(".santa-container").hide();
}
function natsukiRemove() {
  $(".natsuki-container").removeClass("appear");
  $(".natsuki-container").hide();
}
//santa

//-------------------------hide and show-------------------------//

function changePPT(ppt)
{
  var len = document.querySelector("#"+ppt);
  var width = parseFloat(window.getComputedStyle(len, null).getPropertyValue('width'));
  len.style.height = width * 0.5757 + "px";
  var width_srceen = screen.width;
  var new_window_width = $(window.frames[ppt]).width();
  var multiple =new_window_width / width_srceen;
  let block=window.frames[ppt].document.querySelectorAll(":not(.poser)");
  for (var i = 0; i < block.length; i++) {
    var style = parseFloat(window.getComputedStyle(block[i], null).getPropertyValue('font-size'));
    var hi = style * multiple;
    block[i].style.fontSize=hi+"px";
    style = parseFloat(window.getComputedStyle(block[i], null).getPropertyValue('padding'));
    hi = style * multiple;
    block[i].style.padding=hi+"px";
  }
}
function recoverPPT(ppt){window.frames[ppt].location.reload();}
//Simple-PPT

function Fool()
{
    if (!readData("fool")) {
    document.body.classList.add('reverse-coloregg');
    window.setTimeout(function () {
        saveData("fool", "fool");
        document.body.classList.remove('reverse-coloregg');  
        }, 10000);
    } 
}
//April-Fool

function AprilHair() {
  /***
    * 愚人节彩蛋 - 你屏幕上有根毛
    * 出处：https://www.baidu.com/s?ie=UTF-8&wd=%E6%84%9A%E4%BA%BA%E8%8A%82
    * 整理：mengkun https://mkblog.cn/
    */
  var bottom = Math.floor(60 * Math.random()),
      right = Math.floor(50 * Math.random()),
      rotate = Math.floor(360 * Math.random());
  var foolsEgg = document.createElement("img");
  foolsEgg.src = "/img/hair.png";
  foolsEgg.style.position = "fixed"; 
  foolsEgg.style.bottom = "".concat(bottom, "%");
  foolsEgg.style.right = "".concat(right, "%"); 
  foolsEgg.style.zIndex = "9999"; 
  foolsEgg.style.pointerEvents = "none";
  foolsEgg.style.width = "40%";
  foolsEgg.style.maxWidth = "190px";
  foolsEgg.style.transform = "".concat("rotate(", rotate, "deg)"); 
  document.body.append(foolsEgg);
}

function colorSetting (o = 0) {
  type = readData("color");
  if(o) type = o;
  if(type==2) $("html").addClass("color-std");
  else if(type==3) $("html").addClass("color-white");
  else if(type==4) $("html").addClass("color-night");
  else if(type==5) $("html").addClass("color-trans");
}

function specialSetting (o = 0) {
  type = readData("special");
  if(o) type = o;
  if(type==2) $("html").addClass("grayscale");
  else if(type==3) $("html").addClass("invert");
  else if(type==4) $("html").addClass("blur");
}

function consolePrint () {
  console.log("\n %c Theme cutie ©2020-2023 %c by Yurchiu | yz-hs.github.io ","color:#444;background:#eee;padding:5px 0;","color:#eee;background:#444;padding:5px;");
}

function Stretch () {
  $("body").css("width","100%");
  $(".article").addClass("article-stretch");
}

function Setting () {
  colorSetting();
  specialSetting();
  HideIt();
  if(readData("stretch") == 1) Stretch();
}