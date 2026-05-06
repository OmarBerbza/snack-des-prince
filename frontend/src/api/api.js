import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
})

export const getMenu = async () => {
  const { data } = await api.get('/menu')
  return data
}

export const createOrder = async (payload) => {
  const { data } = await api.post('/order', payload)
  return data
}

export default api
