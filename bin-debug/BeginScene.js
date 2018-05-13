var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BeginScene = (function (_super) {
    __extends(BeginScene, _super);
    function BeginScene() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    BeginScene.prototype.init = function () {
        var begin = new egret.TextField();
        begin.text = "Click Begin";
        begin.size = 50;
        this.addChild(begin);
        begin.x = (this.stage.stageWidth - begin.width) / 2;
        begin.y = (this.stage.stageHeight - begin.height) / 2;
    };
    return BeginScene;
}(egret.DisplayObjectContainer));
__reflect(BeginScene.prototype, "BeginScene");
//# sourceMappingURL=BeginScene.js.map