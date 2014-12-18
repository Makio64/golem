var TestTreeScene,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TestTreeScene = (function(_super) {
  __extends(TestTreeScene, _super);

  function TestTreeScene() {
    var gui, plane;
    Forest.init();
    this.forest = new Forest();
    Stage3d.add(this.forest);
    this.windForce = 10;
    this.iceFactor = 0;
    this.time = 0;
    gui = new dat.GUI();
    gui.add(this, 'windForce', -200, 200);
    gui.add(this, 'iceFactor', 0, 1);
    Stage3d.camera.position.set(0, 400, 330);
    Stage3d.camera.lookAt(new THREE.Vector3(0, 0, 0));
    plane = new THREE.Mesh(new THREE.BoxGeometry(100, 100, 6, 2, 2), new THREE.MeshBasicMaterial({
      color: 0x111111
    }));
    plane.rotation.x = -Math.PI / 2;
    plane.position.y -= 3;
    Stage3d.add(plane);
    return;
  }

  TestTreeScene.prototype.update = function(dt) {
    this.time += dt;
    this.forest.tree.material.uniforms.iceFactor.value = this.iceFactor;
    this.forest.tree.material.uniforms.windForce.value = this.windForce;
  };

  return TestTreeScene;

})(Scene);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGVtL3NjZW5lcy9UZXN0VHJlZVNjZW5lLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLGFBQUE7RUFBQTtpU0FBQTs7QUFBQTtBQUVDLGtDQUFBLENBQUE7O0FBQVksRUFBQSx1QkFBQSxHQUFBO0FBRVgsUUFBQSxVQUFBO0FBQUEsSUFBQSxNQUFNLENBQUMsSUFBUCxDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLE1BQUQsR0FBYyxJQUFBLE1BQUEsQ0FBQSxDQURkLENBQUE7QUFBQSxJQUVBLE9BQU8sQ0FBQyxHQUFSLENBQWEsSUFBQyxDQUFBLE1BQWQsQ0FGQSxDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsU0FBRCxHQUFhLEVBSGIsQ0FBQTtBQUFBLElBSUEsSUFBQyxDQUFBLFNBQUQsR0FBYSxDQUpiLENBQUE7QUFBQSxJQUtBLElBQUMsQ0FBQSxJQUFELEdBQVEsQ0FMUixDQUFBO0FBQUEsSUFPQSxHQUFBLEdBQVUsSUFBQSxHQUFHLENBQUMsR0FBSixDQUFBLENBUFYsQ0FBQTtBQUFBLElBUUEsR0FBRyxDQUFDLEdBQUosQ0FBUSxJQUFSLEVBQVUsV0FBVixFQUFzQixDQUFBLEdBQXRCLEVBQTJCLEdBQTNCLENBUkEsQ0FBQTtBQUFBLElBU0EsR0FBRyxDQUFDLEdBQUosQ0FBUSxJQUFSLEVBQVUsV0FBVixFQUFzQixDQUF0QixFQUF3QixDQUF4QixDQVRBLENBQUE7QUFBQSxJQVdBLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQXhCLENBQTRCLENBQTVCLEVBQThCLEdBQTlCLEVBQWtDLEdBQWxDLENBWEEsQ0FBQTtBQUFBLElBWUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFmLENBQTBCLElBQUEsS0FBSyxDQUFDLE9BQU4sQ0FBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLENBQTFCLENBWkEsQ0FBQTtBQUFBLElBY0EsS0FBQSxHQUFZLElBQUEsS0FBSyxDQUFDLElBQU4sQ0FBZSxJQUFBLEtBQUssQ0FBQyxXQUFOLENBQWtCLEdBQWxCLEVBQXNCLEdBQXRCLEVBQTBCLENBQTFCLEVBQTRCLENBQTVCLEVBQThCLENBQTlCLENBQWYsRUFBcUQsSUFBQSxLQUFLLENBQUMsaUJBQU4sQ0FBd0I7QUFBQSxNQUFDLEtBQUEsRUFBTSxRQUFQO0tBQXhCLENBQXJELENBZFosQ0FBQTtBQUFBLElBZUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFmLEdBQW1CLENBQUEsSUFBSyxDQUFDLEVBQU4sR0FBUyxDQWY1QixDQUFBO0FBQUEsSUFnQkEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFmLElBQW1CLENBaEJuQixDQUFBO0FBQUEsSUFpQkEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxLQUFiLENBakJBLENBQUE7QUFtQkEsVUFBQSxDQXJCVztFQUFBLENBQVo7O0FBQUEsMEJBdUJBLE1BQUEsR0FBTyxTQUFDLEVBQUQsR0FBQTtBQUNOLElBQUEsSUFBQyxDQUFBLElBQUQsSUFBUyxFQUFULENBQUE7QUFBQSxJQUVBLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQXpDLEdBQWlELElBQUMsQ0FBQSxTQUZsRCxDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUF6QyxHQUFpRCxJQUFDLENBQUEsU0FIbEQsQ0FETTtFQUFBLENBdkJQLENBQUE7O3VCQUFBOztHQUYyQixNQUE1QixDQUFBIiwiZmlsZSI6ImdvbGVtL3NjZW5lcy9UZXN0VHJlZVNjZW5lLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGVzdFRyZWVTY2VuZSBleHRlbmRzIFNjZW5lXG5cblx0Y29uc3RydWN0b3I6KCktPlxuXHRcdFxuXHRcdEZvcmVzdC5pbml0KClcblx0XHRAZm9yZXN0ID0gbmV3IEZvcmVzdCgpIFxuXHRcdFN0YWdlM2QuYWRkKCBAZm9yZXN0IClcblx0XHRAd2luZEZvcmNlID0gMTA7XG5cdFx0QGljZUZhY3RvciA9IDA7XG5cdFx0QHRpbWUgPSAwO1xuXG5cdFx0Z3VpID0gbmV3IGRhdC5HVUkoKVxuXHRcdGd1aS5hZGQoQCwnd2luZEZvcmNlJywtMjAwLDIwMClcblx0XHRndWkuYWRkKEAsJ2ljZUZhY3RvcicsMCwxKVxuXG5cdFx0U3RhZ2UzZC5jYW1lcmEucG9zaXRpb24uc2V0KDAsNDAwLDMzMClcblx0XHRTdGFnZTNkLmNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwwLDApKVxuXG5cdFx0cGxhbmUgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94R2VvbWV0cnkoMTAwLDEwMCw2LDIsMiksIG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6MHgxMTExMTF9KSlcblx0XHRwbGFuZS5yb3RhdGlvbi54ID0gLU1hdGguUEkvMlxuXHRcdHBsYW5lLnBvc2l0aW9uLnkgLT0zXG5cdFx0U3RhZ2UzZC5hZGQoIHBsYW5lIClcblxuXHRcdHJldHVyblxuXG5cdHVwZGF0ZTooZHQpLT5cblx0XHRAdGltZSArPSBkdFxuXHRcdCMgY29uc29sZS5sb2coQGZvcmVzdClcblx0XHRAZm9yZXN0LnRyZWUubWF0ZXJpYWwudW5pZm9ybXMuaWNlRmFjdG9yLnZhbHVlID0gQGljZUZhY3RvclxuXHRcdEBmb3Jlc3QudHJlZS5tYXRlcmlhbC51bmlmb3Jtcy53aW5kRm9yY2UudmFsdWUgPSBAd2luZEZvcmNlXG5cdFx0IyBAZm9yZXN0LnRyZWVJY2UubWF0ZXJpYWwudW5pZm9ybXMud2luZEZvcmNlLnZhbHVlID0gQHdpbmRGb3JjZVxuXHRcdCMgQHRyZWUubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IEB0aW1lXG5cdFx0cmV0dXJuIl19