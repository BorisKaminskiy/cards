import { FC } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import cn from 'classnames'
import styles from './Layout.module.scss'

const Layout: FC = () => {
  return (
    <div className={cn(styles.layout)}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
