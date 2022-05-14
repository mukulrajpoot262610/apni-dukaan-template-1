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
export const AddAddress = (data) => api.post('/api/add-address', data)
export const PlaceOrder = (data) => api.post('/api/place-order', data)
export const Register = (data) => api.post('/api/register', data)
export const Login = (data) => api.post('/api/login', data)

export default api