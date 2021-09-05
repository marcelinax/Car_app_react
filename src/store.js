import { configureStore } from '@reduxjs/toolkit';
import carSlice from './state/carSlice';

export default configureStore({
	reducer: {
		car: carSlice
	},
});