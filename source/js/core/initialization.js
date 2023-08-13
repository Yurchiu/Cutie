var article_left_margin;
var article_width;

function initialization()
{
	var back = document.getElementById('back2Top');
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

  	article_left_margin = $(".article").css("margin-left");
  	article_width = $(".article").css("width");

    hljs.highlightAll();

    $(".chaffle").chaffle();
    $("#YurLoading").hide();
    $("table").wrap("<div style='overflow: auto;'></div>");
    $("meting-js").addClass("appear");

    document.querySelectorAll('pre code').forEach((block) => {hljs.highlightBlock(block);});

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)});
    $(".tooltip").hide();

    Setting();
}

$(document).pjax('a[target!=_blank][pjax!="no"]', '#article-container', {fragment:'#article-container', timeout:6000});
$(document).on('pjax:send', function() {$("#YurLoading").show();});
$(document).on('pjax:complete', function() {$("#YurLoading").hide();});