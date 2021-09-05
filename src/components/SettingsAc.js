import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SettingsAc = () => {
	const car = useSelector(state => state.car);
	const history = useHistory();
	return (
		<div className={'settings-ac'}>
			<div className={'settings-ac-top'}>
				<button onClick={() => history.push('/')}><i className="bx bx-menu-alt-left"/></button>
				<p>{car.model}</p>
				<button><i className="bx bx-user"></i></button>
			</div>

		</div>
	);
};

export default SettingsAc;