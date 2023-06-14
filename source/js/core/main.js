function getQueryString(name) {
  const url_string = window.location.href;
  const url = new URL(url_string);
  return url.searchParams.get(name);
}
//getQueryString

function Savedata(key, data) {  
    key = 'Yurchiu_' + key;  
    data = JSON.stringify(data);  
    if (window.localStorage) {  
        localStorage.setItem(key, data);  
    }  
}   
function Readdata(key) {  
    if (!window.localStorage) return '';  
    key = 'Yurchiu_' + key;  
    return JSON.parse(localStorage.getItem(key));  
}
//Cookie

//-------------------------main-------------------------//

function hidetoolbar()
{
  $(".toolbar").hide();
  $(".sidebar").hide();
  $(".hidetoolbar").hide();
  $(".showtoolbar").show();
  $(".article").css("margin-left","0");
  $(".footer").css("margin-left","0");
  $(".article").css("width","100%");
}

function showtoolbar()
{
  $(".toolbar").show();
  $(".sidebar").show();
  $(".hidetoolbar").show();
  $(".showtoolbar").hide();
  $(".article").css("margin-left",article_left_margin);
  $(".footer").css("margin-left",article_left_margin);
  $(".article").css("width",article_width);
}//hide and show

function changeppt(ppt)
{
  var len=document.querySelector("#"+ppt);
  var width=parseFloat(window.getComputedStyle(len, null).getPropertyValue('width'));
  len.style.height=width*0.5757+"px";
  var width_srceen = screen.width;
  var new_window_width = $(window.frames[ppt]).width();
  var multiple =new_window_width/width_srceen;
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
function recoverppt(ppt){window.frames[ppt].location.reload();}
//Simple-PPT

function Fool()
{
    if (!Readdata("fool")) {
    document.body.classList.add('reverse-coloregg');
    window.setTimeout(function () {
        Savedata("fool", "fool");
        swal.fire("提示","你可以正常访问 Blog 啦！你还可以通过删除 Cookie 再体验一次！呵呵^_^");
        document.body.classList.remove('reverse-coloregg');  
        }, 10000);
    } 
}
//April-Fool

function santacoloredegg() {
  $(".santa").attr("onclick","santaremove()");
  $(".santa-body").attr("style","font-size: 500px;");
  swal.fire("注意","由于你触碰了圣诞老人，他快气炸了！\n若再触碰，他就会炸的 qwq！");
}
function santaremove() {
  document.getElementById("santa-colored-egg").innerHTML = "";
  swal.fire("注意","圣诞老人已气炸。 R.I.P.");
}
//santa

function topbartoggle() {
  $('.sidebar').toggleClass('sidebar-display');
  $('.santa-container').toggleClass('appear');
  $('.natsuki-container').toggleClass('appear');
}
//hide


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

function colorSetting () {
    type = Readdata("color");
    if(type==2) $("html").addClass("color-std");
    else if(type==3) $("html").addClass("color-white");
    else if(type==4) $("html").addClass("color-night");
    else if(type==5) $("html").addClass("color-trans");
}

function specialSetting () {
    type = Readdata("special");
    if(type==2) $("html").addClass("grayscale");
    else if(type==3) $("html").addClass("invert");

}