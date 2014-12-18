var TestStoneScene,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

TestStoneScene = (function(_super) {
  __extends(TestStoneScene, _super);

  function TestStoneScene() {
    this.newTriangleStone = __bind(this.newTriangleStone, this);
    this.newCircleStone = __bind(this.newCircleStone, this);
    this.newCubicStone = __bind(this.newCubicStone, this);
    var gui;
    this.stone = new Stone();
    Stage3d.add(this.stone);
    gui = new dat.GUI();
    gui.add(this, 'newCubicStone');
    gui.add(this, 'newCircleStone');
    gui.add(this, 'newTriangleStone');
    return;
  }

  TestStoneScene.prototype.newCubicStone = function() {
    Stage3d.remove(this.stone);
    this.stone = new Stone(0);
    return Stage3d.add(this.stone);
  };

  TestStoneScene.prototype.newCircleStone = function() {
    Stage3d.remove(this.stone);
    this.stone = new Stone(1);
    return Stage3d.add(this.stone);
  };

  TestStoneScene.prototype.newTriangleStone = function() {
    Stage3d.remove(this.stone);
    this.stone = new Stone(2);
    return Stage3d.add(this.stone);
  };

  return TestStoneScene;

})(Scene);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGVtL1Rlc3RTdG9uZVNjZW5lLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLGNBQUE7RUFBQTs7aVNBQUE7O0FBQUE7QUFFQyxtQ0FBQSxDQUFBOztBQUFZLEVBQUEsd0JBQUEsR0FBQTtBQUNYLCtEQUFBLENBQUE7QUFBQSwyREFBQSxDQUFBO0FBQUEseURBQUEsQ0FBQTtBQUFBLFFBQUEsR0FBQTtBQUFBLElBQUEsSUFBQyxDQUFBLEtBQUQsR0FBYSxJQUFBLEtBQUEsQ0FBQSxDQUFiLENBQUE7QUFBQSxJQUNBLE9BQU8sQ0FBQyxHQUFSLENBQWEsSUFBQyxDQUFBLEtBQWQsQ0FEQSxDQUFBO0FBQUEsSUFFQSxHQUFBLEdBQVUsSUFBQSxHQUFHLENBQUMsR0FBSixDQUFBLENBRlYsQ0FBQTtBQUFBLElBR0EsR0FBRyxDQUFDLEdBQUosQ0FBUSxJQUFSLEVBQVUsZUFBVixDQUhBLENBQUE7QUFBQSxJQUlBLEdBQUcsQ0FBQyxHQUFKLENBQVEsSUFBUixFQUFVLGdCQUFWLENBSkEsQ0FBQTtBQUFBLElBS0EsR0FBRyxDQUFDLEdBQUosQ0FBUSxJQUFSLEVBQVUsa0JBQVYsQ0FMQSxDQUFBO0FBTUEsVUFBQSxDQVBXO0VBQUEsQ0FBWjs7QUFBQSwyQkFTQSxhQUFBLEdBQWMsU0FBQSxHQUFBO0FBQ2IsSUFBQSxPQUFPLENBQUMsTUFBUixDQUFnQixJQUFDLENBQUEsS0FBakIsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsS0FBRCxHQUFhLElBQUEsS0FBQSxDQUFNLENBQU4sQ0FEYixDQUFBO1dBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxJQUFDLENBQUEsS0FBZCxFQUhhO0VBQUEsQ0FUZCxDQUFBOztBQUFBLDJCQWNBLGNBQUEsR0FBZSxTQUFBLEdBQUE7QUFDZCxJQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWdCLElBQUMsQ0FBQSxLQUFqQixDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxLQUFELEdBQWEsSUFBQSxLQUFBLENBQU0sQ0FBTixDQURiLENBQUE7V0FFQSxPQUFPLENBQUMsR0FBUixDQUFhLElBQUMsQ0FBQSxLQUFkLEVBSGM7RUFBQSxDQWRmLENBQUE7O0FBQUEsMkJBbUJBLGdCQUFBLEdBQWlCLFNBQUEsR0FBQTtBQUNoQixJQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWdCLElBQUMsQ0FBQSxLQUFqQixDQUFBLENBQUE7QUFBQSxJQUNBLElBQUMsQ0FBQSxLQUFELEdBQWEsSUFBQSxLQUFBLENBQU0sQ0FBTixDQURiLENBQUE7V0FFQSxPQUFPLENBQUMsR0FBUixDQUFhLElBQUMsQ0FBQSxLQUFkLEVBSGdCO0VBQUEsQ0FuQmpCLENBQUE7O3dCQUFBOztHQUY0QixNQUE3QixDQUFBIiwiZmlsZSI6ImdvbGVtL1Rlc3RTdG9uZVNjZW5lLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGVzdFN0b25lU2NlbmUgZXh0ZW5kcyBTY2VuZVxuXG5cdGNvbnN0cnVjdG9yOigpLT5cblx0XHRAc3RvbmUgPSBuZXcgU3RvbmUoKSBcblx0XHRTdGFnZTNkLmFkZCggQHN0b25lIClcblx0XHRndWkgPSBuZXcgZGF0LkdVSSgpXG5cdFx0Z3VpLmFkZChALCduZXdDdWJpY1N0b25lJylcblx0XHRndWkuYWRkKEAsJ25ld0NpcmNsZVN0b25lJylcblx0XHRndWkuYWRkKEAsJ25ld1RyaWFuZ2xlU3RvbmUnKVxuXHRcdHJldHVyblxuXG5cdG5ld0N1YmljU3RvbmU6KCk9PlxuXHRcdFN0YWdlM2QucmVtb3ZlKCBAc3RvbmUgKVx0XHRcblx0XHRAc3RvbmUgPSBuZXcgU3RvbmUoMCkgXG5cdFx0U3RhZ2UzZC5hZGQoIEBzdG9uZSApXG5cblx0bmV3Q2lyY2xlU3RvbmU6KCk9PlxuXHRcdFN0YWdlM2QucmVtb3ZlKCBAc3RvbmUgKVx0XHRcblx0XHRAc3RvbmUgPSBuZXcgU3RvbmUoMSkgXG5cdFx0U3RhZ2UzZC5hZGQoIEBzdG9uZSApXG5cblx0bmV3VHJpYW5nbGVTdG9uZTooKT0+XG5cdFx0U3RhZ2UzZC5yZW1vdmUoIEBzdG9uZSApXHRcdFxuXHRcdEBzdG9uZSA9IG5ldyBTdG9uZSgyKSBcblx0XHRTdGFnZTNkLmFkZCggQHN0b25lICkiXX0=