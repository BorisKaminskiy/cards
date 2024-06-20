import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import cn from "classnames";
import styles from "./Portal.module.scss";

interface IPortal {
  children?: ReactNode;
  variant?: "loading";
}

const portal = document.getElementById("portal");

export const Portal: FC<IPortal> = ({ children, variant }) => {
  return portal
    ? createPortal(
        <div className={cn(styles.portal)}>
          {children}
        { variant === "loading" && <div className={ cn(styles.spiner) } />}
        </div>,
        portal
      )
    : null;
};
