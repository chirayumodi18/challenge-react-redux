import axios from 'axios';

let url = '';
if (window.location.hostname === 'localhost' && process.env.NODE_ENV === 'development') {
	// local machine URL
} else {
	// live URL
}
let axiosI = axios.create({
	baseURL: url
});

const token = localStorage.getItem('token');
axiosI.interceptors.request.use((config) => {
	if ( token !== null ) {
		config.headers.authorization = token;
	}
	return config;
}, function (err) {
	return Promise.reject(err);
});

export default axiosI;
