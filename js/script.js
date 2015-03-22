$(document).ready(function(){
	$.get('./getPolicy.php', function(data){
		console.log(data);

		$.each(data, function(index, object){
			index = index + 1;
			//console.log(index);
			//console.log(object);
			$('#pane-holder').append("<li class='pane" + index + " pane'><div class='img'></div><div>" + object.PolicyName + "</div><div class='like'></div><div class='dislike'></div></li>").children(".img");
			$('.pane' + index + '> .img').css({"background": "url('./img/pane/pane" + index + ".jpg') no-repeat scroll center center", "background-size": "cover"});
		});

		/**
		 * jTinder initialization
		 */
		$("#tinderslide").jTinder({
			// dislike callback
		    onDislike: function (item) {
			    // set the status text
		        //$('#status').html('Dislike image ' + (item.index()+1));
		        console.log(item);
		    },
			// like callback
		    onLike: function (item) {
			    // set the status text
		        //$('#status').html('Like image ' + (item.index()+1));
		        console.log(item);
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

});

function zoomIn(){
	console.log("click, not dragged");
}