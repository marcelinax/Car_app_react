import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsOpen } from '../state/carSlice';
import { useHistory } from 'react-router-dom';


const MainScreen = () => {
	const car = useSelector(state => state.car);
	const dispatch = useDispatch();
	const history = useHistory();

	return (
		<div className={'main-screen'}>

			<div className={'main-screen-top'}>
				<button onClick={() => history.push('/settings')}><i className="bx bx-cog"/></button>
			</div>
			<h3>{car.model}</h3>
			<div className={'main-screen-main'}>
				<div className={'main-screen-main-coverage-box'}>
					<h1>{car.coverage}</h1>
					<p>km</p>
				</div>
				<div className={'main-screen-main-car-box'} style={{ backgroundImage: `url(${car.isOpen ? `/media/car-turn-on.png` : `/media/car-turn-off.png`})` }}/>
			</div>
			<div className={'main-screen-bottom'}>
				<p>A/C is turned {car.isAirConditioningTurnOn ? 'on' : 'off'}</p>
				<div className={'main-screen-bottom-lock-box'}>
					<button onClick={() => dispatch(toggleIsOpen())}>{car.isOpen ? <i className="bx bx-lock-open"/> : <i className="bx bx-lock"/>}</button>
					<p>Tap to {car.isOpen ? 'close' : 'open'} the car</p></div>

			</div>
		</div>
	);
};

export default MainScreen;