class Light extends THREE.Mesh

	constructor:()->
		geometry = Light.geometry #new THREE.PlaneGeometry( 10,10,2,2 );
		texture = Data.textures['light.png']
		material = new THREE.MeshBasicMaterial({depthWrite:false, depthTest:false, map:texture, color:0x8888FF, wireframe:false, transparent:true})
		material.blending = THREE.AdditiveBlending
		material.side = THREE.DoubleSide

		THREE.Mesh.call(this, geometry, material)

		@time = Math.random()*10000
		@randomOpacity = 1056+750*Math.random()
		@randomScale = 956+150*Math.random()
		@baseScale = .6+.4*Math.random()
		@_opacity = 1
		
		return

	update:(dt)->
		@time += dt
		@material.opacity = Math.abs(Math.sin(@time/@randomOpacity))*@_opacity
		scale = .9+Math.abs(Math.sin(@time/@randomScale))*.1
		@scale.set(scale,scale,scale)
		return

	# # Static method, call only once
	@generateGeometry = ()->
		h = 250+30*Math.random();
		w = 40;

		translateMatrix = new THREE.Matrix4();
		translateMatrix.makeTranslation( h/2,w/2,0 );

		geometry1 = new THREE.PlaneGeometry(h,w);
		geometry1.applyMatrix(translateMatrix);
		geometry2 = new THREE.PlaneGeometry(h,w);
		
		m = new THREE.Matrix4();
		m.makeRotationX( Math.PI/3 );
	
		geometry2.applyMatrix(m);
		geometry2.applyMatrix(translateMatrix);
		
		geometry3 = new THREE.PlaneGeometry(h,w);
		
		m = new THREE.Matrix4();
		m.makeRotationX( -Math.PI/3 );
		
		geometry3.applyMatrix(m);
		geometry3.applyMatrix(translateMatrix);

		translateY = new THREE.Matrix4();
		translateY.makeRotationY( Math.PI/2 );

		geometry1.applyMatrix(translateY);
		geometry2.applyMatrix(translateY);
		geometry3.applyMatrix(translateY);

		geometry1.merge(geometry2);
		geometry1.merge(geometry3);

		return geometry1;

	@geometry = @generateGeometry()
