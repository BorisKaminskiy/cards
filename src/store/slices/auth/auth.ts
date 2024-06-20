import { createSlice } from '@reduxjs/toolkit';
import { getTokenFromLocalStorage } from '../../../helpers/utils/locakStorage';

const token = getTokenFromLocalStorage() 

interface IAuth {
	isAuth: boolean
	token: string | null
}

const initialState: IAuth = {
	isAuth: !!token,
	token: token 
}

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: (state, action) => {
			state.isAuth = action.payload
		},
		setToken: (state, action) => {
			state.token = action.payload
		}
	}
})

export const { setAuth, setToken } = auth.actions
export default auth.reducer