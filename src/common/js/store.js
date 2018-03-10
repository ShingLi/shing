//
export function loadFromLocal(id,key,def){
    let userInfo =window.localStorage._doubanMovie_;
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
