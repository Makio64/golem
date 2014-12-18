class ShaderLoader

	@callback    = null
	@queue = 0

	@load:( arrays, callback)->
		@callback = callback || null
		for i in [0...arrays.length] by 1
			o = arrays[i]
			@loadFile(o)
		return

	@onLoadComplete = (name, type, req)->
		if(!Data.shaders[ name ])
			Data.shaders[ name ] = {}
		Data.shaders[ name ][type] = req.responseText
		@queue--
		if (@queue == 0 && @callback)
			@callback()
		return

	@loadFile:( name )=>
		@queue+=2
		req = new XMLHttpRequest()
		req.onload = ()=>
			@onLoadComplete( name, 'vertex', req )
		req.open( 'get', 'glsl/' + name + 'Vertex.glsl', true )
		req.send()

		req2 = new XMLHttpRequest()
		req2.onload = ()=>
			@onLoadComplete( name, 'fragment', req2 )
		req2.open( 'get', 'glsl/' + name + 'Fragment.glsl', true )
		req2.send()
		return


	@get = (id)->
		return @shaders[id]