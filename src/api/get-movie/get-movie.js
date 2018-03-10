import axios from 'axios';
import {commonParams} from '../config';
// 电影条目
export  function getMovieDetail(id){
	const url = `/api/movie/subject/${id}`,
			data = Object.assign({},commonParams)
	return axios.get(url,{
		params:data
	}).then(res=>{
		return Promise.resolve(res.data)
	}).catch(err=>{
		console.log(err);
	})
}
// 短评

export function getComments(id){
	const url = `/api/movie/subject/${id}/comments`,
			data = Object.assign({},commonParams);

	return axios.get(url,{
		params:data
	}).then(res=>{
		return Promise.resolve(res)
	}).catch(err=>{
		console.log(err)
	})
}