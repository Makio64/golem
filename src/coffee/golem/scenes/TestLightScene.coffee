class TestLightScene extends Scene

	constructor:()->
		Stage3d.cameraTarget.z = 200
		Stage3d.cameraTarget.y = 0

		@lightCount = 10
		@lights = []
		@radius = 100
		@ambient = new THREE.AmbientLight(0x111111)
		@targetLookAt = new THREE.Vector3(-Math.PI/2,0.2,0)
		@opacity = .3
		@offsetX = 85
		@offsetY = 280

		Stage3d.camera.position.z = 150

		gui = new dat.GUI()
		gui.add(@,'lightCount',1,100).step(1).onChange(@generateLight)
		gui.add(@,'radius',1,1000).step(1).onChange(@generateLight)
		gui.add(@targetLookAt,'x',-Math.PI,Math.PI).step(0.01)
		gui.add(@targetLookAt,'y',-Math.PI,Math.PI).step(0.01)
		gui.add(@targetLookAt,'z',-Math.PI,Math.PI).step(0.01)
		gui.add(Stage3d.camera.position,'x',-200,400).step(0.01)
		gui.add(Stage3d.camera.position,'y',-200,400).step(0.01)
		gui.add(Stage3d.camera.position,'z',-200,400).step(0.01)
		gui.add(@,'offsetX',-500,500).step(1).onChange(@generateLight)
		gui.add(@,'offsetY',-500,500).step(1).onChange(@generateLight)
		gui.add(@,'opacity',0,1).step(0.1)
		gui.add(Stage3d.scene.rotation,'y',0,Math.PI*2)

		@opacity
		@generateLight()
		return

	generateLight:()=>
		
		while(@lights.length<@lightCount)
			l = new Light()
			@lights.push(l)
			@positionLight(l)
			Stage3d.add(l)
		 
		while(@lights.length>@lightCount)
			l = @lights.pop()
			Stage3d.remove(l)

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
			l.update(dt)
			l._opacity = @opacity
			l.setRotationFromQuaternion(quaternion)
			# console.log(l.rotation)
			# console.log(@targetLookAt)
			# l.rotation.x = @targetLookAt.x
			# l.rotation.y = @targetLookAt.y
			# l.rotation.z = @targetLookAt.z
		return