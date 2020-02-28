import React, { useEffect } from 'react';
import { Table } from 'antd';
import { bindActionCreators } from 'redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllMachines } from '../../actions/MachineActions.js';
import Health from '../../Components/Health';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'IP Address',
		dataIndex: 'ip_address',
		key: 'ip_address'
	},
	{
		title: 'Health',
		dataIndex: 'health',
		key: 'health',
		// eslint-disable-next-line react/display-name
		render: health => <Health health={health} showInfo={false} strokeWidth={20} />
	},
	{
		title: 'Action',
		key: 'action',
		// eslint-disable-next-line react/display-name
		render: (machine) => (
			<span>
				<NavLink to={`/machines/${machine.id}`}>Edit</NavLink>
		  	</span>
		),
	},
];

export const Machines = ({ ...props }) => {
	const { getAllMachines, machines } = props;
	useEffect(() => {
		getAllMachines();
	}, []);
	return (
		<Table dataSource={machines} columns={columns} pagination={false} />
	);
};

Machines.propTypes = {
	getAllMachines: PropTypes.func,
	machines: PropTypes.array
};

const mapStateToProps = state => ({
	machines: state.MachinesReducer.data
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		getAllMachines
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Machines);
