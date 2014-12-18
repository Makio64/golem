class Attractor3d extends THREE.Mesh

	constructor:(radius,name,@stonesRequire,@scaleStone)->

		geometry = new THREE.SphereGeometry(radius)
		material = new THREE.MeshBasicMaterial({color:0xFFFFFF, wireframe:true,transparent:true,opacity:0})
		THREE.Mesh.call(this, geometry, material)

		# Data from fbx
		@basePosition = new THREE.Vector3()
		@name = name
		@target = new THREE.Vector3()
		this.visible = false

		return

	update:(dt,scaleY)->
		@position.set(@basePosition.x,@basePosition.y*scaleY+15,@basePosition.z)
		@target.copy(@position)
		@target.multiplyScalar(1/100)
		console.log(@target)
		return

