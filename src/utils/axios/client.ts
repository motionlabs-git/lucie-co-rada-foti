import axios from 'axios'

export const axiosClient = axios.create({
	baseURL: process.env.AXIOS_CLIENT_BASE_URL!,
	timeout: 2000,
})
