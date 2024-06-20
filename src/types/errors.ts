export interface IError {
	isError: boolean
	errorMessage: string
}

export interface IErrorObjectRegistrationForm {
  isErrors: boolean;
  errors: {
    name: IError;
    lastname: IError;
		email: IError;
		password: IError
		
  } | null;
}