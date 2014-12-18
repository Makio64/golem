var IceFragment,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

IceFragment = (function(_super) {
  __extends(IceFragment, _super);

  function IceFragment(type) {
    var geometry, height, material, rectShape, width;
    width = 120;
    height = 200;
    rectShape = new THREE.Shape();
    rectShape.moveTo(0, 0);
    rectShape.lineTo(size, 0);
    rectShape.lineTo(width / 2, height);
    rectShape.lineTo(0, 0);
    geometry = new THREE.ShapeGeometry(rectShape);
    material = new THREE.MeshBasicMaterial({
      color: 0xff0000
    });
    THREE.Mesh.call(this, geometry, material);
    return;
  }

  return IceFragment;

})(THREE.Mesh);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGVtLzNkL0ljZUZyYWdtZW50LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLFdBQUE7RUFBQTtpU0FBQTs7QUFBQTtBQUVDLGdDQUFBLENBQUE7O0FBQVksRUFBQSxxQkFBQyxJQUFELEdBQUE7QUFFWCxRQUFBLDRDQUFBO0FBQUEsSUFBQSxLQUFBLEdBQVEsR0FBUixDQUFBO0FBQUEsSUFDQSxNQUFBLEdBQVMsR0FEVCxDQUFBO0FBQUEsSUFHQSxTQUFBLEdBQWdCLElBQUEsS0FBSyxDQUFDLEtBQU4sQ0FBQSxDQUhoQixDQUFBO0FBQUEsSUFJQSxTQUFTLENBQUMsTUFBVixDQUFpQixDQUFqQixFQUFtQixDQUFuQixDQUpBLENBQUE7QUFBQSxJQUtBLFNBQVMsQ0FBQyxNQUFWLENBQWlCLElBQWpCLEVBQXNCLENBQXRCLENBTEEsQ0FBQTtBQUFBLElBTUEsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsS0FBQSxHQUFNLENBQXZCLEVBQXlCLE1BQXpCLENBTkEsQ0FBQTtBQUFBLElBT0EsU0FBUyxDQUFDLE1BQVYsQ0FBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsQ0FQQSxDQUFBO0FBQUEsSUFTQSxRQUFBLEdBQWUsSUFBQSxLQUFLLENBQUMsYUFBTixDQUFvQixTQUFwQixDQVRmLENBQUE7QUFBQSxJQVVBLFFBQUEsR0FBZSxJQUFBLEtBQUssQ0FBQyxpQkFBTixDQUF3QjtBQUFBLE1BQUMsS0FBQSxFQUFPLFFBQVI7S0FBeEIsQ0FWZixDQUFBO0FBQUEsSUFXQSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQVgsQ0FBZ0IsSUFBaEIsRUFBc0IsUUFBdEIsRUFBZ0MsUUFBaEMsQ0FYQSxDQUFBO0FBYUEsVUFBQSxDQWZXO0VBQUEsQ0FBWjs7cUJBQUE7O0dBRnlCLEtBQUssQ0FBQyxLQUFoQyxDQUFBIiwiZmlsZSI6ImdvbGVtLzNkL0ljZUZyYWdtZW50LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgSWNlRnJhZ21lbnQgZXh0ZW5kcyBUSFJFRS5NZXNoXG5cblx0Y29uc3RydWN0b3I6KHR5cGUpLT5cblxuXHRcdHdpZHRoID0gMTIwXG5cdFx0aGVpZ2h0ID0gMjAwXG5cblx0XHRyZWN0U2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKVxuXHRcdHJlY3RTaGFwZS5tb3ZlVG8oMCwwKVxuXHRcdHJlY3RTaGFwZS5saW5lVG8oc2l6ZSwwKVxuXHRcdHJlY3RTaGFwZS5saW5lVG8od2lkdGgvMixoZWlnaHQpXG5cdFx0cmVjdFNoYXBlLmxpbmVUbygwLDApXG5cblx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5TaGFwZUdlb21ldHJ5KHJlY3RTaGFwZSlcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7Y29sb3I6IDB4ZmYwMDAwfSlcblx0XHRUSFJFRS5NZXNoLmNhbGwodGhpcywgZ2VvbWV0cnksIG1hdGVyaWFsKVxuXG5cdFx0cmV0dXJuIl19