class OpenFireEvent extends egret.Event {
    public static EventString = 'openfire';

    btype: IdentityType = IdentityType.HERO;

    constructor (type: string, bubbles: boolean, cancelable: boolean = false) {
        super(type, bubbles, cancelable);
    }
}