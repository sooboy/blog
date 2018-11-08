import { Link, Header } from "./components/header";
import { List, Item } from './components/list';
import { Render } from './render';

let link = new Link("首页", "https://baidu.com")
let link2 = new Link("简介", "https://smm.cn")

let header = new Header([link, link2], "logo");

let item1 = new Item("title1", "url1", "description1", "http://sc.chinaz.com/Files/pic/indexpic/newtj1.jpg")
let item2 = new Item("title1", "url1", "description1", "http://pics.sc.chinaz.com/files/pic/pic9/201810/zzpic14795.jpg")
let item3 = new Item("title1", "url1", "description1", "http://pics.sc.chinaz.com/files/pic/pic9/201810/zzpic14501.jpg")
let item4 = new Item("title1", "url1", "description1", "http://pics.sc.chinaz.com/files/pic/pic9/201809/zzpic13993.jpg")

let list = new List([item1, item2, item3, item4])
class Index extends Render {
    public parent: Element = document.body;

    constructor(public dom: Render[]) {
        super()
    }
    public render() {
        this.dom.forEach((dom: Render) => {
            dom.render()
        })
    }
}

new Index([header, list]).patch()

