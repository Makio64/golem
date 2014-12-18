class LightAura extends THREE.Object3D

	constructor:()->
		super()
		@lightCount = 40
		@lights = []
		@radius = 120
		@ambient = new THREE.AmbientLight(0x111111)
		@targetLookAt = new THREE.Vector3(-Math.PI/2,0.2,0)
		@opacity = .3
		@offsetX = 60
		@offsetY = 250
		@generateLight()
		return

	generateLight:()=>
		
		while(@lights.length<@lightCount)
			l = new Light()
			@lights.push(l)
			@positionLight(l)
			@add(l)
		 
		while(@lights.length>@lightCount)
			l = @lights.pop()
			@remove(l)

		for l in @lights
			@positionLight(l)
		

		return

	positionLight:(l)=>
		angle = Math.random()*Math.PI*2
		r = @radius*Math.random()
		l.position.x = Math.cos(angle)*r + @offsetX
		l.position.z = Math.sin(angle)*r
		l.position.y = @offsetY
		return

	update:(dt)=>
		# @targetLookAt.z += dt/10000
		quaternion = new THREE.Quaternion();
		quaternion2 = new THREE.Quaternion();
		quaternion.setFromAxisAngle( new THREE.Vector3( 1, 0, 0 ), @targetLookAt.x );
		quaternion.multiply( quaternion2 )
		quaternion2.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), @targetLookAt.y );
		quaternion.multiply( quaternion2 )
		quaternion2.setFromAxisAngle( new THREE.Vector3( 0, 0, 1 ), @targetLookAt.z );
		quaternion.multiply( quaternion2 )
		quaternion.normalize()

		# rotateQuaternion = rotateMatrix(rotateStartPoint, rotateEndPoint);
		# curQuaternion = cube.quaternion;
		# curQuaternion.multiplyQuaternions(rotateQuaternion, curQuaternion);
		# curQuaternion.normalize();
		# cube.setRotationFromQuaternion(curQuaternion);

		for l in @lights
			l.update(dt/3)
			l._opacity = @opacity
			l.setRotationFromQuaternion(quaternion)
			# console.log(l.rotation)
			# console.log(@targetLookAt)
			# l.rotation.x = @targetLookAt.x
			# l.rotation.y = @targetLookAt.y
			# l.rotation.z = @targetLookAt.z
		return