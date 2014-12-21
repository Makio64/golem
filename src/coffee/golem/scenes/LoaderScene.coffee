class LoaderScene extends Scene

	constructor:()->
		@queue = 0
		Title.show()

		@loadSound()

		setTimeout(()=>
			ShaderLoader.load([
				'tree'
				'source'
				'temple'
				'vBlur'
				'hBlur'
			],@loadTexture)
		,400)
		return


	loadSound:()->
		Data.sounds.music = new Howl({
			urls: ['sounds/day1.mp3'],
			autoplay: true,
			loop: true,
			volume: 0.1,
			buffer: true
		})

		Data.sounds.nature = new Howl({
			urls: ['sounds/wind.mp3'],
			autoplay: false,
			loop: true,
			volume: 0.4,
			buffer: true
		})

		Data.sounds.thunder = new Howl({
			urls: ['sounds/thunder.mp3'],
			loop: true,
			volume: 0.0,
			autoplay: true			
		})

		# Data.sounds.stoneHit1 = new Howl({
		# 	urls: ['sounds/stoneImpact_01.mp3'],
		# 	loop: false,
		# 	volume: .1,			
		# })

		# Data.sounds.stoneHit2 = new Howl({
		# 	urls: ['sounds/stoneImpact_02.mp3'],
		# 	loop: false,
		# 	volume: .1,			
		# })

		# Data.sounds.stoneHit3 = new Howl({
		# 	urls: ['sounds/stoneImpact_03.mp3'],
		# 	loop: false,
		# 	volume: .1,			
		# })
		return


	loadTexture:()=>
		Title.setPercent(.3)
		Stage3d.initPostprocessing()
		urls = [
			"textures/light.png"
			"textures/ice01.jpg"
			"textures/ice02.jpg"
			"textures/particle_tex_01.jpg"
			# "textures/water.jpg"
			# "textures/temple.png"
		]
		for url in urls
			@queue++
			name = @getName(url)
			Data.textures[name] = THREE.ImageUtils.loadTexture(url, THREE.UVMapping, @onLoaded)
		return

	onLoaded:()=>
		@queue--
		if(@queue <= 0)
			@onComplete()
		return

	onComplete:()=>
		Title.setPercent(.7)
		path = "textures/env01/";
		format = '.jpg';
		urls = [
			path + 'posx' + format
			path + 'negx' + format
			path + 'posy' + format 
			path + 'negy' + format
			path + 'posz' + format 
			path + 'negz' + format
		];


		Data.textures.reflectionCube = THREE.ImageUtils.loadTextureCube( urls );
		Data.textures.reflectionCube.format = THREE.RGBFormat;
		THREE.ImageUtils.loadTextureCube(urls, THREE.CubeReflectionMapping, ()->
			Title.setPercent(.99)
			SceneTraveler.to(new MainScene())
		)
		return

	getName:(url)->
		index = url.lastIndexOf("/") + 1;
		filename = url.substr(index);
		return filename