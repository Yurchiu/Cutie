var article_left_margin;
var article_width;

function initialization()
{
	var back = document.getElementById('backtop');
    back.style.display ='none';
    document.onscroll = function()
    {
        if (document.documentElement.scrollTop > 100)
            back.style.display = 'block';
        else back.style.display = 'none';
    };
    back.onclick = function(){
        document.documentElement.scrollTop = 0;
    }

  	article_left_margin=$(".article").css("margin-left");
  	article_width=$(".article").css("width");

    hljs.highlightAll();

    $(function(){$('.chaffle').chaffle();$("#siteLoading").hide();});

    displaytime();

    $("table").wrap("<div style='overflow: auto;'></div>");
    $("mjx-container[display='true']").wrap("<div style='overflow-x: auto;'></div>");

    document.querySelectorAll('pre code').forEach((block) => {hljs.highlightBlock(block);});

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)});
    $(".tooltip").hide();

    Setting();
}

$(document).pjax('a[target!=_blank][pjax!="no"]', '#pjax', {fragment:'#pjax', timeout:6000});
$(document).on('pjax:send', function() {$("#siteLoading").show();});
$(document).on('pjax:complete', function() {$("#siteLoading").hide();});