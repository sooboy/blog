import { Link, Header } from "./components/header";
import { List, Item } from "./components/list";
import { Render } from "./render";

let link = new Link("首页", "https://baidu.com");
let link2 = new Link("简介", "https://smm.cn");

let header = new Header("logo").setItems([link, link2]);

let item1 = new Item(
	"title1",
	"url1",
	"description1",
	"http://pics.sc.chinaz.com/files/pic/pic9/201811/zzpic15005.jpg"
);
let item2 = new Item(
	"title1",
	"url1",
	"description1",
	"http://pics.sc.chinaz.com/files/pic/pic9/201811/bpic9165.jpg"
);
let item3 = new Item(
	"title1",
	"url1",
	"description1",
	"http://pics.sc.chinaz.com/files/pic/pic9/201810/zzpic14501.jpg"
);
let item4 = new Item(
	"title1",
	"url1",
	"description1",
	"http://pics.sc.chinaz.com/files/pic/pic9/201811/zzpic15016.jpg"
);

let list = new List().setItems([item1, item2, item3, item4]);


class Index extends Render {
	public parent: Element = document.body;

	constructor() {
		super();
	}

	public render() {
		this.Iterator((item: Render) => {
			item.render();
		});
	}
}

let page =new Index().setItems([header, list])

page.start()

// let addItem = ()=>{
//    let item =new Item(Math.random().toString(), "url1", "description1", "http://pics.sc.chinaz.com/files/pic/pic9/201811/zzpic15005.jpg")
//    list.addItem(item)

//    page.start()
// }

// setInterval(addItem,100)
