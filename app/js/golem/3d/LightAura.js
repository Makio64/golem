var LightAura,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LightAura = (function(_super) {
  __extends(LightAura, _super);

  function LightAura() {
    this.update = __bind(this.update, this);
    this.positionLight = __bind(this.positionLight, this);
    this.generateLight = __bind(this.generateLight, this);
    LightAura.__super__.constructor.call(this);
    this.lightCount = 50;
    this.lights = [];
    this.radius = 120;
    this.ambient = new THREE.AmbientLight(0x111111);
    this.targetLookAt = new THREE.Vector3(-Math.PI / 2, 0.2, 0);
    this.opacity = .3;
    this.offsetX = 60;
    this.offsetY = 250;
    this.generateLight();
    return;
  }

  LightAura.prototype.generateLight = function() {
    var l, _i, _len, _ref;
    while (this.lights.length < this.lightCount) {
      l = new Light();
      this.lights.push(l);
      this.positionLight(l);
      this.add(l);
    }
    while (this.lights.length > this.lightCount) {
      l = this.lights.pop();
      this.remove(l);
    }
    _ref = this.lights;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      l = _ref[_i];
      this.positionLight(l);
    }
  };

  LightAura.prototype.positionLight = function(l) {
    var angle, r;
    angle = Math.random() * Math.PI * 2;
    r = this.radius * Math.random();
    l.position.x = Math.cos(angle) * r + this.offsetX;
    l.position.z = Math.sin(angle) * r;
    l.position.y = this.offsetY;
  };

  LightAura.prototype.update = function(dt) {
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
      l.update(dt / 3);
      l._opacity = this.opacity;
      l.setRotationFromQuaternion(quaternion);
    }
  };

  return LightAura;

})(THREE.Object3D);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGVtLzNkL0xpZ2h0QXVyYS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxTQUFBO0VBQUE7O2lTQUFBOztBQUFBO0FBRUMsOEJBQUEsQ0FBQTs7QUFBWSxFQUFBLG1CQUFBLEdBQUE7QUFDWCwyQ0FBQSxDQUFBO0FBQUEseURBQUEsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSxJQUFBLHlDQUFBLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLFVBQUQsR0FBYyxFQURkLENBQUE7QUFBQSxJQUVBLElBQUMsQ0FBQSxNQUFELEdBQVUsRUFGVixDQUFBO0FBQUEsSUFHQSxJQUFDLENBQUEsTUFBRCxHQUFVLEdBSFYsQ0FBQTtBQUFBLElBSUEsSUFBQyxDQUFBLE9BQUQsR0FBZSxJQUFBLEtBQUssQ0FBQyxZQUFOLENBQW1CLFFBQW5CLENBSmYsQ0FBQTtBQUFBLElBS0EsSUFBQyxDQUFBLFlBQUQsR0FBb0IsSUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLENBQUEsSUFBSyxDQUFDLEVBQU4sR0FBUyxDQUF2QixFQUF5QixHQUF6QixFQUE2QixDQUE3QixDQUxwQixDQUFBO0FBQUEsSUFNQSxJQUFDLENBQUEsT0FBRCxHQUFXLEVBTlgsQ0FBQTtBQUFBLElBT0EsSUFBQyxDQUFBLE9BQUQsR0FBVyxFQVBYLENBQUE7QUFBQSxJQVFBLElBQUMsQ0FBQSxPQUFELEdBQVcsR0FSWCxDQUFBO0FBQUEsSUFTQSxJQUFDLENBQUEsYUFBRCxDQUFBLENBVEEsQ0FBQTtBQVVBLFVBQUEsQ0FYVztFQUFBLENBQVo7O0FBQUEsc0JBYUEsYUFBQSxHQUFjLFNBQUEsR0FBQTtBQUViLFFBQUEsaUJBQUE7QUFBQSxXQUFNLElBQUMsQ0FBQSxNQUFNLENBQUMsTUFBUixHQUFlLElBQUMsQ0FBQSxVQUF0QixHQUFBO0FBQ0MsTUFBQSxDQUFBLEdBQVEsSUFBQSxLQUFBLENBQUEsQ0FBUixDQUFBO0FBQUEsTUFDQSxJQUFDLENBQUEsTUFBTSxD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NUIsQ0FGQSxDQUREO0FBQUEsS0FsQk07RUFBQSxDQXZDUCxDQUFBOzttQkFBQTs7R0FGdUIsS0FBSyxDQUFDLFNBQTlCLENBQUEiLCJmaWxlIjoiZ29sZW0vM2QvTGlnaHRBdXJhLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTGlnaHRBdXJhIGV4dGVuZHMgVEhSRUUuT2JqZWN0M0RcblxuXHRjb25zdHJ1Y3RvcjooKS0+XG5cdFx0c3VwZXIoKVxuXHRcdEBsaWdodENvdW50ID0gNTBcblx0XHRAbGlnaHRzID0gW11cblx0XHRAcmFkaXVzID0gMTIwXG5cdFx0QGFtYmllbnQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4MTExMTExKVxuXHRcdEB0YXJnZXRMb29rQXQgPSBuZXcgVEhSRUUuVmVjdG9yMygtTWF0aC5QSS8yLDAuMiwwKVxuXHRcdEBvcGFjaXR5ID0gLjNcblx0XHRAb2Zmc2V0WCA9IDYwXG5cdFx0QG9mZnNldFkgPSAyNTBcblx0XHRAZ2VuZXJhdGVMaWdodCgpXG5cdFx0cmV0dXJuXG5cblx0Z2VuZXJhdGVMaWdodDooKT0+XG5cdFx0XG5cdFx0d2hpbGUoQGxpZ2h0cy5sZW5ndGg8QGxpZ2h0Q291bnQpXG5cdFx0XHRsID0gbmV3IExpZ2h0KClcblx0XHRcdEBsaWdodHMucHVzaChsKVxuXHRcdFx0QHBvc2l0aW9uTGlnaHQobClcblx0XHRcdEBhZGQobClcblx0XHQgXG5cdFx0d2hpbGUoQGxpZ2h0cy5sZW5ndGg+QGxpZ2h0Q291bnQpXG5cdFx0XHRsID0gQGxpZ2h0cy5wb3AoKVxuXHRcdFx0QHJlbW92ZShsKVxuXG5cdFx0Zm9yIGwgaW4gQGxpZ2h0c1xuXHRcdFx0QHBvc2l0aW9uTGlnaHQobClcblx0XHRcblxuXHRcdHJldHVyblxuXG5cdHBvc2l0aW9uTGlnaHQ6KGwpPT5cblx0XHRhbmdsZSA9IE1hdGgucmFuZG9tKCkqTWF0aC5QSSoyXG5cdFx0ciA9IEByYWRpdXMqTWF0aC5yYW5kb20oKVxuXHRcdGwucG9zaXRpb24ueCA9IE1hdGguY29zKGFuZ2xlKSpyICsgQG9mZnNldFhcblx0XHRsLnBvc2l0aW9uLnogPSBNYXRoLnNpbihhbmdsZSkqclxuXHRcdGwucG9zaXRpb24ueSA9IEBvZmZzZXRZXG5cdFx0cmV0dXJuXG5cblx0dXBkYXRlOihkdCk9PlxuXHRcdCMgQHRhcmdldExvb2tBdC56ICs9IGR0LzEwMDAwXG5cdFx0cXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cdFx0cXVhdGVybmlvbjIgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHRcdHF1YXRlcm5pb24uc2V0RnJvbUF4aXNBbmdsZSggbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDAsIDAgKSwgQHRhcmdldExvb2tBdC54ICk7XG5cdFx0cXVhdGVybmlvbi5tdWx0aXBseSggcXVhdGVybmlvbjIgKVxuXHRcdHF1YXRlcm5pb24yLnNldEZyb21BeGlzQW5nbGUoIG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAxLCAwICksIEB0YXJnZXRMb29rQXQueSApO1xuXHRcdHF1YXRlcm5pb24ubXVsdGlwbHkoIHF1YXRlcm5pb24yIClcblx0XHRxdWF0ZXJuaW9uMi5zZXRGcm9tQXhpc0FuZ2xlKCBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgMSApLCBAdGFyZ2V0TG9va0F0LnogKTtcblx0XHRxdWF0ZXJuaW9uLm11bHRpcGx5KCBxdWF0ZXJuaW9uMiApXG5cdFx0cXVhdGVybmlvbi5ub3JtYWxpemUoKVxuXG5cdFx0IyByb3RhdGVRdWF0ZXJuaW9uID0gcm90YXRlTWF0cml4KHJvdGF0ZVN0YXJ0UG9pbnQsIHJvdGF0ZUVuZFBvaW50KTtcblx0XHQjIGN1clF1YXRlcm5pb24gPSBjdWJlLnF1YXRlcm5pb247XG5cdFx0IyBjdXJRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnMocm90YXRlUXVhdGVybmlvbiwgY3VyUXVhdGVybmlvbik7XG5cdFx0IyBjdXJRdWF0ZXJuaW9uLm5vcm1hbGl6ZSgpO1xuXHRcdCMgY3ViZS5zZXRSb3RhdGlvbkZyb21RdWF0ZXJuaW9uKGN1clF1YXRlcm5pb24pO1xuXG5cdFx0Zm9yIGwgaW4gQGxpZ2h0c1xuXHRcdFx0bC51cGRhdGUoZHQvMylcblx0XHRcdGwuX29wYWNpdHkgPSBAb3BhY2l0eVxuXHRcdFx0bC5zZXRSb3RhdGlvbkZyb21RdWF0ZXJuaW9uKHF1YXRlcm5pb24pXG5cdFx0XHQjIGNvbnNvbGUubG9nKGwucm90YXRpb24pXG5cdFx0XHQjIGNvbnNvbGUubG9nKEB0YXJnZXRMb29rQXQpXG5cdFx0XHQjIGwucm90YXRpb24ueCA9IEB0YXJnZXRMb29rQXQueFxuXHRcdFx0IyBsLnJvdGF0aW9uLnkgPSBAdGFyZ2V0TG9va0F0Lnlcblx0XHRcdCMgbC5yb3RhdGlvbi56ID0gQHRhcmdldExvb2tBdC56XG5cdFx0cmV0dXJuIl19