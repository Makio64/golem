class IceFragment extends THREE.Mesh

	constructor:(type)->

		width = 120
		height = 200

		rectShape = new THREE.Shape()
		rectShape.moveTo(0,0)
		rectShape.lineTo(size,0)
		rectShape.lineTo(width/2,height)
		rectShape.lineTo(0,0)

		geometry = new THREE.ShapeGeometry(rectShape)
		material = new THREE.MeshBasicMaterial({color: 0xff0000})
		THREE.Mesh.call(this, geometry, material)

		return