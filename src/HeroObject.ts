class HeroObject extends egret.DisplayObjectContainer {
    _textures: egret.Texture[] = [];
    _hero: egret.Bitmap = new egret.Bitmap();
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    private init () {
        this._textures[0] = RES.getRes('plane_png');
        this._hero.texture = this._textures[0];
        this.width = 100;
        this.height = 122;
        this.addChild(this._hero);
    }
}