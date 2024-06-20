import { RootState } from '../../store';

export const getAuth = (state: RootState) => {
	return state.auth.isAuth;
};
