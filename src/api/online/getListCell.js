import axios from 'axios'
import { commonParams } from '../config';

export function getCellList(id){
	const url =`/api/v2/event/${id}`,
		data = Object.assign({},commonParams);


	return axios.get(url,{
		params:data
	}).then(res=>{
		return Promise.resolve(res.data)
	}).catch(err=>{
		console.log(err)
	})
}