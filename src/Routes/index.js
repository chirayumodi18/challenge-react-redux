import React, { Fragment, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router';

const Machines = lazy(() => import('../Containers/Machines'));
const UpdateMachines = lazy(() => import('../Containers/UpdateMachine'));

const Routes = () => {
	return (
		<Fragment>
			<Suspense fallback={() => <div>Loading...</div>}>
				<Switch>
					<Route exact path="/machines" component={Machines} />
					<Route exact path="/machines/:id" component={UpdateMachines} />
				</Switch>
			</Suspense>
		</Fragment>
	);
};

export default Routes;
