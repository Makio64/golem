var TestLightScene,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TestLightScene = (function(_super) {
  __extends(TestLightScene, _super);

  function TestLightScene() {
    this.update = __bind(this.update, this);
    this.positionLight = __bind(this.positionLight, this);
    this.generateLight = __bind(this.generateLight, this);
    var gui;
    Stage3d.cameraTarget.z = 200;
    Stage3d.cameraTarget.y = 0;
    this.lightCount = 10;
    this.lights = [];
    this.radius = 100;
    this.ambient = new THREE.AmbientLight(0x111111);
    this.targetLookAt = new THREE.Vector3(-Math.PI / 2, 0.2, 0);
    this.opacity = .3;
    this.offsetX = 85;
    this.offsetY = 280;
    Stage3d.camera.position.z = 150;
    gui = new dat.GUI();
    gui.add(this, 'lightCount', 1, 100).step(1).onChange(this.generateLight);
    gui.add(this, 'radius', 1, 1000).step(1).onChange(this.generateLight);
    gui.add(this.targetLookAt, 'x', -Math.PI, Math.PI).step(0.01);
    gui.add(this.targetLookAt, 'y', -Math.PI, Math.PI).step(0.01);
    gui.add(this.targetLookAt, 'z', -Math.PI, Math.PI).step(0.01);
    gui.add(Stage3d.camera.position, 'x', -200, 400).step(0.01);
    gui.add(Stage3d.camera.position, 'y', -200, 400).step(0.01);
    gui.add(Stage3d.camera.position, 'z', -200, 400).step(0.01);
    gui.add(this, 'offsetX', -500, 500).step(1).onChange(this.generateLight);
    gui.add(this, 'offsetY', -500, 500).step(1).onChange(this.generateLight);
    gui.add(this, 'opacity', 0, 1).step(0.1);
    gui.add(Stage3d.scene.rotation, 'y', 0, Math.PI * 2);
    this.opacity;
    this.generateLight();
    return;
  }

  TestLightScene.prototype.generateLight = function() {
    var l, _i, _len, _ref;
    while (this.lights.length < this.lightCount) {
      l = new Light();
      this.lights.push(l);
      this.positionLight(l);
      Stage3d.add(l);
    }
    while (this.lights.length > this.lightCount) {
      l = this.lights.pop();
      Stage3d.remove(l);
    }
    _ref = this.lights;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      l = _ref[_i];
      this.positionLight(l);
    }
  };

  TestLightScene.prototype.positionLight = function(l) {
    var angle, r;
    angle = Math.random() * Math.PI * 2;
    r = this.radius * Math.random();
    l.position.x = Math.cos(angle) * r + this.offsetX;
    l.position.z = Math.sin(angle) * r;
    l.position.y = this.offsetY;
  };

  TestLightScene.prototype.update = function(dt) {
    var l, quaternion, quaternion2, _i, _len, _ref;
    quaternion = new THREE.Quaternion();
    quaternion2 = new THREE.Quaternion();
    quaternion.setFromAxisAngle(new THREE.Vector3(1, 0, 0), this.targetLookAt.x);
    quaternion.multiply(quaternion2);
    quaternion2.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.targetLookAt.y);
    quaternion.multiply(quaternion2);
    quaternion2.setFromAxisAngle(new THREE.Vector3(0, 0, 1), this.targetLookAt.z);
    quaternion.multiply(quaternion2);
    quaternion.normalize();
    _ref = this.lights;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      l = _ref[_i];
      l.update(dt);
      l._opacity = this.opacity;
      l.setRotationFromQuaternion(quaternion);
    }
  };

  return TestLightScene;

})(Scene);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGVtL3NjZW5lcy9UZXN0TGlnaHRTY2VuZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxjQUFBO0VBQUE7O2lTQUFBOztBQUFBO0FBRUMsbUNBQUEsQ0FBQTs7QUFBWSxFQUFBLHdCQUFBLEdBQUE7QUFDWCwyQ0FBQSxDQUFBO0FBQUEseURBQUEsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSxRQUFBLEdBQUE7QUFBQSxJQUFBLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBckIsR0FBeUIsR0FBekIsQ0FBQTtBQUFBLElBQ0EsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFyQixHQUF5QixDQUR6QixDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsVUFBRCxHQUFjLEVBSGQsQ0FBQTtBQUFBLElBSUEsSUFBQyxDQUFBLE1BQUQsR0FBVSxFQUpWLENBQUE7QUFBQSxJQUtBLElBQUMsQ0FBQSxNQUFELEdBQVUsR0FMVixDQUFBO0FBQUEsSUFNQSxJQUFDLENBQUEsT0FBRCxHQUFlLElBQUEsS0FBSyxDQUFDLFlBQU4sQ0FBbUIsUUFBbkIsQ0FOZixDQUFBO0FBQUEsSUFPQSxJQUFDLENBQUEsWUFBRCxHQUFvQixJQUFBLEtBQUssQ0FBQyxPQUFOLENBQWMsQ0FBQSxJQUFLLENBQUMsRUFBTixHQUFTLENBQXZCLEVBQXlCLEdBQXpCLEVBQTZCLENBQTdCLENBUHBCLENBQUE7QUFBQSxJQVFBLElBQUMsQ0FBQSxPQUFELEdBQVcsRUFSWCxDQUFBO0FBQUEsSUFTQSxJQUFDLENBQUEsT0FBRCxHQUFXLEVBVFgsQ0FBQTtBQUFBLElBVUEsSUFBQyxDQUFBLE9BQUQsR0FBVyxHQVZYLENBQUE7QUFBQSxJQVlBLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQXhCLEdBQTRCLEdBWjVCLENBQUE7QUFBQSxJQWNBLEdBQUEsR0FBVSxJQUFBLEdBQUcsQ0FBQyxHQUFKLENBQUEsQ0FkVixDQUFBO0FBQUEsSUFlQSxHQUFHLENBQUMsR0FB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LDJDQUFBO21CQUFBO0FBQ0MsTUFBQSxDQUFDLENBQUMsTUFBRixDQUFTLEVBQVQsQ0FBQSxDQUFBO0FBQUEsTUFDQSxDQUFDLENBQUMsUUFBRixHQUFhLElBQUMsQ0FBQSxPQURkLENBQUE7QUFBQSxNQUVBLENBQUMsQ0FBQyx5QkFBRixDQUE0QixVQUE1QixDQUZBLENBREQ7QUFBQSxLQWpCTTtFQUFBLENBM0RQLENBQUE7O3dCQUFBOztHQUY0QixNQUE3QixDQUFBIiwiZmlsZSI6ImdvbGVtL3NjZW5lcy9UZXN0TGlnaHRTY2VuZS5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRlc3RMaWdodFNjZW5lIGV4dGVuZHMgU2NlbmVcblxuXHRjb25zdHJ1Y3RvcjooKS0+XG5cdFx0U3RhZ2UzZC5jYW1lcmFUYXJnZXQueiA9IDIwMFxuXHRcdFN0YWdlM2QuY2FtZXJhVGFyZ2V0LnkgPSAwXG5cblx0XHRAbGlnaHRDb3VudCA9IDEwXG5cdFx0QGxpZ2h0cyA9IFtdXG5cdFx0QHJhZGl1cyA9IDEwMFxuXHRcdEBhbWJpZW50ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDExMTExMSlcblx0XHRAdGFyZ2V0TG9va0F0ID0gbmV3IFRIUkVFLlZlY3RvcjMoLU1hdGguUEkvMiwwLjIsMClcblx0XHRAb3BhY2l0eSA9IC4zXG5cdFx0QG9mZnNldFggPSA4NVxuXHRcdEBvZmZzZXRZID0gMjgwXG5cblx0XHRTdGFnZTNkLmNhbWVyYS5wb3NpdGlvbi56ID0gMTUwXG5cblx0XHRndWkgPSBuZXcgZGF0LkdVSSgpXG5cdFx0Z3VpLmFkZChALCdsaWdodENvdW50JywxLDEwMCkuc3RlcCgxKS5vbkNoYW5nZShAZ2VuZXJhdGVMaWdodClcblx0XHRndWkuYWRkKEAsJ3JhZGl1cycsMSwxMDAwKS5zdGVwKDEpLm9uQ2hhbmdlKEBnZW5lcmF0ZUxpZ2h0KVxuXHRcdGd1aS5hZGQoQHRhcmdldExvb2tBdCwneCcsLU1hdGguUEksTWF0aC5QSSkuc3RlcCgwLjAxKVxuXHRcdGd1aS5hZGQoQHRhcmdldExvb2tBdCwneScsLU1hdGguUEksTWF0aC5QSSkuc3RlcCgwLjAxKVxuXHRcdGd1aS5hZGQoQHRhcmdldExvb2tBdCwneicsLU1hdGguUEksTWF0aC5QSSkuc3RlcCgwLjAxKVxuXHRcdGd1aS5hZGQoU3RhZ2UzZC5jYW1lcmEucG9zaXRpb24sJ3gnLC0yMDAsNDAwKS5zdGVwKDAuMDEpXG5cdFx0Z3VpLmFkZChTdGFnZTNkLmNhbWVyYS5wb3NpdGlvbiwneScsLTIwMCw0MDApLnN0ZXAoMC4wMSlcblx0XHRndWkuYWRkKFN0YWdlM2QuY2FtZXJhLnBvc2l0aW9uLCd6JywtMjAwLDQwMCkuc3RlcCgwLjAxKVxuXHRcdGd1aS5hZGQoQCwnb2Zmc2V0WCcsLTUwMCw1MDApLnN0ZXAoMSkub25DaGFuZ2UoQGdlbmVyYXRlTGlnaHQpXG5cdFx0Z3VpLmFkZChALCdvZmZzZXRZJywtNTAwLDUwMCkuc3RlcCgxKS5vbkNoYW5nZShAZ2VuZXJhdGVMaWdodClcblx0XHRndWkuYWRkKEAsJ29wYWNpdHknLDAsMSkuc3RlcCgwLjEpXG5cdFx0Z3VpLmFkZChTdGFnZTNkLnNjZW5lLnJvdGF0aW9uLCd5JywwLE1hdGguUEkqMilcblxuXHRcdEBvcGFjaXR5XG5cdFx0QGdlbmVyYXRlTGlnaHQoKVxuXHRcdHJldHVyblxuXG5cdGdlbmVyYXRlTGlnaHQ6KCk9PlxuXHRcdFxuXHRcdHdoaWxlKEBsaWdodHMubGVuZ3RoPEBsaWdodENvdW50KVxuXHRcdFx0bCA9IG5ldyBMaWdodCgpXG5cdFx0XHRAbGlnaHRzLnB1c2gobClcblx0XHRcdEBwb3NpdGlvbkxpZ2h0KGwpXG5cdFx0XHRTdGFnZTNkLmFkZChsKVxuXHRcdCBcblx0XHR3aGlsZShAbGlnaHRzLmxlbmd0aD5AbGlnaHRDb3VudClcblx0XHRcdGwgPSBAbGlnaHRzLnBvcCgpXG5cdFx0XHRTdGFnZTNkLnJlbW92ZShsKVxuXG5cdFx0Zm9yIGwgaW4gQGxpZ2h0c1xuXHRcdFx0QHBvc2l0aW9uTGlnaHQobClcblx0XHRcblxuXHRcdHJldHVyblxuXG5cdHBvc2l0aW9uTGlnaHQ6KGwpPT5cblx0XHRhbmdsZSA9IE1hdGgucmFuZG9tKCkqTWF0aC5QSSoyXG5cdFx0ciA9IEByYWRpdXMqTWF0aC5yYW5kb20oKVxuXHRcdGwucG9zaXRpb24ueCA9IE1hdGguY29zKGFuZ2xlKSpyICsgQG9mZnNldFhcblx0XHRsLnBvc2l0aW9uLnogPSBNYXRoLnNpbihhbmdsZSkqclxuXHRcdGwucG9zaXRpb24ueSA9IEBvZmZzZXRZXG5cdFx0cmV0dXJuXG5cblx0dXBkYXRlOihkdCk9PlxuXHRcdHF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHRcdHF1YXRlcm5pb24yID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0XHRxdWF0ZXJuaW9uLnNldEZyb21BeGlzQW5nbGUoIG5ldyBUSFJFRS5WZWN0b3IzKCAxLCAwLCAwICksIEB0YXJnZXRMb29rQXQueCApO1xuXHRcdHF1YXRlcm5pb24ubXVsdGlwbHkoIHF1YXRlcm5pb24yIClcblx0XHRxdWF0ZXJuaW9uMi5zZXRGcm9tQXhpc0FuZ2xlKCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMSwgMCApLCBAdGFyZ2V0TG9va0F0LnkgKTtcblx0XHRxdWF0ZXJuaW9uLm11bHRpcGx5KCBxdWF0ZXJuaW9uMiApXG5cdFx0cXVhdGVybmlvbjIuc2V0RnJvbUF4aXNBbmdsZSggbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsIDEgKSwgQHRhcmdldExvb2tBdC56ICk7XG5cdFx0cXVhdGVybmlvbi5tdWx0aXBseSggcXVhdGVybmlvbjIgKVxuXHRcdHF1YXRlcm5pb24ubm9ybWFsaXplKClcblxuXHRcdCMgcm90YXRlUXVhdGVybmlvbiA9IHJvdGF0ZU1hdHJpeChyb3RhdGVTdGFydFBvaW50LCByb3RhdGVFbmRQb2ludCk7XG5cdFx0IyBjdXJRdWF0ZXJuaW9uID0gY3ViZS5xdWF0ZXJuaW9uO1xuXHRcdCMgY3VyUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHJvdGF0ZVF1YXRlcm5pb24sIGN1clF1YXRlcm5pb24pO1xuXHRcdCMgY3VyUXVhdGVybmlvbi5ub3JtYWxpemUoKTtcblx0XHQjIGN1YmUuc2V0Um90YXRpb25Gcm9tUXVhdGVybmlvbihjdXJRdWF0ZXJuaW9uKTtcblxuXHRcdGZvciBsIGluIEBsaWdodHNcblx0XHRcdGwudXBkYXRlKGR0KVxuXHRcdFx0bC5fb3BhY2l0eSA9IEBvcGFjaXR5XG5cdFx0XHRsLnNldFJvdGF0aW9uRnJvbVF1YXRlcm5pb24ocXVhdGVybmlvbilcblx0XHRcdCMgY29uc29sZS5sb2cobC5yb3RhdGlvbilcblx0XHRcdCMgY29uc29sZS5sb2coQHRhcmdldExvb2tBdClcblx0XHRcdCMgbC5yb3RhdGlvbi54ID0gQHRhcmdldExvb2tBdC54XG5cdFx0XHQjIGwucm90YXRpb24ueSA9IEB0YXJnZXRMb29rQXQueVxuXHRcdFx0IyBsLnJvdGF0aW9uLnogPSBAdGFyZ2V0TG9va0F0Lnpcblx0XHRyZXR1cm4iXX0=