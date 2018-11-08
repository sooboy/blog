
interface Linker {
    title:string;
    url:string;
}

type Linkers = Linker[];

interface Header{
    links:Linkers;
    Logo:string;
}

class Link implements Linker {
     constructor(
        public title:string,
        public url:string
     ){}

     click(){
         window.location.href = this.url;
     }
}

type Links =Link[]

export {
    Link,
    Links,
    Linker,
    Linkers,
    Header
}
