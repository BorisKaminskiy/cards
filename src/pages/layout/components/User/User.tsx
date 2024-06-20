import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { IActiveUserResponse } from '../../../../types/api';
import Htag from '../../../../ui/Htag/Htag';
import Typography from '../../../../ui/Typography/Typography';
import cn from "classnames";
import styles from "./User.module.scss";

interface IUserProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  user: IActiveUserResponse
  }

const User: FC<IUserProps> = ({user, ...props }) => {
  return <div className={ cn(styles.root) } { ...props }>
    <img src={ user.data.avatar } className={ cn(styles.avatar) } alt="userAvatar" />
    <div className={ cn(styles.user_info) }>
      <Htag tag='h1' color={'white'}>{ user.data.first_name } { user.data.last_name }</Htag>
      <Typography variant='t32px400' color='white'>{user.data.email }</Typography>
    </div>
  </div>;
};

export default User;
