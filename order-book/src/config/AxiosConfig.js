import axios from 'axios'

export function axiosWithoutAuth(){
	return axios.create({
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		}
	})
}