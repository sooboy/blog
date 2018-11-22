import { patch } from "incremental-dom";

abstract class ISet<T> {
	private items: T[];

	public getItems(): T[] {
		return this.items;
	}

	public setItems(items: T[]):this {
		this.items = null;
        this.items = items;
        return this;
	}

	public length(): number {
		return this.items.length;
	}

	public addItem(...item: T[]):this {
        this.items.push(...item);
        return this;
    }

    
    public Iterator(f:(item:T,index?:number)=>void):this{
         for (let i=0;i<this.length();i++){
              f(this.items[i],i)
         }
         return this;
	}
	
	// test to remote
}
abstract class Render<T = Render<any>> extends ISet<T> {
	public parent?: Element;
	public abstract render();
	public start() {
		patch(this.parent || document.body, this.render.bind(this));
	}
	public setParent(parent: Element) {
		this.parent = parent;
	}
}

export { Render };
