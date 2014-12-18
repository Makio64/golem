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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGVtL3NjZW5lcy9UZXN0U3RvbmVTY2VuZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQSxjQUFBO0VBQUE7O2lTQUFBOztBQUFBO0FBRUMsbUNBQUEsQ0FBQTs7QUFBWSxFQUFBLHdCQUFBLEdBQUE7QUFDWCwrREFBQSxDQUFBO0FBQUEsMkRBQUEsQ0FBQTtBQUFBLHlEQUFBLENBQUE7QUFBQSxRQUFBLEdBQUE7QUFBQSxJQUFBLElBQUMsQ0FBQSxLQUFELEdBQWEsSUFBQSxLQUFBLENBQUEsQ0FBYixDQUFBO0FBQUEsSUFDQSxPQUFPLENBQUMsR0FBUixDQUFhLElBQUMsQ0FBQSxLQUFkLENBREEsQ0FBQTtBQUFBLElBRUEsR0FBQSxHQUFVLElBQUEsR0FBRyxDQUFDLEdBQUosQ0FBQSxDQUZWLENBQUE7QUFBQSxJQUdBLEdBQUcsQ0FBQyxHQUFKLENBQVEsSUFBUixFQUFVLGVBQVYsQ0FIQSxDQUFBO0FBQUEsSUFJQSxHQUFHLENBQUMsR0FBSixDQUFRLElBQVIsRUFBVSxnQkFBVixDQUpBLENBQUE7QUFBQSxJQUtBLEdBQUcsQ0FBQyxHQUFKLENBQVEsSUFBUixFQUFVLGtCQUFWLENBTEEsQ0FBQTtBQU1BLFVBQUEsQ0FQVztFQUFBLENBQVo7O0FBQUEsMkJBU0EsYUFBQSxHQUFjLFNBQUEsR0FBQTtBQUNiLElBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZ0IsSUFBQyxDQUFBLEtBQWpCLENBQUEsQ0FBQTtBQUFBLElBQ0EsSUFBQyxDQUFBLEtBQUQsR0FBYSxJQUFBLEtBQUEsQ0FBTSxDQUFOLENBRGIsQ0FBQTtXQUVBLE9BQU8sQ0FBQyxHQUFSLENBQWEsSUFBQyxDQUFBLEtBQWQsRUFIYTtFQUFBLENBVGQsQ0FBQTs7QUFBQSwyQkFjQSxjQUFBLEdBQWUsU0FBQSxHQUFBO0FBQ2QsSUFBQSxPQUFPLENBQUMsTUFBUixDQUFnQixJQUFDLENBQUEsS0FBakIsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsS0FBRCxHQUFhLElBQUEsS0FBQSxDQUFNLENBQU4sQ0FEYixDQUFBO1dBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxJQUFDLENBQUEsS0FBZCxFQUhjO0VBQUEsQ0FkZixDQUFBOztBQUFBLDJCQW1CQSxnQkFBQSxHQUFpQixTQUFBLEdBQUE7QUFDaEIsSUFBQSxPQUFPLENBQUMsTUFBUixDQUFnQixJQUFDLENBQUEsS0FBakIsQ0FBQSxDQUFBO0FBQUEsSUFDQSxJQUFDLENBQUEsS0FBRCxHQUFhLElBQUEsS0FBQSxDQUFNLENBQU4sQ0FEYixDQUFBO1dBRUEsT0FBTyxDQUFDLEdBQVIsQ0FBYSxJQUFDLENBQUEsS0FBZCxFQUhnQjtFQUFBLENBbkJqQixDQUFBOzt3QkFBQTs7R0FGNEIsTUFBN0IsQ0FBQSIsImZpbGUiOiJnb2xlbS9zY2VuZXMvVGVzdFN0b25lU2NlbmUuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUZXN0U3RvbmVTY2VuZSBleHRlbmRzIFNjZW5lXG5cblx0Y29uc3RydWN0b3I6KCktPlxuXHRcdEBzdG9uZSA9IG5ldyBTdG9uZSgpIFxuXHRcdFN0YWdlM2QuYWRkKCBAc3RvbmUgKVxuXHRcdGd1aSA9IG5ldyBkYXQuR1VJKClcblx0XHRndWkuYWRkKEAsJ25ld0N1YmljU3RvbmUnKVxuXHRcdGd1aS5hZGQoQCwnbmV3Q2lyY2xlU3RvbmUnKVxuXHRcdGd1aS5hZGQoQCwnbmV3VHJpYW5nbGVTdG9uZScpXG5cdFx0cmV0dXJuXG5cblx0bmV3Q3ViaWNTdG9uZTooKT0+XG5cdFx0U3RhZ2UzZC5yZW1vdmUoIEBzdG9uZSApXHRcdFxuXHRcdEBzdG9uZSA9IG5ldyBTdG9uZSgwKSBcblx0XHRTdGFnZTNkLmFkZCggQHN0b25lIClcblxuXHRuZXdDaXJjbGVTdG9uZTooKT0+XG5cdFx0U3RhZ2UzZC5yZW1vdmUoIEBzdG9uZSApXHRcdFxuXHRcdEBzdG9uZSA9IG5ldyBTdG9uZSgxKSBcblx0XHRTdGFnZTNkLmFkZCggQHN0b25lIClcblxuXHRuZXdUcmlhbmdsZVN0b25lOigpPT5cblx0XHRTdGFnZTNkLnJlbW92ZSggQHN0b25lIClcdFx0XG5cdFx0QHN0b25lID0gbmV3IFN0b25lKDIpIFxuXHRcdFN0YWdlM2QuYWRkKCBAc3RvbmUgKSJdfQ==