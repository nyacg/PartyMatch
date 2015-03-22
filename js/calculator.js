$(document).ready(function(){
	var mydata;
	$.get('./getPolicy.php', function(data){
		mydata = data.toArray();
		console.log(mydata);
	}, "json").fail(function(){
		console.log("getting data failed");
	});
	var function getScore(responseArray){
		var currentScore;
		for (var i = responseArray.length - 1; i >= 0; i--) {
			for (var i = mydata.length - 1; i >= 0; i--) {
				if (mydata[i].[12] == responseArray[i][1]){
					for (var i = mydata[i].length - 3; i >= 0; i--) {
						console.log(mydata[i][i]);
					};
					//currentScore += mydata.[i] * responseArray[0];
				};
			};
		};
	}
});