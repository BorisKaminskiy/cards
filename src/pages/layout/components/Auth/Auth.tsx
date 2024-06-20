import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/store";
import { useNavigate } from 'react-router';
import { getAuth } from "../../../../store/slices/auth/selectors";
import { setAuth, setToken } from "../../../../store/slices/auth/auth";
import { setId } from '../../../../store/slices/activeUser/activeUser';
import { deleteTokenFromLocalStorage } from "../../../../helpers/utils/locakStorage";
import { useWindowSize } from "../../../../hooks/useWindowResize";
import Button from "../../../../ui/Button/Button";
import AuthForm from "../AuthForm/AuthForm";
import cn from "classnames";
import styles from "./Auth.module.scss";

interface IAuthProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Auth: FC<IAuthProps> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const isAuth = useAppSelector(getAuth);
  const width = useWindowSize().width;

  const onExitClick = () => {
    dispatch(setAuth(false));
    dispatch(setToken(null));
    dispatch(setId(null))
    deleteTokenFromLocalStorage();
    navigate('/')
  };

  return (
    <div className={cn(styles.root)} {...props}>
      {isAuth &&
        (width && width > 768 ? (
          <Button onClick={onExitClick} variant='primary'>
            Выход
          </Button>
        ) : (
          <Button onClick={onExitClick} variant='icon' iconName='exit'></Button>
        ))}

      {!isAuth && <AuthForm />}
    </div>
  );
};

export default Auth;
