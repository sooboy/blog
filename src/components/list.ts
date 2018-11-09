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
        elementOpen("h2",null,null,
        "style",{

        }
        )
        text(this.title)
        elementClose("h2")
        elementOpen("div",null,null,
        "style",{
            height: "80px",
            overflow: "hidden",
            "font-size": "14px",
            padding: "10px 60px 0px 0px",
            color: "#5f5f5f"
        }
        )
        text(this.description)
        elementClose("div")
        elementClose("div")

        elementClose("div")
    }
}

class List extends Render<Item> {
    constructor() { super() }

    public render() {
        elementOpen("div",null,null,
            "style",{
                margin:"10px auto",
                width:"800px"
            }
        )
        this.Iterator((item:Item,index:number)=>{
            elementOpen("div",String(index))
                item.render()
            elementClose("div")
        })
        elementClose("div")
    }
}


export {
    List,
    Item,
}