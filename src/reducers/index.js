import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import MachinesReducer from './MachinesReducer';

const indexReducer = history => combineReducers({
	router: connectRouter(history),
	MachinesReducer
});

export default indexReducer;
