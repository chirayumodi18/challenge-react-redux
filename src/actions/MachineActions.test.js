import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as actions from './MachineActions'
import * as types from './actionTypes'
import * as machinesReducer from '../reducers/MachinesReducer';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore({});

describe('async actions', () => {
	beforeEach(() => {
		store.clearActions();
	})
	it('should get all machines', () => {
		const response = [{ id: '1', name: 'string', health: 10 }];
		mock.onGet('/machines').reply(200, { data: response });
		const expectedActions = [
			{ type: types.GET_ALL_MACHINES_REQUEST },
			{ type: types.GET_ALL_MACHINES_SUCCESS, body: { data: response } }
		]
		store.dispatch(actions.getAllMachines()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		})
	});
	it('should get machine by Id', () => {
		const response = [{ id: '1', name: 'string', health: 10 }];
		mock.onGet('/machines/1').reply(200, { data: response });
		const expectedActions = [
			{ type: types.GET_MACHINES_BY_ID_REQUEST },
			{ type: types.GET_MACHINES_BY_ID_SUCCESS, body: { data: response } }
		]
		store.dispatch(actions.getAllMachines()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		})
	});
	it('should update machine', () => {
		const response = [{ id: '1', name: 'string', health: 10 }];
		mock.onPut('/machines/1').reply(200, { data: response });
		const expectedActions = [
			{ type: types.UPDATE_MACHINE_REQUEST },
			{ type: types.UPDATE_MACHINE_SUCCESS, body: { data: response } }
		]
		store.dispatch(actions.getAllMachines()).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		})
	});
	it('should update machine data', () => {
		const response = [{ id: '1', name: 'string', health: 10 }];
		const expectedActions = [
			{ type: types.WS_UPDATE_MACHINES_DATA, payload: response }
		];
		store.dispatch(actions.updateMachinesData({ data: JSON.stringify(response) }));
		expect(store.getActions()).toEqual(expectedActions);
	});
})