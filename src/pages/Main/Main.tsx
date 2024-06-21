import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { useAppSelector } from "../../store/store";
import { getAuth } from "../../store/slices/auth/selectors";
import Typography from "../../ui/Typography/Typography";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import cn from "classnames";
import styles from "./Main.module.scss";

interface IMainProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Main: FC<IMainProps> = ({ ...props }) => {
  const isAuth = useAppSelector(getAuth);

  return (
    <div className={cn(styles.root)} {...props}>
      {isAuth ? (
        <div>
          <CardsContainer />
        </div>
      ) : (
        <div className={cn(styles.info_label)}>
          <Typography variant='t20px400' color='black'>
            Необходимо зарегистрироваться
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Main;
