function initial()
{
    document.getElementById('back2Top').onclick = function(){
        document.documentElement.scrollTop = 0;
    }
    document.getElementById('back2Down').onclick = function(){
        document.documentElement.scrollTop = 1145141919810;
    }

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