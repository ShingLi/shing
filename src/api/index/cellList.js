// 创建一个类封装数据
export default Class Celllist{
    constructor({id,title,image,content}){
        this.id = id;
        this.title = title;
        this.image = image;
        this.content = content;
    }
}

// 创建包含列表信息的类
export default function createCellList(){
    let ret = [];
    ret.forEach((cell,index)=>{
        ret.push(new Celllist({
            
        }))
    })
}
