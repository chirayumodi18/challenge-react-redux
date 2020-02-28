import {
	GET_ALL_MACHINES_REQUEST,
	GET_ALL_MACHINES_SUCCESS,
	GET_ALL_MACHINES_ERROR,
	GET_MACHINES_BY_ID_REQUEST,
	GET_MACHINES_BY_ID_SUCCESS,
	GET_MACHINES_BY_ID_ERROR,
	UPDATE_MACHINE_REQUEST,
	UPDATE_MACHINE_SUCCESS,
	UPDATE_MACHINE_ERROR,
	WS_UPDATE_MACHINES_DATA
} from './actionTypes';
import { getAllMachinesService, getMachineByIdService, updateMachineDataService } from '../services/MachineServices';

export const getAllMachines = () => dispatch => {
	dispatch({ type: GET_ALL_MACHINES_REQUEST });
	return getAllMachinesService().then((res) => {
		if (res.error) {
			dispatch({ type: GET_ALL_MACHINES_ERROR, payload: res.err });
		} else {
			dispatch({ type: GET_ALL_MACHINES_SUCCESS, payload: res.data });
		}
	}).catch(err => dispatch({ type: GET_ALL_MACHINES_ERROR, payload: err }));
};

export const getMachineById = id => dispatch => {
	dispatch({ type: GET_MACHINES_BY_ID_REQUEST });
	getMachineByIdService(id).then((res) => {
		if (res.error) {
			dispatch({ type: GET_MACHINES_BY_ID_ERROR, payload: res.err });
		} else {
			dispatch({ type: GET_MACHINES_BY_ID_SUCCESS, payload: res.data });
		}
	}).catch(err => dispatch({ type: GET_MACHINES_BY_ID_ERROR, payload: err }));
};

export const updateMachine = data => dispatch => {
	dispatch({ type: UPDATE_MACHINE_REQUEST });
	updateMachineDataService(data).then((res) => {
		if (res.error) {
			dispatch({ type: UPDATE_MACHINE_ERROR, payload: res.err });
		} else {
			dispatch({ type: UPDATE_MACHINE_SUCCESS, payload: res.data });
		}
	}).catch(err => dispatch({ type: UPDATE_MACHINE_ERROR, payload: err }));
};

export const updateMachinesData = data => dispatch => {
	let updateData;
	try {
		updateData = JSON.parse(data.data);
	} catch (e) {
		updateData = {};
	}
	dispatch({ type: WS_UPDATE_MACHINES_DATA, payload: updateData });
};
