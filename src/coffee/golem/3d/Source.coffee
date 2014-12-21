class Source extends THREE.Mesh

	constructor:()->
		geometry = new THREE.OctahedronGeometry(5, 5)
		
		@time = 0.0;

		uniforms = {
			time : { type: "f", value: 0.0 }
			noisePower : { type: "f", value: 1.0 }
			anglePower : { type: "f", value: 0.3 }
			anglePowerAmplification : { type: "f", value: 0.0 }
		}
		uniforms = THREE.UniformsUtils.merge([
			uniforms
			THREE.UniformsLib.fog
			THREE.UniformsLib.lights
			THREE.UniformsLib.shadowmap
		])

		material = new THREE.ShaderMaterial(
			uniforms:uniforms
			vertexShader: Data.shaders.source.vertex
			fragmentShader: Data.shaders.source.fragment
			transparent: true
			wireframe: true
		)
		# material = new THREE.MeshBasicMaterial({color:0xFF0000})
		material.fog = true
		material.lights = true

		THREE.Mesh.call(this, geometry, material)

		# gui = new dat.GUI()
		# gui.add(uniforms.noisePower,'value',0.001,20).name('noisePower').step(0.01)
		# gui.add(uniforms.anglePower,'value',0.001,20).name('anglePower').step(0.01)
		# gui.add(uniforms.anglePowerAmplification,'value',0.0,20).name('anglePowerAmplification').step(0.01)

		# this.scale.y = 5

		return

	update:(dt)->
		@time += dt/1500
		@material.uniforms.time.value = @time
		return
