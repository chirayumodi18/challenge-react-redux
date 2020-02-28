import React from 'react';
import { shallow } from 'enzyme';
import Health from './index';


describe('Health component', () => {
	const props = {
		health: 15,
		showInfo: true
	}

	let component
	beforeEach(() => {
		component = shallow(<Health {...props} />);
	})

	it('should render children correctly', () => {
		const Progress = component.find('Progress');
		expect(Progress).toHaveLength(1);
	});
});