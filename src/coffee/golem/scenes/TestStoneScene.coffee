class TestStoneScene extends Scene

	constructor:()->
		@stone = new Stone() 
		Stage3d.add( @stone )
		gui = new dat.GUI()
		gui.add(@,'newCubicStone')
		gui.add(@,'newCircleStone')
		gui.add(@,'newTriangleStone')
		return

	newCubicStone:()=>
		Stage3d.remove( @stone )		
		@stone = new Stone(0) 
		Stage3d.add( @stone )

	newCircleStone:()=>
		Stage3d.remove( @stone )		
		@stone = new Stone(1) 
		Stage3d.add( @stone )

	newTriangleStone:()=>
		Stage3d.remove( @stone )		
		@stone = new Stone(2) 
		Stage3d.add( @stone )