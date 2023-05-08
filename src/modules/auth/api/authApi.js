import axios from 'axios'

const authApi = axios.create({
	baseURL:
		'https://identitytoolkit.googleapis.com/v1/accounts',
	params: {
		key: 'AIzaSyBk1Fuu9BOFAf94wA46rINMIK7kViXhK1w',
	},
})

export default authApi
