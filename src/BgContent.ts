class BgContent extends egret.DisplayObjectContainer {
    public bgbitmap1: egret.Bitmap;
    public bgbitmap2: egret.Bitmap;
    public bgSpeed: number = 2;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    private init():void {
        let bg = RES.getRes('bg_png');
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
        this.bgbitmap2.y = - this.stage.$stageHeight;
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
    }
    private onEnterFrame(): void {
        this.bgbitmap1.y += this.bgSpeed;
        if (this.bgbitmap1.y > this.stage.stageHeight) {
            this.bgbitmap1.y = - this.stage.stageHeight;
        }
        this.bgbitmap2.y += this.bgSpeed;
        if (this.bgbitmap2.y > this.stage.stageHeight) {
            this.bgbitmap2.y = - this.stage.stageHeight;
        }
    }
}