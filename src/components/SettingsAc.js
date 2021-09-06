import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAirConditioningProgram, setFanSpeed, toggleIsAirConditioningTurnOn } from '../state/carSlice';

const SettingsAc = () => {
	const car = useSelector(state => state.car.car);

	const history = useHistory();
	const dispatch = useDispatch();


	return (
		<div className={'settings-ac'}>
			<div className={'settings-ac-top'}>
				<button onClick={() => history.push('/settings')}><i className="bx bx-menu-alt-left"/></button>
				<p>{car.model}</p>
				<button><i className="bx bx-user"></i></button>
			</div>
			<div className={'settings-ac-main'}>
				<div className={'settings-ac-main-top'}>
					<div className={'settings-ac-bottom-information-box'}>
						<p>A/C is {car.airConditioningTemperature ? 'ON' : 'OFF'}</p>
						<p>Currently {car.airConditioningTemperature} °C</p>
					</div>
					<button onClick={() => {
						dispatch(toggleIsAirConditioningTurnOn());
					}}><i className="bx bx-power-off"></i></button>
				</div>
				<div className={'settings-ac-main-temperature-box'}>

				</div>
				<div className={'settings-ac-main-fan-speed-box'}>
					<p>Fan speed</p>
					<div className={'settings-ac-main-fan-speed-box-input'}>
						<div className={'range-label'}>
							<p>1</p>
							<p>2</p>
							<p>3</p>
							<p>4</p>
							<p>5</p>
						</div>

						<input type={'range'} min={'1'} max={'5'} onChange={(e) => dispatch(setFanSpeed({ fanSpeed: +e.target.value }))} value={car.fanSpeed} step={1}/>

					</div>
				</div>
				<div className={'settings-ac-main-mode'}>
					<p>Mode</p>
					<div className={'settings-ac-main-modes'}>
						<div className={car.airConditioningProgram === 'auto' ? 'settings-ac-main-modes-item--active' : 'settings-ac-main-modes-item'}>
							<p>Auto</p>
							<button onClick={() => dispatch(setAirConditioningProgram({ program: 'auto' }))}>A</button>
						</div>
						<div className={car.airConditioningProgram === 'dry' ? 'settings-ac-main-modes-item--active' : 'settings-ac-main-modes-item'}>
							<p>Dry</p>
							<button onClick={() => dispatch(setAirConditioningProgram({ program: 'dry' }))}><i className="bx bx-water"></i></button>
						</div>
						<div className={car.airConditioningProgram === 'cool' ? 'settings-ac-main-modes-item--active' : 'settings-ac-main-modes-item'}>
							<p>Cool</p>
							<button onClick={() => dispatch(setAirConditioningProgram({ program: 'cool' }))}><i className="bx bxs-cog"></i></button>
						</div>
						<div className={car.airConditioningProgram === 'program' ? 'settings-ac-main-modes-item--active' : 'settings-ac-main-modes-item'}>
							<p>Program</p>
							<button onClick={() => dispatch(setAirConditioningProgram({ program: 'program' }))}><i className="bx bxs-stopwatch"></i></button>
						</div>
					</div>
				</div>


			</div>
		</div>

	)
		;
};

export default SettingsAc;