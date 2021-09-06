import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { chargeBattery, toggleIsAirConditioningTurnOn, toggleIsBatteryCharged, toggleIsOpen, toggleIsTrunkOpen } from '../state/carSlice';

const Settings = () => {
	const car = useSelector(state => state.car.car);
	const history = useHistory();
	const dispatch = useDispatch();

	const chargeCarBattery = () => {
		setInterval(() => dispatch(chargeBattery()), 1000);
	};

	return (
		<div className={'settings'}>
			<div className={'settings-top'}>
				<button onClick={() => history.push('/')}><i className="bx bx-menu-alt-left"/></button>
				<p>{car.model}</p>
				<button><i className="bx bx-user"></i></button>
			</div>
			<div className={'settings-car-box'}
					 style={{ backgroundImage: `url(${car.isOpen ? `/media/settings-car-turn-on.png` : `/media/settings-car-turn-off.png`})` }}/>
			<div className={'settings-main'}>
				<div className={'settings-main-status'}>
					<p>Status</p>
					<div className={'settings-main-status-box'}>
						<div className={'settings-main-status-box-item'}>
							<div className={'settings-main-status-box-item-category'}>
								<i className="bx bxs-battery bx-rotate-270"/>
								<p>Battery</p>
							</div>
							<p className={'value'}>{Math.ceil(car.battery)}%</p>
						</div>
						<div className={'settings-main-status-box-item'}>
							<div className={'settings-main-status-box-item-category'}>
								<i className="bx bxs-navigation"></i>
								<p>Range</p>
							</div>
							<p className={'value'}>{Math.ceil(car.coverage)} km</p>
						</div>
						<div className={'settings-main-status-box-item'}>
							<div className={'settings-main-status-box-item-category'}>
								<i className="bx bxs-thermometer"></i>
								<p>Temperature</p>
							</div>
							<p className={'value'}>{Math.round(car.airConditioningTemperature)} °C</p>
						</div>
					</div>
				</div>
				<div className={'settings-main-information'}>
					<p>Information</p>
					<div className={'settings-main-information-box'}>
						<div className={car.isOpen ? 'settings-main-information-box-item-turn-on' : 'settings-main-information-box-item'}
								 onClick={() => dispatch(toggleIsOpen())}>
							<p className={'settings-main-information-box-item-category'}>Engine</p>
							<p>{car.isOpen ? 'Active mode' : 'Sleeping mode'}</p>
						</div>
						<div className={car.isBatteryCharged ? 'settings-main-information-box-item-turn-on' : 'settings-main-information-box-item'}
								 onClick={() => {
									 dispatch(toggleIsBatteryCharged());
									 chargeCarBattery();
								 }}>
							<p className={'settings-main-information-box-item-category'}>Battery</p>
							<p>{car.isBatteryCharged ? 'Battery is charging' : 'Battery charging disabled'}</p>
						</div>
						<div className={car.isAirConditioningTurnOn ? 'settings-main-information-box-item-turn-on' : 'settings-main-information-box-item'}
								 onClick={() => dispatch(toggleIsAirConditioningTurnOn())}>
							<p className={'settings-main-information-box-item-category'}>Climate</p>
							<p>{car.isAirConditioningTurnOn ? 'A/C is ON' : 'A/C is OFF'}</p>
						</div>
						<div className={car.isTrunkOpen ? 'settings-main-information-box-item-turn-on' : 'settings-main-information-box-item'}
								 onClick={() => dispatch(toggleIsTrunkOpen())}>
							<p className={'settings-main-information-box-item-category'}>Trunk</p>
							<p>{car.isTrunkOpen ? 'Trunk is OPEN' : 'Trunk is CLOSE'}</p>
						</div>

					</div>
				</div>
			</div>
			<div className={'settings-bottom'} onClick={() => history.push('/settings-ac')}
			>
				<div className={'settings-bottom-information-box'}>
					<p>A/C is {car.airConditioningTemperature ? 'ON' : 'OFF'}</p>
					<p>Tap to get more options</p>
				</div>
				<button onClick={(e) => {
					e.preventDefault();
					e.stopPropagation();
					dispatch(toggleIsAirConditioningTurnOn());
				}}><i className="bx bx-power-off"></i></button>

			</div>
		</div>

	)
		;
};
export default Settings;