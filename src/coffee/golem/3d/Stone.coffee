class Stone extends THREE.Mesh

	@soundsPlay = 0

	constructor:(type,x,y,z,scale)->

		# type ?= Math.floor(Math.random()*2)
		type = 1
		@fly = false
		@positionnated = false
		
		switch(type)
			when 0
				#geometry cubic
				size = 5.5*scale
				obj = { type:'box', size:[size,size,size], pos:[x,y,z], move:true, world:Physics.world };
				geometry = new THREE.BoxGeometry( size, size, size , 2, 2, 2 );
				material = new THREE.MeshLambertMaterial({color:0xFFFFFF, wireframe:false})

				vertices = geometry.vertices
				jizz = 3
				for i in [0...vertices.length] by 1
					v = vertices[i]
					v.x += (Math.random()-.5)*jizz
					v.z += (Math.random()-.5)*jizz
					if(v.y != -size/2)
						v.y += (Math.random()-.5)*jizz
				break	

			when 1
				#geometry circle
				radius = 5*scale
				obj = { type:'sphere', size:[radius*0.5, radius*0.5, radius*0.5], pos:[x,y,z], move:true, world:Physics.world }
				geometry = new THREE.TetrahedronGeometry(radius, 2);
				material = new THREE.MeshLambertMaterial({color:0xFFFFFF, wireframe:false})

				vertices = geometry.vertices
				jizz = radius/2.5
				for i in [0...vertices.length] by 1
					v = vertices[i]
					v.x += (Math.random()-.5)*jizz
					v.z += (Math.random()-.5)*jizz
					v.y += (Math.random()-.5)*jizz	
				break	

			when 2
				#geometry triangle
				height = 10
				geometry = new THREE.CylinderGeometry(5, 5, height, 5, 3, false)
				material = new THREE.MeshLambertMaterial({color:0xFFFFFF, wireframe:false})

				vertices = geometry.vertices
				jizz = .5
				for i in [0...vertices.length] by 1
					v = vertices[i]
					if(v.y != height/2)
						v.x += (Math.random()-.5)*jizz
						v.z += (Math.random()-.5)*jizz
						v.y += (Math.random()-.5)*jizz	

				obj = { type:'cylinder', size:[w,h,w, w,h,w, w,h,w, w,h,w], pos:[x,y,z], rot:[0,0,0, 0,45,0, 0,22.5,0, 0,-22.5,0], move:true, world:Physics.world };
				break	

		@body = new OIMO.Body(obj)
		@body.body.linearVelocity.set(0,-10,0)
		@body.body.mass = 2+Math.random()
		@body.body.allowSleep = false

		material.envMap = Data.textures.reflectionCube
		material.reflectivity = .7
		material.transparent = true
		material.opacity = .8
		material.fog = true
		material.combine = THREE.AddOperation

		THREE.Mesh.call(this, geometry, material)

		@occlusion = new THREE.Mesh(geometry, Stage3d.postprocessing.blackMaterial)

		return

	update:(dt, golem)->
		if(golem)
			target = @target
			maxSpeed = 5

			speedX = (target.x-@body.body.position.x)*.75
			if(speedX>maxSpeed)
				speedX = maxSpeed
			else if(speedX<-maxSpeed)
				speedX = -maxSpeed

			speedY = (target.y-@body.body.position.y)*.75
			if(speedY>maxSpeed)
				speedY = maxSpeed
			else if(speedY<-maxSpeed)
				speedY = -maxSpeed

			speedZ = (target.z-@body.body.position.z)*.75
			if(speedZ>maxSpeed)
				speedZ = maxSpeed
			else if(speedZ<-maxSpeed)
				speedZ = -maxSpeed

			@body.body.linearVelocity.set(speedX,speedY,speedZ)

		if !golem || !@body.getSleep()
			@position.copy(@body.getPosition())
			@quaternion.copy(@body.getQuaternion())

		# if(@fly && @position.y < 10)
		# 	@fly = false
		# 	if(Stone.soundsPlay<1)
		# 		Stone.soundsPlay++
		# 		Data.sounds.stoneHit2.play()
		# 		r = Math.floor(Math.random()*3)
		# 		Data.sounds.stoneHit2.play()
		# 		# if(r == 0)
		# 		# 	Data.sounds.stoneHit1.play()
		# 		# else if(r == 1)
		# 		# 	Data.sounds.stoneHit2.play()
		# 		# else if(r == 3)
		# 		# 	Data.sounds.stoneHit3.play()

		# else if(!@fly)
		# 	if(@position.y > 20)
		# 		@fly = true

		@occlusion.position.copy(@position)
		@occlusion.quaternion.copy(@quaternion)
		@occlusion.scale.copy(@scale)