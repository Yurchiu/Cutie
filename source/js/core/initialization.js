var article_left_margin;
var article_width;

function initialization()
{
	var back = document.getElementById('backtop')
    back.style.display ='none'
    document.onscroll = function()
    {
        if (document.documentElement.scrollTop > 100)
            back.style.display = 'block';
        else back.style.display = 'none';
    };
    back.onclick = function(){
        document.documentElement.scrollTop = 0
    }

  	article_left_margin=$(".article").css("margin-left");
  	article_width=$(".article").css("width");

  	binft(document.getElementById('binft'));

    hljs.highlightAll();

    $(document).ready(function(){$('.chaffle').chaffle();});

    displaytime();

    $("table").wrap("<div style='overflow: auto;'></div>");
    $("mjx-container[display='true']").wrap("<div style='overflow-x: auto;'></div>");

    $('img').attr("onerror","this.src='<%= theme.img_default %>';this.onerror=null");

    document.querySelectorAll('pre code').forEach((block) => {hljs.highlightBlock(block);});

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)});
    $(".tooltip").hide();

    $("#siteLoading").hide();

    colorSetting();
    specialSetting();

    if(Readdata("toolbar")==1) $(".toolbar").hide();
    if(Readdata("removevr")==1) {santaremove();natsukiremove();}
    if(Readdata("stretch")==1)
    {
        $("body").css("width","100%");
        $(".article").addClass("article-stretch");
    }
}

$(document).ready(function()
    {
        initialization();
        if(Readdata("hair")==1) AprilHair();
    });
$(document).pjax('a[target!=_blank][pjax!="no"]', '#pjax', {fragment:'#pjax', timeout:6000});
$(document).on('pjax:complete', function()
    {
        initialization();
        MathJax.typeset();
    });