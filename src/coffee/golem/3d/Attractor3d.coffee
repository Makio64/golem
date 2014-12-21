class Attractor3d extends THREE.Mesh

	constructor:(radius,name,@stonesRequire,@scaleStone,@scaleLight,@oscilationSpeed,@oscilationIntensity)->

		@time = 0
		geometry = new THREE.SphereGeometry(radius)
		material = new THREE.MeshBasicMaterial({color:0xFFFFFF, wireframe:true,transparent:true,opacity:0})
		THREE.Mesh.call(this, geometry, material)

		# Data from fbx
		@basePosition = new THREE.Vector3()
		@name = name
		@target = new THREE.Vector3()
		this.visible = false

		return

	calculateDistance:()->
		dx = @basePosition.x
		dz = @basePosition.z
		@distance = Math.sqrt(dx*dx+dz*dz)
		@originAngle = Math.atan2(dz,dx)
		return

	update:(dt,scaleY, angle)=>
		@time += dt
		angle += @originAngle
		x = Math.cos(angle)*@distance
		z = Math.sin(angle)*@distance

		oscilation = Math.abs(Math.sin(@time*@oscilationSpeed)*@oscilationIntensity)
		@position.set(x,@basePosition.y*scaleY+15+oscilation,z)
		
		@target.copy(@position)
		@target.multiplyScalar(1/100)
		return

