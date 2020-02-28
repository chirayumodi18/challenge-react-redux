import axiosI from '../utils/axiosService.js';

export const getAllMachinesService = () => {
	return axiosI.get('http://localhost:8080/machines')
		.then(res => ({ data: res.data, error: false }))
		.catch(err => ({ error: true, err }));
};

export const getMachineByIdService = id => {
	return axiosI.get(`http://localhost:8080/machines/${id}`)
		.then(res => ({ data: res.data, error: false }))
		.catch(err => ({ error: true, err }));
};

export const updateMachineDataService = data => {
	return axiosI.put(`http://localhost:8080/machines/${data.id}`, data)
		.then(res => ({ data: res.data, error: false }))
		.catch(err => ({ error: true, err }));
};
