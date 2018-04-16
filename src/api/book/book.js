import axios from "axios" ;
import { commonParams } from '../config' ;

export  function getBookFunction(start,count){

	const url_1 ='/m/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=8',
		url_2  = '/m/rexxar/api/v2/subject_collection/book_nonfiction/items?start=0&count=8',
		data = Object.assign({},commonParams ,{
			start,
			count
		});
	return axios.all(
			[(axios.get(url_1)),(axios.get(url_2))]
		).then(axios.spread((acct,perms)=>{
			return Promise.resolve({
				acct,perms
			})
		})).catch(err=>{
			console.log(err)
		})
}