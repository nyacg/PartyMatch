var responseMap = new Map();
var current_pane;

var parties = {con: {name: "Conservative", color: "#2C3E50"}, lab: {name: "Labour", color: "#E74C3C"}, lib : {name: "Liberal Democrats", color: "#F1C40F"}};

$(document).ready(function(){
	$.get('./getPolicy.php', function(data){
		console.log(data);

		$.each(data, function(index, object){
			index = index + 1;
			//console.log(index);
			//console.log(object);
			$('#pane-holder').append("<li class='pane" + index + " pane' slug=" + object.Slug + "><div class='img'></div><div>" + object.PolicyName + "</div><div class='like'></div><div class='dislike'></div></li>").children(".img");
			$('.pane' + index + '> .img').css({"background": "url('./img/pane/pane" + index + ".jpg') no-repeat scroll center center", "background-size": "cover"});
		});

		/**
		 * jTinder initialization
		 */
		$("#tinderslide").jTinder({
			// dislike callback
		    onDislike: function ($item) {
		    	var slug = $item.attr('slug');
		        //var obj = {};
		        //obj[slug] = -1;
		        responseMap.set(slug, -1);
		        getScore(responseMap);
		    },
			// like callback
		    onLike: function ($item) {
		    	var slug = $item.attr('slug');
		        responseMap.set(slug, 1);
		        getScore(responseMap);
		    },
			animationRevertSpeed: 200,
			animationSpeed: 400,
			threshold: 1,
			likeSelector: '.like',
			dislikeSelector: '.dislike'
		});

		/**
		 * Set button action to trigger jTinder like & dislike.
		 */
		$('.actions .like, .actions .dislike').click(function(e){
			e.preventDefault();
			$("#tinderslide").jTinder($(this).attr('class'));
		});

	}, "json").fail(function(){
		console.log("getting data failed");
	});

	$('.skip').click(function(){
		var $this = $('.pane').not('.hidden').last();
		slug = $this.attr('slug');
		console.log(slug);
		var index = $this.eq();

		$this.hide();
		$this.addClass('hidden');
		var obj = {};
		obj[slug] = 0;
		responseArray.push(obj);
		getScore(responseArray);
	});



});

function zoomIn(){
	console.log("click, not dragged");
}

function handleLast(){
	console.log("last");
	$('.top-colour').css('background-color', parties.con.color);
	$('.party-name').text(parties.con.name);
	$('.bigcard').show();
}