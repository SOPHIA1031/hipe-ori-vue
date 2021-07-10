import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1'
axios.defaults.timeout = 5000
axios.defaults.header.post['Content-Type'] = 'multipart/form-data'

export default axios
