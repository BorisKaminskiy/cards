import { RootState } from '../../store';

export const getActiveUserId = (state: RootState) => {
	return state.activeUser.id;
};
