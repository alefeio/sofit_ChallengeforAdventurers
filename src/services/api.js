import axios from 'axios'

const api = axios.create({ baseURL: 'https://challenge-for-adventurers.herokuapp.com' })

export default api