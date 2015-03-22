var mydata;
var translate = new Map();

var fileRob = {"globalTaxAvoidanceInfoExchange" : 1, "jobseecerAllowance" : -1};

$(document).ready(function(){
	translate.set('Aliance', "Alliance");
	translate.set('Con', "Conservative");
	translate.set('DUP', "Democratic Unionist");
	translate.set('Green', "Green");
	translate.set('Ind', "Independent");
	translate.set('Lab', "Labour");
	translate.set('LDem', "Liberal Democrat");
	translate.set('PC', "Plaid Cymru");
	translate.set('Res', "Respect");
	translate.set('SDLP', "Social Democratic and Labour Party");
	translate.set('SNP', "Scottish National Party");	
	$.get('./getPolicy.php', function(data){
		mydata = data;
		console.log(mydata);
	}, "json").fail(function(){
		console.log("getting data failed");
	});
});
function getScore(sentFromRob){
	//console.log(sentFromRob);
	var score = 0;
	var scoreParty = new Map();
	var agreed = new Array();
	for (var key of translate.keys()){
		for(var responce of sentFromRob.keys()){
			for(var i = mydata.length - 1; i >0; i--){
				if(mydata[i]['Slug'] == responce){
					score += (sentFromRob.get(responce) * mydata[i][key]);
				}
			}
		}
		scoreParty.set(translate.get(key), score);
		score = 0;
	}
	console.log(scoreParty);

	if($('.pane').not('.hidden').size() == 1){
		//console.log("soidjf");
		handleLast(scoreParty);
	}
}