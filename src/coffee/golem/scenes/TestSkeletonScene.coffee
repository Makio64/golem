class TestSkeletonScene extends Scene

	constructor:()->

		gui = new dat.GUI()

		Stage3d.camera.position.set(0,10,300)

		@scaleY = 1.4

		gui.add(@,'scaleY',0.001,2).name('bodyScaleY')
		gui.add(Stage3d.scene.rotation,'y',0,Math.PI*10)

		@head = new Attractor3d(10,'head')
		@head.basePosition.set(0,50,30)

		@body = new Attractor3d(50,'body')
		@body.basePosition.set(0,25,0)

		@shoulderLeft = new Attractor3d(5,'shoulderLeft')
		@shoulderLeft.basePosition.set(-50,50,0)

		@shoulderRight = new Attractor3d(5,'shoulderRight')
		@shoulderRight.basePosition.set(50,50,0)

		@handLeft = new Attractor3d(5,'handLeft')
		@handLeft.basePosition.set(-75,-5,0)

		@handRight = new Attractor3d(5,'handRight')
		@handRight.basePosition.set(75,-5,0)

		@elbowLeft = new Attractor3d(5,'elbowLeft')
		@elbowLeft.basePosition.set(-70,20,-5)

		@elbowRight = new Attractor3d(5,'elbowRight')
		@elbowRight.basePosition.set(70,20,-5)

		@bodies = [@head, @body, @shoulderLeft, @shoulderRight, @handLeft, @handRight, @elbowRight, @elbowLeft]

		for b in @bodies
			folder = gui.addFolder(b.name)
			folder.add(b.basePosition,'x',-100,100).step(1).name('base x')
			folder.add(b.basePosition,'y',-100,100).step(1).name('base y')
			folder.add(b.basePosition,'z',-100,100).step(1).name('base z')
			Stage3d.add(b)
			folder.close()

		return

	update:(dt)->
		for b in @bodies
			b.update(dt,@scaleY)
		return