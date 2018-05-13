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
var BgContent = (function (_super) {
    __extends(BgContent, _super);
    function BgContent() {
        var _this = _super.call(this) || this;
        _this.bgSpeed = 2;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    BgContent.prototype.init = function () {
        var bg = RES.getRes('bg_png');
        this.bgbitmap1 = new egret.Bitmap(bg);
        this.bgbitmap1.width = this.stage.stageWidth;
        this.bgbitmap1.height = this.stage.stageHeight;
        this.addChild(this.bgbitmap1);
        this.bgbitmap2 = new egret.Bitmap(bg);
        this.bgbitmap2.width = this.stage.stageWidth;
        this.bgbitmap2.height = this.stage.stageHeight;
        this.addChild(this.bgbitmap2);
        this.bgbitmap1.x = 0;
        this.bgbitmap1.y = 0;
        this.bgbitmap2.x = 0;
        this.bgbitmap2.y = -this.stage.$stageHeight;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    };
    BgContent.prototype.onEnterFrame = function () {
        this.bgbitmap1.y += this.bgSpeed;
        if (this.bgbitmap1.y > this.stage.stageHeight) {
            this.bgbitmap1.y = -this.stage.stageHeight;
        }
        this.bgbitmap2.y += this.bgSpeed;
        if (this.bgbitmap2.y > this.stage.stageHeight) {
            this.bgbitmap2.y = -this.stage.stageHeight;
        }
    };
    return BgContent;
}(egret.DisplayObjectContainer));
__reflect(BgContent.prototype, "BgContent");
//# sourceMappingURL=BgContent.js.map