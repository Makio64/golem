# 
# Stage3d for three.js with every basics you need
# @author David Ronai / Makiopolis.com / @Makio64 
# 
class Stage3d

	@camera = null
	@cameraTarget = null
	@scene = null
	@renderer = null

	@init = (options)->
		w = window.innerWidth
		h = window.innerHeight
		h *= .8

		@camera = new THREE.PerspectiveCamera( 40, w / h, 1, 10000 )
		@camera.position.z = 15000
		@cameraTarget = new THREE.Vector3(0,0,20)

		@scene = new THREE.Scene()
		# @projector = new THREE.Projector()

		transparent = options.transparent||false
		antialias = options.antialias||false

		@renderer = new THREE.WebGLRenderer({alpha:transparent,antialias:antialias})
		@renderer.setSize( w, h )
		@renderer.setClearColor( 0 );


		document.body.appendChild(@renderer.domElement)
		return

	@add = (obj)->
		@scene.add(obj)
		return

	@remove = (obj)->
		@scene.remove(obj)
		return

	@render = ()->
		# @camera.lookAt(@scene.position)
		Stage3d.renderer.render(@scene, @camera)
		return

	@resize = ()->
		if @renderer
			w = window.innerWidth
			h = window.innerHeight
			h *= .8
			@camera.aspect = w / h
			@camera.updateProjectionMatrix()
			@renderer.setSize( w, h )
		return

	@initPostprocessing = ()->
		return