var socket = io.connect();
$(function(){
$("#show").bind('touchstart', function(e){
	$(this).html("<h2>⊂ミ⊃＾ω＾ ）⊃　ｱｳｱｳ!!</h2>");
	e.preventDefault();
});


$("#show").bind('touchend', function(e){
	$(this).html("<h2>(´・ω・｀)</h2>");
});
});
