var ShaderLoader;

ShaderLoader = (function() {
  function ShaderLoader() {}

  ShaderLoader.callback = null;

  ShaderLoader.queue = 0;

  ShaderLoader.load = function(arrays, callback) {
    var i, o, _i, _ref;
    this.callback = callback || null;
    for (i = _i = 0, _ref = arrays.length; _i < _ref; i = _i += 1) {
      o = arrays[i];
      this.loadFile(o);
    }
  };

  ShaderLoader.onLoadComplete = function(name, type, req) {
    if (!Data.shaders[name]) {
      Data.shaders[name] = {};
    }
    Data.shaders[name][type] = req.responseText;
    this.queue--;
    if (this.queue === 0 && this.callback) {
      this.callback();
    }
  };

  ShaderLoader.loadFile = function(name) {
    var req, req2;
    ShaderLoader.queue += 2;
    req = new XMLHttpRequest();
    req.onload = function() {
      return ShaderLoader.onLoadComplete(name, 'vertex', req);
    };
    req.open('get', 'glsl/' + name + 'Vertex.glsl', true);
    req.send();
    req2 = new XMLHttpRequest();
    req2.onload = function() {
      return ShaderLoader.onLoadComplete(name, 'fragment', req2);
    };
    req2.open('get', 'glsl/' + name + 'Fragment.glsl', true);
    req2.send();
  };

  ShaderLoader.get = function(id) {
    return this.shaders[id];
  };

  return ShaderLoader;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGVtL2xvYWRlcnMvU2hhZGVyTG9hZGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLFlBQUE7O0FBQUE7NEJBRUM7O0FBQUEsRUFBQSxZQUFDLENBQUEsUUFBRCxHQUFlLElBQWYsQ0FBQTs7QUFBQSxFQUNBLFlBQUMsQ0FBQSxLQUFELEdBQVMsQ0FEVCxDQUFBOztBQUFBLEVBR0EsWUFBQyxDQUFBLElBQUQsR0FBTSxTQUFFLE1BQUYsRUFBVSxRQUFWLEdBQUE7QUFDTCxRQUFBLGNBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxRQUFELEdBQVksUUFBQSxJQUFZLElBQXhCLENBQUE7QUFDQSxTQUFTLHdEQUFULEdBQUE7QUFDQyxNQUFBLENBQUEsR0FBSSxNQUFPLENBQUEsQ0FBQSxDQUFYLENBQUE7QUFBQSxNQUNBLElBQUMsQ0FBQSxRQUFELENBQVUsQ0FBVixDQURBLENBREQ7QUFBQSxLQUZLO0VBQUEsQ0FITixDQUFBOztBQUFBLEVBVUEsWUFBQyxDQUFBLGNBQUQsR0FBa0IsU0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEdBQWIsR0FBQTtBQUNqQixJQUFBLElBQUcsQ0FBQSxJQUFLLENBQUMsT0FBUyxDQUFBLElBQUEsQ0FBbEI7QUFDQyxNQUFBLElBQUksQ0FBQyxPQUFTLENBQUEsSUFBQSxDQUFkLEdBQXVCLEVBQXZCLENBREQ7S0FBQTtBQUFBLElBRUEsSUFBSSxDQUFDLE9BQVMsQ0FBQSxJQUFBLENBQU8sQ0FBQSxJQUFBLENBQXJCLEdBQTZCLEdBQUcsQ0FBQyxZQUZqQyxDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsS0FBRCxFQUhBLENBQUE7QUFJQSxJQUFBLElBQUksSUFBQyxDQUFBLEtBQUQsS0FBVSxDQUFWLElBQWUsSUFBQyxDQUFBLFFBQXBCO0FBQ0MsTUFBQSxJQUFDLENBQUEsUUFBRCxDQUFBLENBQUEsQ0FERDtLQUxpQjtFQUFBLENBVmxCLENBQUE7O0FBQUEsRUFtQkEsWUFBQyxDQUFBLFFBQUQsR0FBVSxTQUFFLElBQUYsR0FBQTtBQUNULFFBQUEsU0FBQTtBQUFBLElBQUEsWUFBQyxDQUFBLEtBQUQsSUFBUSxDQUFSLENBQUE7QUFBQSxJQUNBLEdBQUEsR0FBVSxJQUFBLGNBQUEsQ0FBQSxDQURWLENBQUE7QUFBQSxJQUVBLEdBQUcsQ0FBQyxNQUFKLEdBQWEsU0FBQSxHQUFBO2FBQ1osWUFBQyxDQUFBLGNBQUQsQ0FBaUIsSUFBakIsRUFBdUIsUUFBdkIsRUFBaUMsR0FBakMsRUFEWTtJQUFBLENBRmIsQ0FBQTtBQUFBLElBSUEsR0FBRyxDQUFDLElBQUosQ0FBVSxLQUFWLEVBQWlCLE9BQUEsR0FBVSxJQUFWLEdBQWlCLGFBQWxDLEVBQWlELElBQWpELENBSkEsQ0FBQTtBQUFBLElBS0EsR0FBRyxDQUFDLElBQUosQ0FBQSxDQUxBLENBQUE7QUFBQSxJQU9BLElBQUEsR0FBVyxJQUFBLGNBQUEsQ0FBQSxDQVBYLENBQUE7QUFBQSxJQVFBLElBQUksQ0FBQyxNQUFMLEdBQWMsU0FBQSxHQUFBO2FBQ2IsWUFBQyxDQUFBLGNBQUQsQ0FBaUIsSUFBakIsRUFBdUIsVUFBdkIsRUFBbUMsSUFBbkMsRUFEYTtJQUFBLENBUmQsQ0FBQTtBQUFBLElBVUEsSUFBSSxDQUFDLElBQUwsQ0FBVyxLQUFYLEVBQWtCLE9BQUEsR0FBVSxJQUFWLEdBQWlCLGVBQW5DLEVBQW9ELElBQXBELENBVkEsQ0FBQTtBQUFBLElBV0EsSUFBSSxDQUFDLElBQUwsQ0FBQSxDQVhBLENBRFM7RUFBQSxDQW5CVixDQUFBOztBQUFBLEVBbUNBLFlBQUMsQ0FBQSxHQUFELEdBQU8sU0FBQyxFQUFELEdBQUE7QUFDTixXQUFPLElBQUMsQ0FBQSxPQUFRLENBQUEsRUFBQSxDQUFoQixDQURNO0VBQUEsQ0FuQ1AsQ0FBQTs7c0JBQUE7O0lBRkQsQ0FBQSIsImZpbGUiOiJnb2xlbS9sb2FkZXJzL1NoYWRlckxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNoYWRlckxvYWRlclxuXG5cdEBjYWxsYmFjayAgICA9IG51bGxcblx0QHF1ZXVlID0gMFxuXG5cdEBsb2FkOiggYXJyYXlzLCBjYWxsYmFjayktPlxuXHRcdEBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG51bGxcblx0XHRmb3IgaSBpbiBbMC4uLmFycmF5cy5sZW5ndGhdIGJ5IDFcblx0XHRcdG8gPSBhcnJheXNbaV1cblx0XHRcdEBsb2FkRmlsZShvKVxuXHRcdHJldHVyblxuXG5cdEBvbkxvYWRDb21wbGV0ZSA9IChuYW1lLCB0eXBlLCByZXEpLT5cblx0XHRpZighRGF0YS5zaGFkZXJzWyBuYW1lIF0pXG5cdFx0XHREYXRhLnNoYWRlcnNbIG5hbWUgXSA9IHt9XG5cdFx0RGF0YS5zaGFkZXJzWyBuYW1lIF1bdHlwZV0gPSByZXEucmVzcG9uc2VUZXh0XG5cdFx0QHF1ZXVlLS1cblx0XHRpZiAoQHF1ZXVlID09IDAgJiYgQGNhbGxiYWNrKVxuXHRcdFx0QGNhbGxiYWNrKClcblx0XHRyZXR1cm5cblxuXHRAbG9hZEZpbGU6KCBuYW1lICk9PlxuXHRcdEBxdWV1ZSs9MlxuXHRcdHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG5cdFx0cmVxLm9ubG9hZCA9ICgpPT5cblx0XHRcdEBvbkxvYWRDb21wbGV0ZSggbmFtZSwgJ3ZlcnRleCcsIHJlcSApXG5cdFx0cmVxLm9wZW4oICdnZXQnLCAnZ2xzbC8nICsgbmFtZSArICdWZXJ0ZXguZ2xzbCcsIHRydWUgKVxuXHRcdHJlcS5zZW5kKClcblxuXHRcdHJlcTIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXHRcdHJlcTIub25sb2FkID0gKCk9PlxuXHRcdFx0QG9uTG9hZENvbXBsZXRlKCBuYW1lLCAnZnJhZ21lbnQnLCByZXEyIClcblx0XHRyZXEyLm9wZW4oICdnZXQnLCAnZ2xzbC8nICsgbmFtZSArICdGcmFnbWVudC5nbHNsJywgdHJ1ZSApXG5cdFx0cmVxMi5zZW5kKClcblx0XHRyZXR1cm5cblxuXG5cdEBnZXQgPSAoaWQpLT5cblx0XHRyZXR1cm4gQHNoYWRlcnNbaWRdIl19