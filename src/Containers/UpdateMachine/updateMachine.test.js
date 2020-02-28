import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { UpdateMachine } from './index';

const mockStore = configureMockStore();
const store = mockStore({});

describe('Update machine component', () => {
	const props = {
		machines: [],
		getMachineById: () => {},
		history: { push: () => {} },
		updateMachine: jest.fn()
	}
	let component
	beforeEach(() => {
		component = mount(<Provider store={store}><UpdateMachine {...props} /></Provider>);
	})

	it('should render children correctly', () => {
		const input = component.find('Input');
		expect(input).toHaveLength(1);
		const btn = component.find('Button');
		expect(btn).toHaveLength(1);
		const health = component.find('Health')
		expect(health).toHaveLength(1);
	});

	it('should call updateMachine correctly', () => {
		const event = {
			target: { value: 'value' }
		};
		const input = component.find('Input');
		input.simulate('change', event)
		const btn = component.find('Button');
		expect(btn).toHaveLength(1);
		btn.simulate('click');
		expect(props.updateMachine).toHaveBeenCalled();
	});
});