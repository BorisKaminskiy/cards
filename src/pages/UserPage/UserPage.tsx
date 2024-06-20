import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { useAppSelector } from "../../store/store";
import { getActiveUserId } from "../../store/slices/activeUser/selectors";
import { useGetActiveUserQuery } from "../../store/api/usersApi";
import { Portal } from "../layout/components/Portal/Portal";
import Typography from "../../ui/Typography/Typography";
import Icon from '../../ui/Icon/Icon';
import cn from "classnames";
import styles from "./UserPage.module.scss";

interface IUserPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const UserPage: FC<IUserPageProps> = ({ ...props }) => {
  const userId = useAppSelector(getActiveUserId);
  const { data, isFetching, isError } = useGetActiveUserQuery(
    userId ? userId : null
  );

  return (
    <main className={cn(styles.root)} {...props}>
      {isFetching && <Portal variant='loading' />}
      {isError && (
        <Typography variant='t20px400'>Ошибка загрузки данных...</Typography>
      )}
      {data && (
        <>
          <div className={cn(styles.text)}>
            <Typography variant='t16px400' color='black' isJustify>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              ipsa animi atque accusantium illum quas cupiditate repellat
              delectus voluptatum veritatis, minus illo repellendus sed qui
              ipsam vitae. Sequi, at voluptate. Vel fugit mollitia assumenda
              atque ipsum maxime nulla animi dignissimos reiciendis adipisci
              accusamus laudantium, totam molestias ratione consectetur minus
              inventore ab. Dolorem velit ex veritatis odio nihil eligendi
              recusandae minus! Praesentium maiores rem hic beatae
              necessitatibus quaerat pariatur possimus unde consectetur nemo
              expedita vitae minus quod impedit itaque labore molestias magni,
              officiis obcaecati nihil. Assumenda laboriosam neque tenetur
              molestiae earum. Nostrum, beatae! Nobis velit nihil voluptatem rem
              cupiditate magni voluptates dolore facere, deleniti, libero
              officiis corrupti non consequuntur assumenda! Minima quas mollitia
              quisquam dolor, praesentium fugiat laudantium facere ab. Iure!
              Blanditiis rerum modi aperiam praesentium! Nostrum i ipsa,
              consequuntur assumenda eum necessitatibus eveniet at quae ipsum.
              Repudiandae blanditiis a nam voluptatibus dolor! Tempore laborum
              vero quisquam dla aspernatur veniam corrupti rerum vel fugit culpa
              suscipit nam dolor eos maiores repellendus? Quasi natus quae illo
              voluptas sint? A ratione et modi, facere veniam numquam animi sed
              expedita nesciunt iste ducimus, assumenda illum officia tempora
              qui recusandae quas optio sunt atque incidunt, facilis pariatur
              inventore sequi? Cumque, velit? Autem tenetur unde laborum ut
              vitae sit. Saepe officiis necessitatibus vitae natus eius magnam
              sed veritatis harum autem ipsa nisi corporis ducimus sunt
              architecto commodi at, quia odio reprehenderit assumenda?
            </Typography>
          </div>
          <div className={cn(styles.contacts)}>
            <div className={cn(styles.contact)}>
              <Icon name='phone' />
              <Typography variant='t16px400' color='black'>
                +7 (954) 333-44-55
              </Typography>
            </div>
            <div className={cn(styles.contact)}>
              <Icon name='email' />
              <Typography variant='t16px400' color='black'>
                {data.data.email}
              </Typography>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default UserPage;
