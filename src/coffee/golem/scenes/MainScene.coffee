class MainScene extends Scene

	constructor:()->

		@timeGolem = 0
		@time = 0
		@tickResetSound = 0

		# Physics
		Physics.init()

		# Light3d
		Stage3d.scene.fog = new THREE.FogExp2( 0, 0.0025 )
		Stage3d.postprocessing.oclScene.fog = Stage3d.scene.fog
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
		geometry = new THREE.PlaneGeometry(600,2000,50,50)
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
		@head = new Attractor3d(10*ratio,'head',1,2,0,0.0005,.3)
		@head.basePosition.set(0,45*ratio,40*ratio)

		@body = new Attractor3d(50*ratio,'body',100,1,10,0.0005,1)
		@body.basePosition.set(0,25*ratio,0)

		@shoulderLeft = new Attractor3d(5*ratio,'shoulderLeft',4,1.3,1.5,0.001,1.5)
		@shoulderLeft.basePosition.set(-50*ratio,50*ratio,0)

		@shoulderRight = new Attractor3d(5*ratio,'shoulderRight',4,1.3,1.5,0.001,1.5)
		@shoulderRight.basePosition.set(50*ratio,50*ratio,0)

		@handLeft = new Attractor3d(5*ratio,'handLeft',7,.8,2.5,0.0001,1)
		@handLeft.basePosition.set(-75*ratio,-5*ratio,0)

		@handRight = new Attractor3d(5*ratio,'handRight',7,.8,2.5,0.0001,1)
		@handRight.basePosition.set(75*ratio,-5*ratio,0)

		@elbowLeft = new Attractor3d(5*ratio,'elbowLeft',4,.6,1.4,0.0001,.7)
		@elbowLeft.basePosition.set(-70*ratio,20*ratio,-5*ratio)

		@elbowRight = new Attractor3d(5*ratio,'elbowRight',4,.6,1.4,0.0001,.7)
		@elbowRight.basePosition.set(70*ratio,20*ratio,-5*ratio)

		@bodies = [@head, @body, @shoulderLeft, @shoulderRight, @handLeft, @handRight, @elbowRight, @elbowLeft]
		# @bodies = [ @body ]
		# Stones link to body
		@stones = []
		@occlusionLights = []
		@occLightScale = 0.01

		for b in @bodies
			b.calculateDistance()
			Stage3d.add(b)
			b.update(0,1.4,0)
		
			for j in [0...b.stonesRequire] by 1
				angle = Math.PI*2*Math.random()
				radius = 40+100*Math.random()
				stone = new Stone(null, Math.cos(angle)*radius, 0, Math.sin(angle)*radius,b.scaleStone)
				stone.target = b.target
				
				Stage3d.add(stone)
				Stage3d.addOclusion(stone.occlusion)

				stone.scale.multiplyScalar(.4+.1*Math.random()) 
				@stones.push(stone)
				if(b == @head)
					stone.material.depthWrite = false

			if(b.scaleLight > 0)
				b.occlusionLight = new THREE.Mesh(new THREE.SphereGeometry(b.scaleLight,4), new THREE.MeshBasicMaterial({color:0x0000FF}))
				b.occlusionLight.position.copy(b.position)
				Stage3d.addOclusion(b.occlusionLight)
				@occlusionLights.push(b.occlusionLight)

		# Eyes
		eyeRightLight = new THREE.PointLight(0xFF0000, 3, 3)
		eyeRightLight.position.set(-1.3,33,17)
		Stage3d.add(eyeRightLight)

		eyeLeftLight = new THREE.PointLight(0xFF0000, 3, 3)
		eyeLeftLight.position.set(1.3,33,17)
		Stage3d.add(eyeLeftLight)

		geometry = new THREE.SphereGeometry(.2)
		@materialEye = new THREE.MeshBasicMaterial({transparent:true, opacity:.7, color:0x222299})
		@eyeLeft = new THREE.Mesh(geometry,@materialEye)
		@eyeLeft.position.copy(eyeLeftLight.position)
		@eyeLeft.position.z -= 1
		Stage3d.add(@eyeLeft)

		@eyeRight = new THREE.Mesh(geometry,@materialEye)
		@eyeRight.position.copy(eyeRightLight.position)
		@eyeRight.position.z -= 1
		Stage3d.add(@eyeRight)
			
		# Runes


		# Ice water

		# Source Energy
		@source = new Source()
		@source.position.y = 25
		Stage3d.add(@source)

		# Temple
		@temple = new Temple()
		# Stage3d.add(@temple)

		# Snow
		# Energy Particles
		geometry = new THREE.Geometry();
		for i in [0...30] by 1
			vertex = new THREE.Vector3();
			phi = Math.random()*Math.PI*2		
			theta = Math.random()*Math.PI*2
			radius = 90+Math.random()*40
			vertex.x = radius * Math.sin( phi ) * Math.cos( theta )
			vertex.y = radius * Math.cos( phi )
			vertex.z = radius * Math.sin( phi ) * Math.sin( theta )
			geometry.vertices.push( vertex );



		particleMaterial = new THREE.PointCloudMaterial( { opacity:1, color:0xFFFFFF, size: 2, map: Data.textures['particle_tex_01.jpg'], blending: THREE.AdditiveBlending, depthWrite: false, transparent : true } );
		@particles = new THREE.PointCloud( geometry, particleMaterial );

		@particles.rotation.y = Math.random() * 6;
		# @particles.rotation.y = Math.random() * 6;
		# @particles.rotation.z = Math.random() * 6;

		Stage3d.add( @particles );


		# Thunder

		# Camera movement
		@cameraFree = false
		Stage3d.camera.position.set(0,20,1000)
		# Stage3d.camera.position.set(0,20,140)
		TweenLite.to(Stage3d.camera.position,7,{z:140,ease:Quad.easeOut,onComplete:()=>
			@cameraFree = true
			Data.sounds.nature.play()
			TweenLite.from(Data.sounds.nature,2.5,{volume:0})
			Instruction.show()
			# Data.sounds.nature.fadeIn()
		})

		# Interaction
		@mouse = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 )
		@angle = Math.PI/2;
		@radius = 140;
		window.addEventListener('mousemove',@onMouseMove)
		window.addEventListener('mousedown',@onKeyDown)
		window.addEventListener('mouseup',@onKeyUp)
		window.addEventListener('touchstart',@onKeyDown)
		window.addEventListener('touchend',@onKeyUp)


		@golem = false
		@golemAngle = 0
		window.addEventListener('keyup',@onKeyUp)
		window.addEventListener('keydown',@onKeyDown)

		Physics.update()
		
		# Interface
		Title.hide()

		return

	onKeyDown:(e)=>
		if(@cameraFree)
			@golem = true
			Physics.world.gravity = new OIMO.Vec3(0, 0, 0);
		return

	onKeyUp:(e)=>
		if(@cameraFree)
			@golem = false
			Physics.world.gravity = new OIMO.Vec3(0, -9.8/100, 0);
		return

	onMouseMove:(e)=>
		@mouse.x = e.clientX || e.x
		@mouse.y = e.clientY || e.y
		return

	update:(dt)->
		@tickResetSound += dt
		if(@tickResetSound > 250)
			@tickResetSound = 0
			Stone.soundsPlay = 0
			console.log('reset')

		# first frame
		if(dt>100)
			return
		
		Physics.update()
		if @time < 250
			@time+=dt
			return

		if(@cameraFree)
			# if(Math.abs(@mouse.x/window.innerWidth - .5)>.2)
			@angle -= (@mouse.x/window.innerWidth - .5)*0.02;

			Stage3d.camera.position.x = Math.cos(@angle)*@radius
			Stage3d.camera.position.z = Math.sin(@angle)*@radius
			Stage3d.camera.rotation.y = Math.atan2(-Stage3d.camera.position.z,Stage3d.camera.position.x)+Math.PI/2
			Stage3d.camera.rotation.x += (((1-@mouse.y/window.innerHeight)*.3 - .1)-Stage3d.camera.rotation.x)*.03;
		
		@lightAura.update(dt)
		@source.update(dt)

		# if(Math.abs(@golemAngle-(@angle-Math.PI/2)) > Math.PI*.8)
		# 	@golemAngle += (@golemAngle-(@angle - Math.PI/2))*0.05
		# 	TweenLite.to(@,1.7,{golemAngle:(@angle - Math.PI/2), ease:Quad.easeInOut})

		for b in @bodies
			b.update(dt,1.4,@golemAngle)
			if(b.occlusionLight)
				b.occlusionLight.position.copy(b.position)
		
	    # document.getElementById("info").innerHTML = world.performance.show();
		targetBody = new THREE.Vector3(0,.25,0)
		for stone in @stones
			stone.update(dt, @golem)

		for light in @occlusionLights
			light.scale.set(@occLightScale,@occLightScale,@occLightScale)
			@materialEye.opacity = @occLightScale*.7
		
		if(@golem)
			@timeGolem += dt
			if(@timeGolem>700)
				@occLightScale += (1-@occLightScale)*0.015
			@radius += (80-@radius)*.01;
			Data.sounds.thunder.volume((2-Data.sounds.thunder.volume())*0.05)
		else
			@timeGolem = 0
			@occLightScale += (0-@occLightScale)*0.25
			@radius += (140-@radius)*.05;
			Data.sounds.thunder.volume((0-Data.sounds.thunder.volume())*0.15)

		@particles.rotation.y+=dt/9000
		@particles.rotation.z+=dt/9000
		# targets = [new THREE.Vector3(-.21,.13,0),new THREE.Vector3(.21,.13,0)]
		# for i in [0...targets.length] by 1
		# 	bigStones[i] = 
		# 	stone.update(dt, targets)
		return