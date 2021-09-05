import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
	name: 'car',
	initialState: {
		model: 'Mercedes EQC',
		coverage: 374,
		battery: 100,
		airConditioningTemperature: 20,
		isAirConditioningTurnOn: false,
		fanSpeed: 0,
		airConditioningProgram: 'auto',
		isOpen: false,
		isTrunkOpen: false,

	},
	reducers: {
		toggleIsOpen: (state) => {
			state.isOpen = !state.isOpen;
		},
		toggleIsTrunkOpen: (state) => {
			state.isTrunkOpen = !state.isTrunkOpen;
		},
		toggleIsAirConditioningTurnOn: (state) => {
			state.isAirConditioningTurnOn = !state.isAirConditioningTurnOn;
		},
	}
});
export const { toggleIsOpen, toggleIsTrunkOpen, toggleIsAirConditioningTurnOn } = carSlice.actions;
export default carSlice.reducer;