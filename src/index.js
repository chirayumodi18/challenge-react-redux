import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './utils/history';
import store from './utils/store';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>, document.getElementById('root'));
