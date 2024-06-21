import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  RefObject,
  FormEvent,
  useState,
  useEffect,
} from "react";
import { useAppDispatch } from "../../../../store/store";
import { setAuth, setToken } from "../../../../store/slices/auth/auth";
import { useElementToogle } from "../../../../hooks/useSetElementToogle";
import { useWindowSize } from "../../../../hooks/useWindowResize";
import Button from "../../../../ui/Button/Button";
import Typography from "../../../../ui/Typography/Typography";
import { Portal } from "../Portal/Portal";
import { authFormValidation } from "./AuthForm.validation";
import { IRegistrationFormProps } from "../../../../types/forms";
import { IErrorObjectRegistrationForm } from "../../../../types/errors";
import Input from "../../../../ui/Input/Input";
import { useRegistrationMutation } from "../../../../store/api/registrationApi";
import { setTokenToLocalStorage } from "../../../../helpers/utils/locakStorage";
import { IRegistrationApiBody } from "../../../../types/api";
import cn from "classnames";
import styles from "./AuthForm.module.scss";

interface IAuthFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const initData = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
} as IRegistrationFormProps;

const errorsObject = {
  isErrors: true,
  errors: null,
};

const AuthForm: FC<IAuthFormProps> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const { isOpen, setOpen, elementRef } = useElementToogle();
  const [registrationForm, setRegistrationForm] =
    useState<IRegistrationFormProps>(initData);
  const [errors, setErrors] =
    useState<IErrorObjectRegistrationForm>(errorsObject);
  const width = useWindowSize().width;

  const [handler, { isLoading }] = useRegistrationMutation();

  const checkRegistration = async (data: IRegistrationApiBody) => {
    const response = await handler(JSON.stringify(data)).unwrap();
    return await response;
  };

  useEffect(() => {
    if (!errors.isErrors) {
      const requestBody = {
        username: "MikePayne",
        password: "myBeaut1fu11P@ssW0rd!",
      };

      checkRegistration(requestBody).then((result) => {
        if (result.token && typeof result.token === "string") {
          dispatch(setAuth(true));
          dispatch(setToken(result.token));
          setTokenToLocalStorage(result.token);
        } else {
          
          console.error(result);
        }
      }).catch( () => //Fake сервер лагает, не всегда отдает токен
        dispatch(setAuth(true))
      );
    }
  }, [errors]);

  const onToggleButtonClick = () => {
    setOpen(() => !isOpen);
  };

  const onChange = (key: string, value: string) => {
    if (key in registrationForm)
      setRegistrationForm((prevState) => ({ ...prevState, [key]: value }));
  };

  const onFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors(authFormValidation.checkValidity(registrationForm));
  };

  return (
    <div
      className={cn(styles.root)}
      ref={elementRef as RefObject<HTMLDivElement>}
    >
      {width && width > 768 ? (
        <Button onClick={onToggleButtonClick} variant='primary'>
          Вход
        </Button>
      ) : (
        <Button onClick={onToggleButtonClick} variant='icon' iconName='auth' />
      )}
      {isLoading && <Portal variant='loading' />}
      <form className={cn(styles.form, isOpen && styles.form_open)} {...props}>
        <Typography variant='t20px400' color='black'>
          Регистрация
        </Typography>
        <Input
          name='name'
          onInputChange={onChange}
          value={registrationForm.name}
          isError={errors.errors?.name.isError}
          error={errors.errors?.name.errorMessage}
          variant='primary'
          label='Фамилия'
          placeholder='Фамилия'
        />
        <Input
          name='lastName'
          onInputChange={onChange}
          value={registrationForm.lastName}
          isError={errors.errors?.lastname.isError}
          error={errors.errors?.lastname.errorMessage}
          variant='primary'
          label='Имя'
          placeholder='Имя'
        />
        <Input
          name='email'
          onInputChange={onChange}
          value={registrationForm.email}
          isError={errors.errors?.email.isError}
          error={errors.errors?.email.errorMessage}
          variant='primary'
          label='Электронная почта'
          placeholder='example@mail.ru'
        />
        <Input
          name='password'
          onInputChange={onChange}
          value={registrationForm.password}
          isError={errors.errors?.password.isError}
          error={errors.errors?.password.errorMessage}
          variant='primary'
          label='Пароль'
          isPasswordInput={true}
        />
        <Input
          name='repeatPassword'
          onInputChange={onChange}
          value={registrationForm.repeatPassword}
          isError={errors.errors?.password.isError}
          error={errors.errors?.password.errorMessage}
          variant='primary'
          label='Подтвердите пароль'
          isPasswordInput={true}
        />
        <div className={cn(styles.button_wrapper)}>
          <Button variant='secondary' isFlexed={true} onClick={onFormSubmit}>
            <Typography variant='t16px400' color='white'>
              Зарегистрироваться
            </Typography>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
