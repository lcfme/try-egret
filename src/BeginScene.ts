class BeginScene extends egret.DisplayObjectContainer {
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    private init (): void {
        let begin = new egret.TextField();
        begin.text = "Click Begin";
        begin.size = 50;

        this.addChild(begin);
        begin.x = (this.stage.stageWidth - begin.width) / 2;
        begin.y = (this.stage.stageHeight - begin.height) / 2;
    }
}