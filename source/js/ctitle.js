var OriginTitile = document.title;
var titleTime;  
document.addEventListener('visibilitychange', function(){  
    if (document.hidden){  
        document.title = '震惊！cieu 竟...';  
        clearTimeout(titleTime);  
    }else{  
        document.title = '哈哈你回来了';  
        titleTime = setTimeout(function() {  
            document.title = OriginTitile;  
        }, 2000);
    }  
}); 