import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demos-c9521-default-rtdb.firebaseio.com',
  // timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
})

journalApi.interceptors.request.use((config) => {
  config.params = {
    auth: localStorage.getItem('idToken'),
  }

  return config
})

export default journalApi
