import { DetailedHTMLProps, FC, ReactNode, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Htag.module.scss";
import { TColors } from '../../types/colors';

interface IHtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  tag: "h1" | "h2" | "h3" | "h4";
  color?: TColors;
  children: ReactNode;
  isUppercase?: boolean
}

const Htag: FC<IHtagProps> = ({
  tag,
  color = "inherit",
  children,
  isUppercase,
  ...props
}) => {
  switch (tag) {
    case "h1":
      return (
        <h1
          className={cn(styles[tag])}
          style={{
            color: `var(--${color})`,
            textTransform: isUppercase ? "uppercase" : "none",
          }}
          {...props}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={cn(styles[tag])}
          style={{
            color: `var(--${color})`,
            textTransform: isUppercase ? "uppercase" : "none",
          }}
          {...props}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={cn(styles[tag])}
          style={{
            color: `var(--${color})`,
            textTransform: isUppercase ? "uppercase" : "none",
          }}
          {...props}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={cn(styles[tag])}
          style={{
            color: `var(--${color})`,
            textTransform: isUppercase ? "uppercase" : "none",
          }}
          {...props}
        >
          {children}
        </h4>
      );
  }
};

export default Htag;
