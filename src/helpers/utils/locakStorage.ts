export const setTokenToLocalStorage = (value: string) => {
	localStorage.setItem('token', value )
}

export const getTokenFromLocalStorage = () => {
	return localStorage.getItem('token')
}

export const deleteTokenFromLocalStorage = (): void => {
	localStorage.removeItem('token')
}

export const getLikesFromLocalStorage = (): number[] | [] => {
	const likes = localStorage.getItem('likes')
		return likes ?  JSON.parse(likes) : []
}

export const setLikesToLocalStorage = (likes: number[]): void => {
	localStorage.setItem('likes', JSON.stringify(likes))
}