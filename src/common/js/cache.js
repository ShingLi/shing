import { saveToLocal , loadFromLocal  } from "./store"

const USER_ID = "licheng";
const COMMENT_KEY = '__comment__';//点赞的key
const COMMENT_MAX_LENGTH = 300;


// 储存评论人的id号
export function saveComment(id){
    // 保存标记的结果
    const maxLen = COMMENT_MAX_LENGTH;
    const comments = loadFromLocal(USER_ID,COMMENT_KEY,[]);//获取不到返回空数组
    console.log(comments);
    const index = comments.findIndex(item=>{
        return item===id
    });
    console.log(index);
    if(index === -1){
        comments.push(id)
    }else{
        comments.splice(index,1)
    }
    saveToLocal(USER_ID,COMMENT_KEY,comments);
    return comments;
}

export function loadComment(){
    return loadFromLocal(USER_ID, COMMENT_KEY, []);
}

export function saveIndex(id){
    
}

