var mydata;
var translate = new Map();


//Need data structure like one below !
var theThing = {Slug: "globalTaxAvoidanceInfoExchange", Aliance: 1, Con: -1};
var theThing2 = {Slug: "increaseIncomeTax", Aliance: 1, Con: 1};
var dataStructure = [theThing, theThing2];
console.log(theThing);
//End data structure

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
function getScore(responseArray){
	var score = 0;
	var scoreParty = new Map();
	var agreed = new Array();
	for (var i = responseArray.length - 1; i >= 0; i--) {
		for (var k = mydata.length - 1; k >= 0; k--) {
			if (responseArray[i].Slug == mydata[k].Slug) {
				for (var key in responseArray[i]) {
					if(key != 'Slug'){
						score += (responseArray[i][key] * mydata[k][key]);
						scoreParty.set(key, score);
						if(responseArray[i][key] * mydata[k][key] > 0.5){
							agreed.push(responseArray[i]['Slug']);
						}
					}
				};
				score = 0;
			};
		};
	//example of getting score of party
	console.log(scoreParty.get("Con"));
	console.log(agreed);
	//how to get all scores
	for (var key of scoreParty.keys()) {
  		console.log(translate.get(key), scoreParty.get(key));
	}
	return scoreParty;
	};
}