(function() {
    $(document).ready(function() {
				// setTimeout("$('body').scrollTop(100);",0)
        $(document).mousemove(function(e) {
          console.log("X: " + e.pageX + ", Y: " + e.pageY);
        });

				// window.onscroll＝function(e) {
				// 	console.log("scrollTop="+e.scrollTop);
				// };
				
				window.onscroll = function () {
				  var top = document.documentElement.scrollTop || document.body.scrollTop;
					console.log("scrollTop="+top);
				};
				// $(".btn1").click(function(){
				//  	$("body").scrollTop(100);
				// 	});
    });
})();
