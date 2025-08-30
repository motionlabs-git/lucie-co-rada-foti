import axios from 'axios'

export const axiosClient = axios.create({
	baseURL: process.env.AXIOS_CLIENT_BASE_URL!,
})

export const axiosFileClient = axios.create({
	baseURL: process.env.AXIOS_CLIENT_BASE_URL!,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
})
