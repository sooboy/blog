import { Render } from "../render";
import { elementOpen, elementClose, text } from "incremental-dom";
interface IItem {
    title: string;
    url: string;
    description: string;
    img: string;
}

type Items = Item[]

class Item extends Render implements IItem {
    constructor(
        public title: string,
        public url: string,
        public description: string,
        public img: string,
    ) { super() }

    public click() {
        window.location.href = this.url;
    }

    public render() {
        elementOpen("div", null, null,
            "style", {
                "margin-top": "20px",
                "background": "#efefef",
                "padding": "10px",
                "position": "relative"
            },
            "onclick", this.click.bind(this)
        )
        elementOpen("img", null, null,
            "src", this.img,
            "style", {
                width: "160px",
                height: "160px"
            }
        )
        elementClose("img")
        elementOpen("div",null,null,
            "style",{
                "margin-left":"20px",
                "position":"absolute",
                "display":"inline-block"
            }
        )
        elementOpen("p")
        text(this.title)
        elementClose("p")
        elementOpen("p")
        text(this.url)
        elementClose("p")
        elementOpen("p")
        text(this.description)
        elementClose("p")
        elementClose("div")

        elementClose("div")
    }
}

class List extends Render {
    constructor(
        public items: Items
    ) { super() }

    public render() {
        elementOpen("div",null,null,
            "style",{
                margin:"10px auto",
                width:"800px"
            }
        )
        this.items.forEach((item: Item) => {
            item.render()
        })
        elementClose("div")
    }
}


export {
    List,
    Item,
}