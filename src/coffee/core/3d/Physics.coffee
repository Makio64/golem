class Physics

	constructor:()->
		return

	@init:()->
		timestep = 1/30;
		boardphase = 2;
		Iterations = 6;
		noStat = true;
		@world = new OIMO.World( timestep, boardphase, Iterations, noStat );
		@world.gravity = new OIMO.Vec3(0, -9.8, 0);
		@world.worldscale(100);

		new OIMO.Body({ type:'box', size:[300,50,300], pos:[0,-20,0], world:Physics.world, flat:true })

		new OIMO.Body({ type:"box", size:[200,500,100], pos:[0,0,150], world:Physics.world }) #front
		new OIMO.Body({ type:"box", size:[200,500,100], pos:[0,0,-150], world:Physics.world }) #back
		new OIMO.Body({ type:"box", size:[100,500,200], pos:[150,0,0], world:Physics.world }) #right
		new OIMO.Body({ type:"box", size:[100,500,200], pos:[-150,0,0], world:Physics.world }) #left
		return

	@update:()->
		@world.step();
		return