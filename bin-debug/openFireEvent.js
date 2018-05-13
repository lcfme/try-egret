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
var OpenFireEvent = (function (_super) {
    __extends(OpenFireEvent, _super);
    function OpenFireEvent(type, bubbles, cancelable) {
        if (cancelable === void 0) { cancelable = false; }
        var _this = _super.call(this, type, bubbles, cancelable) || this;
        _this.btype = IdentityType.HERO;
        return _this;
    }
    OpenFireEvent.EventString = 'openfire';
    return OpenFireEvent;
}(egret.Event));
__reflect(OpenFireEvent.prototype, "OpenFireEvent");
//# sourceMappingURL=openFireEvent.js.map