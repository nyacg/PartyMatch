$(document).ready(function(){
	$.get('../getPolicy.php', function(data){
		console.log($.parseJSON(data));
	});
});

function zoomIn(){
	console.log("click, not dragged");
	
}