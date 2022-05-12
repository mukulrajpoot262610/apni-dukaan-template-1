import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }
})

// AUTH
export const GetBusinessDetails = (data) => api.post('/api/get-store', data)
export const GetBusinessProduct = (data) => api.post('/api/get-products', data)

export default api