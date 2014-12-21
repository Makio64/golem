class Title


	@show:()->
		TweenLite.to("#img", 1, {force3D:true, css:{opacity:"1"}, ease:Quad.easeOut});
		TweenLite.to(".loaderBg", .5, {force3D:true,css:{scaleX:"1"}, ease:Quad.expoEaseOut});
		return

	@hide:()->
		TweenLite.to("#img", 1, {force3D:true, css:{opacity:"0", delay:.2}, ease:Quad.easeOut,onComplete:@dispose});
		TweenLite.to(".loaderBg", .5, {force3D:true,css:{scaleX:"1.5", opacity:"0"}, ease:Quad.expoEaseOut});
		TweenLite.to(".loaderBar", .5, {force3D:true,css:{scaleX:"1.5", opacity:"0"}, ease:Quad.expoEaseOut});
		return

	@setPercent:(value)->
		TweenLite.to(".loaderBar", .5, {css:{scaleX:value}, ease:Quad.expoEaseOut});
		return

	@dispose:()->
		@domContainer = document.getElementById('title')
		@domContainer.parentElement.removeChild(@domContainer);
		return