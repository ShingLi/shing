import axios from 'axios'

export default function getCellList(start,count){
    const url = '/api/event/list?loc=108288',
            data = Object.assign({},{
                start,
                count
            });
// 这里使用的是ES6原生的promise对象，res = resolved
    return axios.get(url,{
        params:data
    }).then(res=>{
        //success
        console.log(res.data.events);
        return Promise.resolve(res.data)

    }).catch(error=>{
        //failure
        console.log("rejected")
    })
}
