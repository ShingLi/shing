//从缓存中读取数据
export function loadFromLocal(id,key,def){
    let userInfo =window.localStorage._doubanMovie_;//设置key值
    if (!userInfo) {
        return def;
    }
    userInfo = JSON.parse(userInfo)[id];
        if (!userInfo) {
            return def;
    }
    let ret = userInfo[key];
    return ret || def;
}
// 存储数据到缓存中去
export function saveToLocal(id,key,val){
    let userInfo = window.localStorage._doubanMovie_;
    if(!userInfo){
        userInfo = {},
        userInfo[id]={}
    }else {
        userInfo = JSON.parse(userInfo);
        if(!userInfo[id]){
            userInfo[id]={}
        }
    }
    userInfo[id][key] = val;
    window.localStorage._doubanMovie_ = JSON.stringify(userInfo)
}
