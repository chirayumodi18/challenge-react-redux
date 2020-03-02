import React, { useEffect, useState, useMemo } from 'react';
import { Input, Button } from 'antd';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Health from '../../Components/Health';
import { updateMachine, getMachineById } from '../../actions/MachineActions.js';
import './index.css';

export const UpdateMachine = ({ ...props }) => {
	const {
		machines, getMachineById, updateMachine, history, match: { params: { id = '' } = {} } = {}
	} = props;
	const machine = machines.find(machine => machine.id === id);
	const { name = '', health = 0 } = machine || {};

	const [machineName, setMachineName] = useState(name);
	const [error, setError] = useState('');

	useMemo(() => {
		setMachineName(name);
	}, [name]);

	useEffect(() => {
		if (!machine) {
			getMachineById(id);
		}
	}, []);

	const onNameChange = e => {
		const { value } = e.target;
		setMachineName(value);
	};

	const onSubmit = () => {
		if (machineName) {
			updateMachine({
				...machine,
				name: machineName
			});
			history.push('/machines');
		} else {
			setError('Please enter Machine Name.');
		}
	};
	return (
		<div className="updateMachine">
			<div className="formWrapper">
				<h1>{name}</h1>
				<div>
					<h3>Update Device</h3>
					<div>
						<span>Name:</span>
						<Input onChange={onNameChange} value={machineName} />
						{error && <span>{error}</span>}
					</div>
					<Button id="btnSubmit" onClick={onSubmit}>SUBMIT</Button>
				</div>
			</div>
			<div className="progressBarWrapper">
				<Health health={health} showInfo strokeWidth={21} />
			</div>
		</div>
	);
};

UpdateMachine.propTypes = {
	machines: PropTypes.array,
	getMachineById: PropTypes.func,
	updateMachine: PropTypes.func,
	history: PropTypes.object,
	match: PropTypes.object
};

const mapStateToProps = state => ({
	machines: state.MachinesReducer.data
});

const mapDispatchToProps = dispatch => bindActionCreators({
	updateMachine,
	getMachineById
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMachine);
