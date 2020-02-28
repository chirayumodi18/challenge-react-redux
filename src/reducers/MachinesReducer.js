import {
	GET_ALL_MACHINES_REQUEST,
	GET_ALL_MACHINES_SUCCESS,
	GET_ALL_MACHINES_ERROR,
	WS_UPDATE_MACHINES_DATA,
	GET_MACHINES_BY_ID_REQUEST,
	GET_MACHINES_BY_ID_SUCCESS,
	GET_MACHINES_BY_ID_ERROR,
	UPDATE_MACHINE_REQUEST,
	UPDATE_MACHINE_SUCCESS,
	UPDATE_MACHINE_ERROR
} from '../actions/actionTypes';
import { uniqBy } from 'lodash';

export const initialState = {
	data: [],
	artists: {},
	loading: false,
	error: false,
	errorMessage: null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_ALL_MACHINES_REQUEST:
			return { ...state, loading: true, error: false, errorMessage: null };
		case GET_ALL_MACHINES_SUCCESS:
			return { ...state, loading: false, data: payload };
		case GET_ALL_MACHINES_ERROR:
			return { ...state, loading: false, error: true, errorMessage: payload };
		case GET_MACHINES_BY_ID_REQUEST:
			return { ...state, loading: true, error: false, errorMessage: null };
		case GET_MACHINES_BY_ID_SUCCESS:
			const data = [...state.data, payload];
			return { ...state, loading: false, data: uniqBy(data) };
		case GET_MACHINES_BY_ID_ERROR:
			return { ...state, loading: false, error: true, errorMessage: payload };
		case UPDATE_MACHINE_REQUEST:
			return { ...state, loading: true, error: false, errorMessage: null };
		case UPDATE_MACHINE_SUCCESS: {
			const index = state.data.findIndex(machine => machine.id === payload.id);
			if (index === -1) {
				return {...state};
			}
			return {
				...state,
				data: [
					...state.data.slice(0, index),
					{...payload},
					...state.data.slice(index + 1)
				]
			};
		}
		case UPDATE_MACHINE_ERROR:
			return { ...state, loading: false, error: true, errorMessage: payload };
		case WS_UPDATE_MACHINES_DATA:
			const index = state.data.findIndex(machine => machine.id === payload.id);
			if (index === -1) { return { ...state }; }
			return {
				...state,
				data: [
					...state.data.slice(0, index),
					{ ...state.data[index], health: payload.health },
					...state.data.slice(index + 1)
				]
			};
		default:
			return state;
	}
};
