import axios from 'axios'
import { commonParams } from '../config';
export function searchMovie(q,start,count){
    let data = Object.assign({},commonParams ,{
        q,
        start,
        count
    })
    let url = '/api/movie/search'
    return axios.get(url,{
        params:data
    }).then(res=>{
        return Promise.resolve(res.data)
    }).catch()
}
