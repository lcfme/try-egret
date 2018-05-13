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
var BulletObject = (function (_super) {
    __extends(BulletObject, _super);
    function BulletObject(main) {
        var _this = _super.call(this) || this;
        _this.isUse = false;
        _this._speed = 5;
        _this.width = 9;
        _this.height = 21;
        _this._main = main;
        _this._bullet = new egret.Bitmap();
        _this.addChild(_this._bullet);
        return _this;
    }
    BulletObject.prototype.onFrame = function () {
        if (this.isUse) {
            if (this.btype == IdentityType.ENEMY) {
                this.y += this._speed;
            }
            else {
                this.y -= this._speed;
                if (this.y <= 0) {
                    if (this.parent) {
                        this.parent.removeChild(this);
                        this.recycle();
                    }
                }
            }
        }
    };
    BulletObject.prototype.use = function (type, x, y) {
        this.isUse = true;
        this.x = x;
        this.y = y;
        this.btype = type;
        if (type == IdentityType.ENEMY) {
            this._bullet.texture = RES.getRes('bullet2_png');
        }
        else {
            this._bullet.texture = RES.getRes('bullet_png');
        }
        this._main.addChildAt(this, 10);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    };
    BulletObject.prototype.recycle = function () {
        this.isUse = false;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    };
    return BulletObject;
}(egret.DisplayObjectContainer));
__reflect(BulletObject.prototype, "BulletObject");
//# sourceMappingURL=BulletObject.js.map