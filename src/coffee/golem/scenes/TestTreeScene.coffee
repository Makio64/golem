class TestTreeScene extends Scene

	constructor:()->
		
		Forest.init()
		@forest = new Forest() 
		Stage3d.add( @forest )
		@windForce = 10;
		@iceFactor = 0;
		@time = 0;

		gui = new dat.GUI()
		gui.add(@,'windForce',-200,200)
		gui.add(@,'iceFactor',0,1)

		Stage3d.camera.position.set(0,400,330)
		Stage3d.camera.lookAt(new THREE.Vector3(0,0,0))

		plane = new THREE.Mesh(new THREE.BoxGeometry(100,100,6,2,2), new THREE.MeshBasicMaterial({color:0x111111}))
		plane.rotation.x = -Math.PI/2
		plane.position.y -=3
		Stage3d.add( plane )

		return

	update:(dt)->
		@time += dt
		# console.log(@forest)
		@forest.tree.material.uniforms.iceFactor.value = @iceFactor
		@forest.tree.material.uniforms.windForce.value = @windForce
		# @forest.treeIce.material.uniforms.windForce.value = @windForce
		# @tree.material.uniforms.time.value = @time
		return