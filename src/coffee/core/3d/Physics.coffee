class Physics

	constructor:()->
		return

	@init:()->
		timestep = 1/30;
		boardphase = 2;
		Iterations = 3;
		noStat = false;
		@world = new OIMO.World( timestep, boardphase, Iterations, noStat );
		@world.gravity = new OIMO.Vec3(0, 0, 0);
		@world.worldscale(100);

		obj = { type:'box', size:[2000,1,2000], pos:[0,0,0], world:Physics.world, flat:true };
		
		b = new OIMO.Body(obj) 
		console.log(b)
		return

	@update:()->
		@world.step();
		return