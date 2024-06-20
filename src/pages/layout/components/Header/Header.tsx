import { FC, HTMLAttributes } from "react";
import { useAppSelector, useAppDispatch } from "../../../../store/store";
import { useWindowSize } from "../../../../hooks/useWindowResize";
import { getActiveUserId } from "../../../../store/slices/activeUser/selectors";
import { useGetActiveUserQuery } from "../../../../store/api/usersApi";
import { setId } from "../../../../store/slices/activeUser/activeUser";
import { useNavigate } from "react-router";
import Htag from "../../../../ui/Htag/Htag";
import Typography from "../../../../ui/Typography/Typography";
import Auth from "../Auth/Auth";
import User from "../User/User";
import Button from "../../../../ui/Button/Button";
import cn from "classnames";
import styles from "./Header.module.scss";

interface IHeader extends HTMLAttributes<HTMLElement> {}

const Header: FC<IHeader> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector(getActiveUserId);
  const navigate = useNavigate();
  const width = useWindowSize().width;
  const { data } = useGetActiveUserQuery(userId ? userId : null);

  const onBackButtonClick = () => {
    dispatch(setId(null));
    navigate("/");
  };

  return (
    <header className={cn(styles.header)} {...props}>
      {!userId && (
        <div className={cn(styles.title)}>
          <Htag tag='h1' color='white'>
            Наша команда
          </Htag>
          <Typography variant='t20px400' color='white' isCenter>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.
          </Typography>
        </div>
      )}
      {userId && data && <User user={data} />}
      {userId && (
        <div className={cn(styles.button_back)}>
          {width && width > 768 ? (
            <Button
              onClick={onBackButtonClick}
              variant='primary'
              color='gray_light'
            >
              Назад
            </Button>
          ) : (
            <Button
              onClick={onBackButtonClick}
              variant='icon'
              iconName='back'
            />
          )}
        </div>
      )}

      <div className={cn(styles.auth)}>
        <Auth />
      </div>
    </header>
  );
};

export default Header;
