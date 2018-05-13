class BulletObject extends egret.DisplayObjectContainer {
    _bullet: egret.Bitmap;
    btype: IdentityType;
    isUse: boolean = false;
    _main: Main;
    _speed:number = 5;

    public constructor(main: Main) {
        super();
        this.width = 9;
        this.height = 21;
        this._main = main;
        this._bullet = new egret.Bitmap();
        this.addChild(this._bullet);
    }

    private onFrame (): void {
        if (this.isUse) {
            if (this.btype == IdentityType.ENEMY) {
                this.y += this._speed;
            } else {
                this.y -= this._speed;
                if (this.y <= 0) {
                    if (this.parent) {
                        this.parent.removeChild(this);
                        this.recycle();
                    }
                }
            }
        }
    }

    use(type: IdentityType, x: number, y: number) {
        this.isUse = true;
        this.x = x;
        this.y = y;
        this.btype = type;
        if (type == IdentityType.ENEMY) {
            this._bullet.texture = RES.getRes('bullet2_png');
        } else {
            this._bullet.texture = RES.getRes('bullet_png');
        }
        this._main.addChildAt(this, 10);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    }
    recycle() {
        this.isUse = false;
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    }


}