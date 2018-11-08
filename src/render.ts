import { patch } from "incremental-dom";
abstract class Render {
    public parent?: Element;
    public abstract render();
    public patch() {
        patch(this.parent || document.body, this.render.bind(this));
    }
    public setParent(parent: Element) {
        this.parent = parent;
    }
}

export {
    Render,
};
