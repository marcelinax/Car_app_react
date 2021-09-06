import { createSlice } from '@reduxjs/toolkit';

const saveCarInLocalStorage = (state) => {
	localStorage.setItem('car', JSON.stringify(state));
};

const loadCarFromLocalStore = () => {

	return JSON.parse(localStorage.getItem('car') || `{"model": "Mercedes EQC",
\t"coverage": 374,
\t"battery": 100,
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
			changeCoverage: (state, action) => {
				if (state.car.isOpen) state.car.coverage--;
				saveCarInLocalStorage(state.car);


			},
			changeBattery: (state, action) => {

			}
		}

	})
;
export const { toggleIsOpen, toggleIsTrunkOpen, setFanSpeed, toggleIsAirConditioningTurnOn, setAirConditioningProgram, changeCoverage } = carSlice.actions;
export default carSlice.reducer;