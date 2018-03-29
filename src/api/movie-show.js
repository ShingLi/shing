import axios from 'axios';
import { commonParams } from './config';

// es6 的函数导出
// start ,count 为豆瓣规定的参数
export function getMovie(start,count){
    const url ='/api/v2/movie/in_theaters';
    // 浅拷贝 对象属性的合并
    // {}目标对象，commonParames 源对象

    const data = Object.assign({},commonParams,{
        start,
        count
    })

    return axios.get(url,{
                    params:data
                }).then(res=>{

                    return Promise.resolve(res.data);

                }).catch(err=>{
                    console.log("网络错误");
                })
            }
