import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import auth from './slices/auth/auth';
import { registrationApi } from './api/registrationApi';
import { usersApi } from './api/usersApi';
import activeUser from './slices/activeUser/activeUser';

const rootReducer = combineReducers({
	[registrationApi.reducerPath]: registrationApi.reducer,
	[usersApi.reducerPath]: usersApi.reducer,
	activeUser,
	auth,
	
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) => 
			getDefaultMiddleware()
				.concat(registrationApi.middleware)
				.concat(usersApi.middleware)
			});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
