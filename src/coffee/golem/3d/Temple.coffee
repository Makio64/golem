class Temple extends THREE.Mesh

	constructor:()->
		geometry = new THREE.PlaneGeometry( 100,100,256,256 );
		m = new THREE.Matrix4();
		m.makeRotationX( -Math.PI/2 );
		geometry.applyMatrix(m)

		uniforms = {
			map : { type: "t", value: null }
			bumpMap : { type: "t", value: null }
			bumpScale : { type: "f", value: 10.0 }
		}

		uniforms = THREE.UniformsUtils.merge([
			THREE.UniformsLib.fog
			THREE.UniformsLib.lights
			THREE.UniformsLib.shadowmap
			uniforms
		])

		material = new THREE.ShaderMaterial(
			uniforms:uniforms
			vertexShader: Data.shaders.temple.vertex
			fragmentShader: Data.shaders.temple.fragment
			# transparent: true
			# wireframe: true
		)
		
		# material = new THREE.MeshBasicMaterial({color:0xFF0000})
		material.fog = true

		THREE.Mesh.call(this, geometry, material)
		this.position.y-=0.1;
		uniforms.bumpMap.value = Data.textures['temple.png']
		uniforms.bumpScale.value = 4.0
		uniforms.map.value = Data.textures['water.jpg']
		# this.rotation.x = -Math.PI/2
		return