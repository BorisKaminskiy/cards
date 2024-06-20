import { createSlice } from '@reduxjs/toolkit';

interface IAuth {
	id: number | null
}

const initialState: IAuth = {
	id: null 
}

const activeUser = createSlice({
	name: 'activeUser',
	initialState,
	reducers: {
		setId: (state, action) => {
			state.id = action.payload
		},
	}
})

export const { setId } = activeUser.actions
export default activeUser.reducer