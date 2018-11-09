import { Link, Header } from "./components/header";
import { List, Item } from "./components/list";
import { Render } from "./render";

let link = new Link("首页", "https://baidu.com");
let link2 = new Link("简介", "https://smm.cn");

let header = new Header("logo").setItems([link, link2]);

let item1 = new Item(
	"30分钟精通React今年最劲爆的新特性",
	"https://baidu.com",
	`
	你还在为该使用无状态组件（Function）还是有状态组件（Class）而烦恼吗？
	——拥有了hooks，你再也不需要写Class了，你的所有组件都将是Function。
	你还在为搞不清使用哪个生命周期钩子函数而日夜难眠吗？
	——拥有了Hooks，生命周期钩子函数可以先丢一边了。
	你在还在为组件中的this指向而晕头转向吗？
	——既然Class都丢掉了，哪里还有this？你的人生第一次不再需要面对this。

	作者：zach5078
	链接：https://juejin.im/post/5be3ea136fb9a049f9121014
	来源：掘金
	著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
	`,
	"http://pics.sc.chinaz.com/files/pic/pic9/201811/zzpic15005.jpg"
);
let item2 = new Item(
	"一个最简单的Hooks",
	"https://baidu.com",
	`
	是不是简单多了！可以看到，Example变成了一个函数，但这个函数却有自己的状态（count），同时它还可以更新自己的状态（setCount）。这个函数之所以这么了不得，就是因为它注入了一个hook--useState，就是这个hook让我们的函数变成了一个有状态的函数。
	除了useState这个hook外，还有很多别的hook，比如useEffect提供了类似于componentDidMount等生命周期钩子的功能，useContext提供了上下文（context）的功能等等。

	作者：zach5078
	链接：https://juejin.im/post/5be3ea136fb9a049f9121014
	来源：掘金
	著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
	`,
	"http://pics.sc.chinaz.com/files/pic/pic9/201811/bpic9165.jpg"
);

let item3 = new Item(
	"30分钟精通React今年最劲爆的新特性",
	"https://baidu.com",
	`
	你还在为该使用无状态组件（Function）还是有状态组件（Class）而烦恼吗？
	——拥有了hooks，你再也不需要写Class了，你的所有组件都将是Function。
	你还在为搞不清使用哪个生命周期钩子函数而日夜难眠吗？
	——拥有了Hooks，生命周期钩子函数可以先丢一边了。
	你在还在为组件中的this指向而晕头转向吗？
	——既然Class都丢掉了，哪里还有this？你的人生第一次不再需要面对this。

	作者：zach5078
	链接：https://juejin.im/post/5be3ea136fb9a049f9121014
	来源：掘金
	著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
	`,
	"http://pics.sc.chinaz.com/files/pic/pic9/201811/zzpic15005.jpg"
);
let item4 = new Item(
	"一个最简单的Hooks",
	"https://baidu.com",
	`
	是不是简单多了！可以看到，Example变成了一个函数，但这个函数却有自己的状态（count），同时它还可以更新自己的状态（setCount）。这个函数之所以这么了不得，就是因为它注入了一个hook--useState，就是这个hook让我们的函数变成了一个有状态的函数。
	除了useState这个hook外，还有很多别的hook，比如useEffect提供了类似于componentDidMount等生命周期钩子的功能，useContext提供了上下文（context）的功能等等。

	作者：zach5078
	链接：https://juejin.im/post/5be3ea136fb9a049f9121014
	来源：掘金
	著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
	`,
	"http://pics.sc.chinaz.com/files/pic/pic9/201811/bpic9165.jpg"
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

let page = new Index().setItems([header, list])

page.start()

// let addItem = ()=>{
//    let item =new Item(Math.random().toString(), "url1", "description1", "http://pics.sc.chinaz.com/files/pic/pic9/201811/zzpic15005.jpg")
//    list.addItem(item)

//    page.start()
// }

// setInterval(addItem,100)
