import { createSlice } from '@reduxjs/toolkit';

const saveCarInLocalStorage = (state) => {
	localStorage.setItem('car', JSON.stringify(state));
};

const loadCarFromLocalStore = () => {

	return JSON.parse(localStorage.getItem('car') || `{"model": "Mercedes EQC",
\t"coverage": 374,
\t"battery": 100,
\t"isBatteryCharged": false,
\t"airConditioningTemperature": 20,
\t"isAirConditioningTurnOn": false,
\t"fanSpeed": 2,
\t"airConditioningProgram": "auto",
\t"isOpen": false,
\t"isTrunkOpen": false}`);
};


export const carSlice = createSlice({
		name: 'car',
		initialState: { car: loadCarFromLocalStore() },
		reducers: {
			toggleIsOpen: (state) => {
				state.car.isOpen = !state.car.isOpen;
				saveCarInLocalStorage(state.car);
			},
			toggleIsBatteryCharged: (state) => {
				state.car.isBatteryCharged = !state.car.isBatteryCharged;
			},

			toggleIsTrunkOpen: (state) => {
				state.car.isTrunkOpen = !state.car.isTrunkOpen;
				saveCarInLocalStorage(state.car);
			},
			toggleIsAirConditioningTurnOn: (state) => {
				state.car.isAirConditioningTurnOn = !state.car.isAirConditioningTurnOn;
				saveCarInLocalStorage(state.car);
			},
			setAirConditioningProgram: (state, action) => {
				const { program } = action.payload;
				state.car.airConditioningProgram = program;
				saveCarInLocalStorage(state.car);
			},
			setFanSpeed: (state, action) => {
				const { fanSpeed } = action.payload;
				state.car.fanSpeed = fanSpeed;
				saveCarInLocalStorage(state.car);
			},
			setAcTemperature: (state, action) => {
				const { temperature } = action.payload;
				state.car.airConditioningTemperature = temperature;
				saveCarInLocalStorage(state.car);
			},

			changeCoverage: (state, action) => {
				if (state.car.isOpen) state.car.coverage--;
				saveCarInLocalStorage(state.car);


			},
			decreaseBattery: (state, action) => {
				if (state.car.battery <= 0) state.car.battery = 0;
				else if (state.car.battery > 0 && state.car.isOpen) state.car.battery = state.car.battery - 0.374;


				saveCarInLocalStorage(state.car);
			},
			chargeBattery: (state) => {
				if (state.car.isBatteryCharged && state.car.battery < 100 && !state.car.isOpen) {
					state.car.battery = state.car.battery + 0.374;
					state.car.coverage++;
				}
				saveCarInLocalStorage(state.car);
			}

		}

	})
;
export const {
	toggleIsOpen,
	toggleIsBatteryCharged,
	toggleIsTrunkOpen,
	setFanSpeed,
	toggleIsAirConditioningTurnOn,
	setAirConditioningProgram,
	changeCoverage,
	decreaseBattery,
	chargeBattery,
	setAcTemperature
} = carSlice.actions;
export default carSlice.reducer;