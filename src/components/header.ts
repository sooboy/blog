import { elementClose, elementOpen, text } from "incremental-dom";
import { Render } from "../render";
interface ILinker {
    title: string;
    url: string;
}

type Linkers = ILinker[];

interface IHeader {
    logo: string;
}

class Link extends Render implements ILinker {
    constructor(
        public title: string,
        public url: string,
        public parent?:Element,
    ) {
        super();
    }

    public click() {
        window.location.href = this.url;
    }

    public render() {
        elementOpen("a", null, null,
            "style",{
                "color":"#888",
                "background":"#f8f8f8",
                "padding":"5px 10px 5px",
                "cursor":"pointer",
                "margin-left":"20px"
            },
            "onclick", this.click.bind(this),
        );
        text(this.title);
        elementClose("a");
    }
}

type Links = Link[];

class Header extends Render<Link> implements IHeader {
    constructor(
        public logo:string,
    ){super()}

    public render(){
        elementOpen("div",null,null,
            "style",{
                "background":"#efefef",
                "padding":"20px"
            }
        )
            this.Iterator((link:Link)=>{
                link.render()
            })
            elementOpen("span",null,null,
                "style",{
                    "margin-left":"10%"
                }
            )
                text("Regan's Blog - 记录一些生活琐事，记录一些技术")
            elementClose("span")
        elementClose("div")
    }
}

export {
    Link,
    Links,
    ILinker,
    Linkers,
    IHeader,
    Header
};
