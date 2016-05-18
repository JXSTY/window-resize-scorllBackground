(function() {

    function changeBg(inOption) {
        var $showCount = $('.top-count');
        var $level2 = $('#level2');
        io = inOption/2;
        $showCount.text(io);
        if (io<740) {
            $level2.css("background-position-y", -io);
        }
    }


    $(document).ready(function() {
        var $showWinHeight = $('.window-height');
        var $windowHeight = $(window).height();
        var app = {
            oTop: document.documentElement.scrollTop || document.body.scrollTop
        }

        $showWinHeight.text($windowHeight);
        // setTimeout("$('body').scrollTop(100);",0)
        $(document).mousemove(function(e) {
            console.log("X: " + e.pageX + ", Y: " + e.pageY);
        });

        $(window).resize(function() {
            var $showWinHeight = $('.window-height');
            var $windowHeight = $(window).height();
            $showWinHeight.text($windowHeight);
        });
        // window.onscroll = function() {
        //     var oTop = document.documentElement.scrollTop || document.body.scrollTop;
        //     console.log("scrollTop=" + oTop);
        //     $showCount.text(oTop);
        //     $level2.css("background-position-y",-oTop);
        // };
        $(window).scroll(function() {
            var ld = $('#level2').offset().top //至顶部的距离
            var sd = $(document).scrollTop() //页面卷起的距离
            var wH = $(window).height();
            var bTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log("scrollTop=" + bTop);
            if (0 < ld - sd < wH) {
                changeBg(inOption = bTop);
            }
        });

    });
})();
