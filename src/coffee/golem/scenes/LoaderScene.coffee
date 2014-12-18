class LoaderScene extends Scene

	constructor:()->
		@queue = 0
		ShaderLoader.load([
			'tree'
			'source'
			'temple'
		],@loadTexture)
		return

	loadTexture:()=>
		urls = [
			"textures/light.png"
			"textures/ice01.jpg"
			"textures/ice02.jpg"
			"textures/water.jpg"
			"textures/temple.png"
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
			SceneTraveler.to(new MainScene())
		)
		return

	getName:(url)->
		index = url.lastIndexOf("/") + 1;
		filename = url.substr(index);
		return filename