#---------------------------------------------------------- Global var

main = null

#---------------------------------------------------------- Class Main

class Main

	dt 				: 0
	lastTime 		: 0
	pause 			: false

	constructor:()->
		@pause = false
		@lastTime = Date.now()
		window.focus()
		Stage3d.init({transparent:false,antialias:true, background:0x0000FF})
		
		SceneTraveler.to( new LoaderScene() )

		requestAnimationFrame( @update )
		return

	update:()=>
		t = Date.now()
		dt = t - @lastTime
		@lastTime = t

		if @pause then return

		# update logic here
		SceneTraveler.update(dt)
		
		# render frame
		Stage3d.render()

		requestAnimationFrame( @update )
		return

	resize:()=>
		width 	= window.innerWidth
		height 	= window.innerHeight
		Stage3d.resize()
		SceneTraveler.resize()
		return


#---------------------------------------------------------- on Document Ready

document.addEventListener('DOMContentLoaded', ()->
	main = new Main()
	
	# window.onblur = (e)->
	# 	main.pause = true
	# 	cancelAnimationFrame(main.update)
	# 	return

	# window.onfocus = ()->
	# 	requestAnimationFrame(main.update)
	# 	main.lastTime = Date.now()
	# 	main.pause = false
	# 	return

	window.onresize = ()->
		main.resize()
		return

	return
)