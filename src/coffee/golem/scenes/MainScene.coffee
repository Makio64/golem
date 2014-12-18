class MainScene extends Scene

	constructor:()->

		# Physics
		Physics.init()

		# Light3d
		Stage3d.scene.fog = new THREE.FogExp2( 0, 0.0025 )
		ambientLight = new THREE.AmbientLight(0x111116)
		pointLight = new THREE.PointLight(0xCCCCFF, 3, 120)
		pointLight.position.set(0,100,0)

		# Forest
		Forest.init()
		forest = new Forest()
		Stage3d.add( forest )
		Stage3d.add( ambientLight )
		Stage3d.add( pointLight )
		
		# Floor
		geometry = new THREE.PlaneGeometry(1000,1000,200,200)
		vertices = geometry.vertices
		jizz = 2
		for i in [0...vertices.length] by 1
			v = vertices[i]
			v.x += (Math.random()-.5)*jizz
			v.z += (Math.random()-.5)*jizz
			v.y += (Math.random()-.5)*jizz	

		plane = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({map:Data.textures['ice01.jpg'], envMap:Data.textures.reflectionMap, color:0xFFFFFF}))
		
		plane.rotation.x = -Math.PI/2
		Stage3d.add( plane )

		geometry = new THREE.PlaneGeometry(200,200,50,50)
		vertices = geometry.vertices
		jizz = 2
		for i in [0...vertices.length] by 1
			v = vertices[i]
			v.x += (Math.random()-.5)*jizz
			v.z += (Math.random()-.5)*jizz
			v.y += (Math.random()-.5)*jizz	

		plane = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({map:Data.textures['ice01.jpg'], envMap:Data.textures.reflectionMap, color:0xFFFFFF}))
		
		plane.rotation.x = -Math.PI/2
		Stage3d.add( plane )

		# Light FX
		@lightAura = new LightAura()
		Stage3d.add(@lightAura)

		# Golem
		ratio = .3
		@head = new Attractor3d(10*ratio,'head',1,2)
		@head.basePosition.set(0,45*ratio,40*ratio)

		@body = new Attractor3d(50*ratio,'body',100,1)
		@body.basePosition.set(0,25*ratio,0)

		@shoulderLeft = new Attractor3d(5*ratio,'shoulderLeft',4,1.3)
		@shoulderLeft.basePosition.set(-50*ratio,50*ratio,0)

		@shoulderRight = new Attractor3d(5*ratio,'shoulderRight',4,1.3)
		@shoulderRight.basePosition.set(50*ratio,50*ratio,0)

		@handLeft = new Attractor3d(5*ratio,'handLeft',7,.8)
		@handLeft.basePosition.set(-75*ratio,-5*ratio,0)

		@handRight = new Attractor3d(5*ratio,'handRight',7,.8)
		@handRight.basePosition.set(75*ratio,-5*ratio,0)

		@elbowLeft = new Attractor3d(5*ratio,'elbowLeft',4,.6)
		@elbowLeft.basePosition.set(-70*ratio,20*ratio,-5*ratio)

		@elbowRight = new Attractor3d(5*ratio,'elbowRight',4,.6)
		@elbowRight.basePosition.set(70*ratio,20*ratio,-5*ratio)

		@bodies = [@head, @body, @shoulderLeft, @shoulderRight, @handLeft, @handRight, @elbowRight, @elbowLeft]
		# @bodies = [ @body ]
		# Stones link to body
		@stones = []
		for b in @bodies
			Stage3d.add(b)
			b.update(0,1.4)
		
			for j in [0...b.stonesRequire] by 1
				angle = Math.PI*2*Math.random()
				radius = 40+100*Math.random()
				stone = new Stone(null, Math.cos(angle)*radius, 0, Math.sin(angle)*radius,b.scaleStone)
				stone.target = b.target
				Stage3d.add(stone)
				stone.scale.multiplyScalar(.4+.1*Math.random()) 
				@stones.push(stone)

		# Runes

		# Ice water


		# Music
		# @backgroundMusic = new Howl({
		# 	urls: ['sounds/day1.mp3'],
		# 	autoplay: true,
		# 	loop: true,
		# 	volume: 0.2,
		# })

		# Source Energy
		@source = new Source()
		@source.position.y = 25
		Stage3d.add(@source)

		# Temple
		@temple = new Temple()
		# Stage3d.add(@temple)

		# Snow


		# Energy Particles

		# Camera movement
		@cameraFree = false
		Stage3d.camera.position.set(0,20,2000)
		# Stage3d.camera.position.set(0,20,140)
		TweenLite.to(Stage3d.camera.position,6,{z:140,ease:Quad.easeOut,onComplete:()=>
			@cameraFree = true
		})

		# Interaction
		@mouse = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 )
		@angle = Math.PI/2;
		@radius = 140;
		window.addEventListener('mousemove',@onMouseMove)

		@golem = false
		window.addEventListener('keyup',@onKeyUp)
		window.addEventListener('keydown',@onKeyDown)
		# Interface



		return

	onKeyDown:(e)=>
		@golem = true
		Physics.world.gravity = new OIMO.Vec3(0, 0, 0);
		return

	onKeyUp:(e)=>
		@golem = false
		Physics.world.gravity = new OIMO.Vec3(0, -9.8/100, 0);
		return

	onMouseMove:(e)=>
		@mouse.x = e.clientX || e.x
		@mouse.y = e.clientY || e.y
		return

	update:(dt)->
		radius = 140
		if(@cameraFree)
			@angle -= (@mouse.x/window.innerWidth - .5)*0.01;
			Stage3d.camera.position.x = Math.cos(@angle)*radius
			Stage3d.camera.position.z = Math.sin(@angle)*radius
			Stage3d.camera.rotation.y = Math.atan2(-Stage3d.camera.position.z,Stage3d.camera.position.x)+Math.PI/2
		Stage3d.camera.rotation.x += (((1-@mouse.y/window.innerHeight)*.3 - .1)-Stage3d.camera.rotation.x)*.03;
		@lightAura.update(dt)
		@source.update(dt)

		Physics.update()
	        
	    # document.getElementById("info").innerHTML = world.performance.show();
		targetBody = new THREE.Vector3(0,.25,0)
		for stone in @stones
			stone.update(dt, @golem)
		
		
		# targets = [new THREE.Vector3(-.21,.13,0),new THREE.Vector3(.21,.13,0)]
		# for i in [0...targets.length] by 1
		# 	bigStones[i] = 
		# 	stone.update(dt, targets)
		return