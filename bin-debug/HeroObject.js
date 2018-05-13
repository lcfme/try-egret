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
var HeroObject = (function (_super) {
    __extends(HeroObject, _super);
    function HeroObject() {
        var _this = _super.call(this) || this;
        _this._textures = [];
        _this._hero = new egret.Bitmap();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    HeroObject.prototype.init = function () {
        this._textures[0] = RES.getRes('plane_png');
        this._hero.texture = this._textures[0];
        this.width = 100;
        this.height = 122;
        this.addChild(this._hero);
    };
    return HeroObject;
}(egret.DisplayObjectContainer));
__reflect(HeroObject.prototype, "HeroObject");
//# sourceMappingURL=HeroObject.js.map