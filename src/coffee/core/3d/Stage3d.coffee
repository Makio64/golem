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
		@renderer.setClearColor( 0, 0 );
		@renderer.autoClear = false

		document.body.appendChild(@renderer.domElement)
		@renderer.render(@scene, @camera)
		return

	@add = (obj)->
		@scene.add(obj)
		return

	@addOclusion = (obj)->
		@postprocessing.oclScene.add(obj)
		return

	@remove = (obj)->
		@scene.remove(obj)
		return

	@render = ()->
		@renderer.clear() #clear the stage
		@renderer.render(@scene, @camera) #render basic scene

		if @postprocessing
			@renderer.clearTarget(@postprocessing.rtTexture,true,true,true) #clear the rendering target
			@renderer.render(@postprocessing.oclScene, @camera, @postprocessing.rtTexture) #render the occlusion scene
			@renderer.render(@postprocessing.sceneVertical, @postprocessing.orthographicCamera, @postprocessing.rtTexture) #blur it
			@renderer.render(@postprocessing.sceneHorizontal, @postprocessing.orthographicCamera, @postprocessing.rtTexture) #blur it
			@renderer.render(@postprocessing.sceneVertical, @postprocessing.orthographicCamera, @postprocessing.rtTexture) #blur it
			@renderer.render(@postprocessing.sceneHorizontal, @postprocessing.orthographicCamera, @postprocessing.rtTexture) #blur it
			@renderer.render(@postprocessing.finalScene, @postprocessing.orthographicCamera) #draw in additive
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

	@initPostprocessing = ()=>

		@postprocessing = {}
		@postprocessing.oclScene = new THREE.Scene()
		@postprocessing.sceneVertical = new THREE.Scene()
		@postprocessing.sceneHorizontal = new THREE.Scene()
		@postprocessing.oclScene = new THREE.Scene()
		@postprocessing.finalScene = new THREE.Scene()
		@postprocessing.orthographicCamera = new THREE.OrthographicCamera( -1, 1, 1, -1, 0, 1 )
		w = window.innerWidth * window.devicePixelRatio
		h = window.innerHeight * window.devicePixelRatio
		w /= 4
		h /= 4
		@postprocessing.rtTexture = new THREE.WebGLRenderTarget(w, h, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBAFormat })
		
		# final additive scene
		material = new THREE.MeshBasicMaterial( {
			color:0xFFFFFF
			blending: THREE.AdditiveBlending
			map: @postprocessing.rtTexture
			transparent: true
			opacity:.6
		} );
		quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), material )
		@postprocessing.finalScene.add( quad )

		# blur scene
		material = new THREE.ShaderMaterial( {
			vertexShader: Data.shaders.vBlur.vertex
			fragmentShader: Data.shaders.vBlur.fragment
			uniforms: {
				"tDiffuse": { type: "t", value: @postprocessing.rtTexture },
				"v":        { type: "f", value: 2.0 / window.innerHeight }
			},
			transparent: true
		} );

		quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), material )
		@postprocessing.sceneHorizontal.add( quad )
		material = new THREE.ShaderMaterial( {
			vertexShader: Data.shaders.hBlur.vertex
			fragmentShader: Data.shaders.hBlur.fragment
			uniforms: {
				"tDiffuse": { type: "t", value: @postprocessing.rtTexture },
				"v":        { type: "f", value: 2.0 / window.innerWidth }
			},
			transparent: true
		} );

		quad = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2, 2 ), material )
		@postprocessing.sceneHorizontal.add( quad )

		@postprocessing.blackMaterial = new THREE.MeshBasicMaterial( { color: 0x000000 } )
		
		# @postprocessing.hblur = new THREE.ShaderPass( THREE.ShaderExtras[ "horizontalBlur" ] )
		# @postprocessing.vblur = new THREE.ShaderPass( THREE.ShaderExtras[ "verticalBlur" ] )
		 
		# bluriness = 3;
		 
		# @postprocessing.hblur.uniforms[ "h" ].value = bluriness / w;
		# @postprocessing.vblur.uniforms[ "v" ].value = bluriness / h;

		# @postprocessing.composer = new THREE.EffectComposer( renderer, @postprocessing.rtTexture )
		# @postprocessing.composer.addPass( new THREE.RenderPass( @postprocessing.oclScene, @camera ) )
		# @postprocessing.composer.addPass( @postprocessing.hblur )
		# @postprocessing.composer.addPass( @postprocessing.vblur )
		# @postprocessing.composer.addPass( @postprocessing.hblur )
		# @postprocessing.composer.addPass( @postprocessing.vblur )
		return