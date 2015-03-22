$(document).ready(function(){
	$.get('./getPolicy.php', function(data){
		console.log(data);
	}, "json").fail(function(){
		console.log("getting data failed");
	});
});

function zoomIn(){
	console.log("click, not dragged");
	
}