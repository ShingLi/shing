import axios from "axios" ;
import { commonParams } from '../config' ;

export  function getBookFiction(start,count){
	const url ='/m/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=8',
		data = Object.assign({},commonParams ,{
			start,
			count
		});
	return axios.get(url,{
		// params:data
	}).then(res=>{
		return Promise.resolve(res.data)
	}).catch()
}