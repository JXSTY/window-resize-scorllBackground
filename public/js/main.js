(function() {
    $(document).ready(function() {
        var $level2 = $('#level2');
        var $showCount = $('.top-count');

        var $showWinHeight = $('.window-height');
        var $windowHeight = $(window).height();
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
            var oTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log("scrollTop=" + oTop);
            $showCount.text(oTop);
            $level2.css("background-position-y",-oTop);
        });

    });
})();
