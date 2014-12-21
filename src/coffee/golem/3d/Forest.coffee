class Forest extends THREE.Object3D

	constructor:()->
		THREE.Object3D.call(this)
		
		for i in [0...800] by 1
			g = Forest.geometry.clone()	
			m = new THREE.Matrix4()
			# angle = Math.PI*2*Math.random()
			angle = Math.PI*1.8/20*(i%20)+Math.random()*.3+Math.PI/2+0.25
			radius = 150+Math.floor(i/20)*20
			m.makeTranslation( Math.cos(angle)*radius, 0, Math.sin(angle)*radius )
			g.applyMatrix(m)
			if tmp
				tmp.merge(g)
			else 
				tmp = g
			
		
		@tree = new THREE.Mesh(tmp, Forest.material)
		@add(@tree)
		return

	@generateGeometry = (padding)->
		leaf = new THREE.CylinderGeometry(0, 15+padding, 100+padding*2, 10, 10, true)
		h = 10-padding
		base = new THREE.CylinderGeometry(5+padding, 5+padding, 10-padding, 10, 2, true) 

		m = new THREE.Matrix4()
		m.makeTranslation( 0, h/2, 0 )
		base.applyMatrix(m)

		m = new THREE.Matrix4()
		m.makeTranslation( 0, h + 50 + padding, 0 )
		leaf.applyMatrix(m)
		base.merge(leaf)
		return base

	# Init static geometry / material
	@isInit = false
	@init = ()=>
		if(@isInit)
			return
		else
			@isInit = true

		@geometry = @generateGeometry(0)
		
		# uniforms = THREE.UniformsUtils.clone(THREE.UniformsLib.fog)
		# uniforms.windForce = { type: "f", value: 0.1 }
		# uniforms.iceFactor = { type: "f", value: 0.0 }
		# uniforms = THREE.UniformsUtils.merge([uniforms, THREE.UniformsLib.lights])

		# @material = new THREE.ShaderMaterial(
		# 	uniforms:uniforms
		# 	vertexShader: Data.shaders.tree.vertex
		# 	fragmentShader: Data.shaders.tree.fragment
		# )
		# @material.fog = true
		# @material.lights = true

		@material = new THREE.MeshLambertMaterial(color:{0x111111})
		return


	# @material = new THREE.MeshBasicMaterial({color:0x333333})
	# @materialIce = new THREE.MeshBasicMaterial({color:0x9999FF, transparent:true, opacity:.9})