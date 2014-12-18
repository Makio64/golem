var LoaderScene,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LoaderScene = (function(_super) {
  __extends(LoaderScene, _super);

  function LoaderScene() {
    this.onComplete = __bind(this.onComplete, this);
    this.onLoaded = __bind(this.onLoaded, this);
    this.loadTexture = __bind(this.loadTexture, this);
    this.queue = 0;
    ShaderLoader.load(['tree', 'source', 'temple'], this.loadTexture);
    return;
  }

  LoaderScene.prototype.loadTexture = function() {
    var name, url, urls, _i, _len;
    urls = ["textures/light.png", "textures/ice01.jpg", "textures/ice02.jpg", "textures/water.jpg", "textures/temple.png"];
    for (_i = 0, _len = urls.length; _i < _len; _i++) {
      url = urls[_i];
      this.queue++;
      name = this.getName(url);
      Data.textures[name] = THREE.ImageUtils.loadTexture(url, THREE.UVMapping, this.onLoaded);
    }
  };

  LoaderScene.prototype.onLoaded = function() {
    this.queue--;
    if (this.queue <= 0) {
      this.onComplete();
    }
  };

  LoaderScene.prototype.onComplete = function() {
    var format, path, urls;
    path = "textures/env01/";
    format = '.jpg';
    urls = [path + 'posx' + format, path + 'negx' + format, path + 'posy' + format, path + 'negy' + format, path + 'posz' + format, path + 'negz' + format];
    Data.textures.reflectionCube = THREE.ImageUtils.loadTextureCube(urls);
    Data.textures.reflectionCube.format = THREE.RGBFormat;
    THREE.ImageUtils.loadTextureCube(urls, THREE.CubeReflectionMapping, function() {
      return SceneTraveler.to(new MainScene());
    });
  };

  LoaderScene.prototype.getName = function(url) {
    var filename, index;
    index = url.lastIndexOf("/") + 1;
    filename = url.substr(index);
    return filename;
  };

  return LoaderScene;

})(Scene);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGVtL3NjZW5lcy9Mb2FkZXJTY2VuZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxXQUFBO0VBQUE7O2lTQUFBOztBQUFBO0FBRUMsZ0NBQUEsQ0FBQTs7QUFBWSxFQUFBLHFCQUFBLEdBQUE7QUFDWCxtREFBQSxDQUFBO0FBQUEsK0NBQUEsQ0FBQTtBQUFBLHFEQUFBLENBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxLQUFELEdBQVMsQ0FBVCxDQUFBO0FBQUEsSUFDQSxZQUFZLENBQUMsSUFBYixDQUFrQixDQUNqQixNQURpQixFQUVqQixRQUZpQixFQUdqQixRQUhpQixDQUFsQixFQUlFLElBQUMsQ0FBQSxXQUpILENBREEsQ0FBQTtBQU1BLFVBQUEsQ0FQVztFQUFBLENBQVo7O0FBQUEsd0JBU0EsV0FBQSxHQUFZLFNBQUEsR0FBQTtBQUNYLFFBQUEseUJBQUE7QUFBQSxJQUFBLElBQUEsR0FBTyxDQUNOLG9CQURNLEVBRU4sb0JBRk0sRUFHTixvQkFITSxFQUlOLG9CQUpNLEVBS04scUJBTE0sQ0FBUCxDQUFBO0FBT0EsU0FBQSwyQ0FBQTtxQkFBQTtBQUNDLE1BQUEsSUFBQyxDQUFBLEtBQUQsRUFBQSxDQUFBO0FBQUEsTUFDQSxJQUFBLEdBQU8sSUFBQyxDQUFBLE9BQUQsQ0FBUyxHQUFULENBRFAsQ0FBQTtBQUFBLE1BRUEsSUFBSSxDQUFDLFFBQVMsQ0FBQSxJQUFBLENBQWQsR0FBc0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFqQixDQUE2QixHQUE3QixFQUFrQyxLQUFLLENBQUMsU0FBeEMsRUFBbUQsSUFBQyxDQUFBLFFBQXBELENBRnRCLENBREQ7QUFBQSxLQVJXO0VBQUEsQ0FUWixDQUFBOztBQUFBLHdCQXVCQSxRQUFBLEdBQVMsU0FBQSxHQUFBO0FBQ1IsSUFBQSxJQUFDLENBQUEsS0FBRCxFQUFBLENBQUE7QUFDQSxJQUFBLElBQUcsSUFBQyxDQUFBLEtBQUQsSUFBVSxDQUFiO0FBQ0MsTUFBQSxJQUFDLENBQUEsVUFBRCxDQUFBLENBQUEsQ0FERDtLQUZRO0VBQUEsQ0F2QlQsQ0FBQTs7QUFBQSx3QkE2QkEsVUFBQSxHQUFXLFNBQUEsR0FBQTtBQUNWLFFBQUEsa0JBQUE7QUFBQSxJQUFBLElBQUEsR0FBTyxpQkFBUCxDQUFBO0FBQUEsSUFDQSxNQUFBLEdBQVMsTUFEVCxDQUFBO0FBQUEsSUFFQSxJQUFBLEdBQU8sQ0FDTixJQUFBLEdBQU8sTUFBUCxHQUFnQixNQURWLEVBRU4sSUFBQSxHQUFPLE1BQVAsR0FBZ0IsTUFGVixFQUdOLElBQUEsR0FBTyxNQUFQLEdBQWdCLE1BSFYsRUFJTixJQUFBLEdBQU8sTUFBUCxHQUFnQixNQUpWLEVBS04sSUFBQSxHQUFPLE1BQVAsR0FBZ0IsTUFMVixFQU1OLElBQUEsR0FBTyxNQUFQLEdBQWdCLE1BTlYsQ0FGUCxDQUFBO0FBQUEsSUFXQSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWQsR0FBK0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFqQixDQUFrQyxJQUFsQyxDQVgvQixDQUFBO0FBQUEsSUFZQSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUE3QixHQUFzQyxLQUFLLENBQUMsU0FaNUMsQ0FBQTtBQUFBLElBYUEsS0FBSyxDQUFDLFVBQVUsQ0FBQyxlQUFqQixDQUFpQyxJQUFqQyxFQUF1QyxLQUFLLENBQUMscUJBQTdDLEVBQW9FLFNBQUEsR0FBQTthQUNuRSxhQUFhLENBQUMsRUFBZCxDQUFxQixJQUFBLFNBQUEsQ0FBQSxDQUFyQixFQURtRTtJQUFBLENBQXBFLENBYkEsQ0FEVTtFQUFBLENBN0JYLENBQUE7O0FBQUEsd0JBZ0RBLE9BQUEsR0FBUSxTQUFDLEdBQUQsR0FBQTtBQUNQLFFBQUEsZUFBQTtBQUFBLElBQUEsS0FBQSxHQUFRLEdBQUcsQ0FBQyxXQUFKLENBQWdCLEdBQWhCLENBQUEsR0FBdUIsQ0FBL0IsQ0FBQTtBQUFBLElBQ0EsUUFBQSxHQUFXLEdBQUcsQ0FBQyxNQUFKLENBQVcsS0FBWCxDQURYLENBQUE7QUFFQSxXQUFPLFFBQVAsQ0FITztFQUFBLENBaERSLENBQUE7O3FCQUFBOztHQUZ5QixNQUExQixDQUFBIiwiZmlsZSI6ImdvbGVtL3NjZW5lcy9Mb2FkZXJTY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExvYWRlclNjZW5lIGV4dGVuZHMgU2NlbmVcblxuXHRjb25zdHJ1Y3RvcjooKS0+XG5cdFx0QHF1ZXVlID0gMFxuXHRcdFNoYWRlckxvYWRlci5sb2FkKFtcblx0XHRcdCd0cmVlJ1xuXHRcdFx0J3NvdXJjZSdcblx0XHRcdCd0ZW1wbGUnXG5cdFx0XSxAbG9hZFRleHR1cmUpXG5cdFx0cmV0dXJuXG5cblx0bG9hZFRleHR1cmU6KCk9PlxuXHRcdHVybHMgPSBbXG5cdFx0XHRcInRleHR1cmVzL2xpZ2h0LnBuZ1wiXG5cdFx0XHRcInRleHR1cmVzL2ljZTAxLmpwZ1wiXG5cdFx0XHRcInRleHR1cmVzL2ljZTAyLmpwZ1wiXG5cdFx0XHRcInRleHR1cmVzL3dhdGVyLmpwZ1wiXG5cdFx0XHRcInRleHR1cmVzL3RlbXBsZS5wbmdcIlxuXHRcdF1cblx0XHRmb3IgdXJsIGluIHVybHNcblx0XHRcdEBxdWV1ZSsrXG5cdFx0XHRuYW1lID0gQGdldE5hbWUodXJsKVxuXHRcdFx0RGF0YS50ZXh0dXJlc1tuYW1lXSA9IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUodXJsLCBUSFJFRS5VVk1hcHBpbmcsIEBvbkxvYWRlZClcblx0XHRyZXR1cm5cblxuXHRvbkxvYWRlZDooKT0+XG5cdFx0QHF1ZXVlLS1cblx0XHRpZihAcXVldWUgPD0gMClcblx0XHRcdEBvbkNvbXBsZXRlKClcblx0XHRyZXR1cm5cblxuXHRvbkNvbXBsZXRlOigpPT5cblx0XHRwYXRoID0gXCJ0ZXh0dXJlcy9lbnYwMS9cIjtcblx0XHRmb3JtYXQgPSAnLmpwZyc7XG5cdFx0dXJscyA9IFtcblx0XHRcdHBhdGggKyAncG9zeCcgKyBmb3JtYXRcblx0XHRcdHBhdGggKyAnbmVneCcgKyBmb3JtYXRcblx0XHRcdHBhdGggKyAncG9zeScgKyBmb3JtYXQgXG5cdFx0XHRwYXRoICsgJ25lZ3knICsgZm9ybWF0XG5cdFx0XHRwYXRoICsgJ3Bvc3onICsgZm9ybWF0IFxuXHRcdFx0cGF0aCArICduZWd6JyArIGZvcm1hdFxuXHRcdF07XG5cblx0XHREYXRhLnRleHR1cmVzLnJlZmxlY3Rpb25DdWJlID0gVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZUN1YmUoIHVybHMgKTtcblx0XHREYXRhLnRleHR1cmVzLnJlZmxlY3Rpb25DdWJlLmZvcm1hdCA9IFRIUkVFLlJHQkZvcm1hdDtcblx0XHRUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlQ3ViZSh1cmxzLCBUSFJFRS5DdWJlUmVmbGVjdGlvbk1hcHBpbmcsICgpLT5cblx0XHRcdFNjZW5lVHJhdmVsZXIudG8obmV3IE1haW5TY2VuZSgpKVxuXHRcdClcblx0XHRyZXR1cm5cblxuXHRnZXROYW1lOih1cmwpLT5cblx0XHRpbmRleCA9IHVybC5sYXN0SW5kZXhPZihcIi9cIikgKyAxO1xuXHRcdGZpbGVuYW1lID0gdXJsLnN1YnN0cihpbmRleCk7XG5cdFx0cmV0dXJuIGZpbGVuYW1lIl19