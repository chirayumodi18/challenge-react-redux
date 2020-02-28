import React from 'react';
import { mount } from 'enzyme';
import { Table } from 'antd';
import { Machines } from './index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';


const mockStore = configureMockStore();
const store = mockStore({});
describe('Machines component', () => {
	const props = {
		getAllMachines: () => {},
		machines: [{name: '', ipAddress: '', health: 15}]
	}

	let component
	beforeEach(() => {
		component = mount(<BrowserRouter><Provider store={store}><Machines {...props} /></Provider></BrowserRouter>);
	})

	it('should render children correctly', () => {
		const table = component.find(Table);
		expect(table).toHaveLength(1);
	});
});