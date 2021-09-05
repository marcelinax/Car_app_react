import { createSlice } from '@reduxjs/toolkit';

export const carSlice = createSlice({
	name: 'car',
	initialState: {
		model: 'Mercedes EQC',
		isTurnOn: false,
		coverage: 374,
		battery: 100,
		airConditioningTemperature: 20,
		isAirConditioningTurnOn: false,
		fanSpeed: 0,
		airConditioningProgram: 'auto',
		isOpen: false
	},
	reducers: {
		toggleIsOpen: (state) => {
			state.isOpen = !state.isOpen;
		}
	}
});
export const { toggleIsOpen } = carSlice.actions;
export default carSlice.reducer;