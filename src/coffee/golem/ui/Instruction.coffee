class Instruction


	@show:()->
		TweenLite.to(".instruction", 1, {force3D:true, css:{opacity:"1"}, ease:Quad.easeOut});
		return

	@hide:()->
		TweenLite.to(".instruction", 1, {force3D:true, css:{opacity:"0"}, ease:Quad.easeOut});
		return