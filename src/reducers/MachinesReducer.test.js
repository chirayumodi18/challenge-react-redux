import reducer, { initialState } from './MachinesReducer';
import * as actions from '../actions/actionTypes';
import {GET_MACHINES_BY_ID_REQUEST} from "../actions/actionTypes";
import {GET_MACHINES_BY_ID_SUCCESS} from "../actions/actionTypes";
import {GET_MACHINES_BY_ID_ERROR} from "../actions/actionTypes";
import {UPDATE_MACHINE_REQUEST} from "../actions/actionTypes";
import {UPDATE_MACHINE_SUCCESS} from "../actions/actionTypes";
import {UPDATE_MACHINE_ERROR} from "../actions/actionTypes";
import {WS_UPDATE_MACHINES_DATA} from "../actions/actionTypes";

describe('Machines reducer', () => {
	it('should return the initial state', () => {
		expect(reducer(initialState, {})).toEqual(initialState);
	});

	it('should handle GET_ALL_MACHINES_REQUEST', () => {
		const startAction = {
			type: actions.GET_ALL_MACHINES_REQUEST
		};
		expect(reducer(initialState, startAction)).toEqual({ ...initialState, loading: true });
	});

	it('should handle GET_ALL_MACHINES_SUCCESS', () => {
		const response = [{ id: '1', name: 'string', health: 10 }];
		const successAction = {
			type: actions.GET_ALL_MACHINES_SUCCESS,
			payload: response
		};
		expect(reducer(initialState, successAction)).toEqual({ ...initialState, data: response });
	});

	it('should handle GET_ALL_MACHINES_ERROR', () => {
		const updateAction = {
			type: actions.GET_ALL_MACHINES_ERROR,
			payload: 'error message',
		};
		expect(reducer(initialState, updateAction)).toEqual({ ...initialState, error: true, errorMessage: 'error message' });
	});

	it('should handle GET_MACHINES_BY_ID_REQUEST', () => {
		const startAction = {
			type: actions.GET_MACHINES_BY_ID_REQUEST
		};
		expect(reducer(initialState, startAction)).toEqual({ ...initialState, loading: true });
	});

	it('should handle GET_MACHINES_BY_ID_SUCCESS', () => {
		const response = { id: '1', name: 'string', health: 10 };
		const successAction = {
			type: actions.GET_MACHINES_BY_ID_SUCCESS,
			payload: response
		};
		expect(reducer(initialState, successAction)).toEqual({ ...initialState, data: [response] });
	});

	it('should handle GET_MACHINES_BY_ID_ERROR', () => {
		const updateAction = {
			type: actions.GET_MACHINES_BY_ID_ERROR,
			payload: 'error message',
		};
		expect(reducer(initialState, updateAction)).toEqual({ ...initialState, error: true, errorMessage: 'error message' });
	});

	it('should handle UPDATE_MACHINE_REQUEST', () => {
		const startAction = {
			type: actions.UPDATE_MACHINE_REQUEST
		};
		expect(reducer(initialState, startAction)).toEqual({ ...initialState, loading: true });
	});

	it('should handle UPDATE_MACHINE_SUCCESS', () => {
		const response = [{ id: '1', name: 'string', health: 10 }];
		const updatedResponse = { id: '1', name: 'string1', health: 10 };
		const successAction = {
			type: actions.UPDATE_MACHINE_SUCCESS,
			payload: updatedResponse
		};
		expect(reducer({ ...initialState, data: response }, successAction)).toEqual({ ...initialState, data: [updatedResponse] });
	});

	it('should handle UPDATE_MACHINE_ERROR', () => {
		const updateAction = {
			type: actions.UPDATE_MACHINE_ERROR,
			payload: 'error message',
		};
		expect(reducer(initialState, updateAction)).toEqual({ ...initialState, error: true, errorMessage: 'error message' });
	});

	it('should handle WS_UPDATE_MACHINES_DATA', () => {
		const response = [{ id: '1', name: 'string', health: 10 }];
		const updatedResponse = { id: '1', name: 'string', health: 20 };
		const successAction = {
			type: actions.WS_UPDATE_MACHINES_DATA,
			payload: updatedResponse
		};
		expect(reducer({ ...initialState, data: response }, successAction)).toEqual({ ...initialState, data: [updatedResponse] });
	});
});