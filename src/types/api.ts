export interface IRegistrationApiBody {
	username: string,
  password: string
}

export interface IUsersRequest  {
	page: number,
	per_page: number
}

export interface IUserData {
	id: number,
	email: string,
	first_name: string,
	last_name: string,
	avatar: string
}

export interface IUserResponse {
	page: number,
	per_page: number, 
	total: number,
	total_pages: number,
	data: IUserData[],
}

export interface IActiveUserResponse {
    data: {
        id: number,
        email: string,
        first_name: string,
        last_name: string,
        avatar: string
    },
    support: {
        url: string,
        text: string
    }
}