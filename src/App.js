import React, {Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Routes from './Routes';
import { updateMachinesData } from './actions/MachineActions';
import './App.css';

function App ({ ...props }) {
	const { updateMachinesData } = props;
	useEffect(() => {
		const ws = new WebSocket('ws://localhost:1337');
		ws.onopen = () => {
			console.info('Yeah..!! The connection is established')
		};
		ws.onmessage = (data) => {
			updateMachinesData(data);
		};
	}, []);
	return (
		<Fragment>
			<div className='App'>
				<header className='App-header'>
					<img alt='logo' height='272' width='800' src='https://i.imgur.com/jcvsFKh.png' />
				</header>

				<nav className='App-nav'>
					<Link to='/'>Home</Link>
					<Link to='/machines'>Machines</Link>
				</nav>
				<Routes />
			</div>
		</Fragment>
	);
}

App.propTypes = {
	updateMachinesData: PropTypes.func
};

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => bindActionCreators({
	updateMachinesData
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
