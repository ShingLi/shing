import axios from 'axios';
import {commonParams} from '../config.js';

export  function getMovieDetail(id){
	const url = '/api/movie/subject/'+id,
			data = Object.assign({},commonParams)
	return axios.get(url,{
		params:data
	}).then(res=>{
		return Promise.resolve(res.data)
	})
}