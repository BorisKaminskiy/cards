import { IError, IErrorObjectRegistrationForm } from '../../../../types/errors'
import { IRegistrationFormProps } from '../../../../types/forms'

export class AuthFormValidation {
	errors: {
		name: IError,
		lastname: IError
		email: IError
		password: IError
	}
		
	constructor() {
		this.errors = {
			name: { isError: false, errorMessage: '' },
			lastname: { isError: false, errorMessage: '' },
			email: { isError: false, errorMessage: '' },
			password: { isError: false, errorMessage: '' },
			
		} 
	}

	checkValidity = (form: IRegistrationFormProps): IErrorObjectRegistrationForm => {
		Object.keys(form).forEach(item => {
			item === 'name' && this.checkName(form.name)
			item === 'lastname' && this.checkLastName(form.lastName)
			item === 'email' && this.checkEmail(form.email)
			item === 'password' && this.checkPassword(form.password, form.repeatPassword)
		})

		const currentErrors = Object.entries(this.errors).find(item => item[1].isError === true) ? true : false
	
		return {
			isErrors: currentErrors,
			errors: currentErrors ? this.errors  : null
				}
	}

	checkName = (val: string) => {
		if (val.length > 2) {
			this.errors.name.isError = false
			this.errors.name.errorMessage = ''

			return;
		}

		this.errors.name.isError = true
		this.errors.name.errorMessage = 'Поле обязательно для заполнения, минимум 2 символа'

		return;		
	}

	checkLastName = (val: string) => {
		if (val.length > 2) {
			this.errors.lastname.isError = false
			this.errors.lastname.errorMessage = ''
				
			return;
		}

		this.errors.lastname.isError = true
		this.errors.lastname.errorMessage = 'Поле обязательно для заполнения, минимум 2 символа'

		return;
	}

	checkEmail = (val: string) => {
		if (val.length === 0) {
			this.errors.email.isError = true
			this.errors.email.errorMessage = 'Поле обязательно для заполнения'
				
			return;
		}

		const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
		
		if (re.test(val)) {
			this.errors.email.isError = false
			this.errors.email.errorMessage = ''
				
			return;
		}

		this.errors.email.isError = true
		this.errors.email.errorMessage = 'Вы ввели неверный формат email'

		return;
	}

	checkPassword = (password: string, repeatPassword: string) => {
		if (password.length <= 7) {
			this.errors.password.isError = true
			this.errors.password.errorMessage = 'Поле обязательно для заполнения, минимум 8 символов'
				
			return;
		}
		
		if (password.length > 7 && password === repeatPassword) {
			this.errors.password.isError = false
			this.errors.password.errorMessage = ''
				
			return;
		}

		if (password !== repeatPassword) {
			this.errors.password.isError = true
			this.errors.password.errorMessage = 'Пароли не совпадают'
				
			return;
		}
	}
}

export const authFormValidation = new AuthFormValidation()




