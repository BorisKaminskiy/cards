import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import Typography from "../Typography/Typography";
import { TIcons } from "../../types/icons";
import { TColors } from '../../types/colors';
import Icon from "../Icon/Icon";
import cn from "classnames";
import styles from "./Button.module.scss";

interface IButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: ReactNode;
  variant: "primary" | 'secondary' | "icon";
  iconName?: TIcons;
  color?: TColors;
  isUppercase?: boolean;
  isDisabled?: boolean;
  isFlexed?: boolean
}

const Button: FC<IButtonProps> = ({
  children,
  variant = "primary",
  iconName,
  color,
  isDisabled = false,
  isFlexed = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.root,
        styles[variant],
        color && styles[color],
        isDisabled && styles.disabled,
        isFlexed && styles.flexed
      )}
      disabled={isDisabled}
      {...props}
    >
      {variant !== "icon" && children && (
        <Typography variant='t16px400'>{children}</Typography>
      )}
      {variant === "icon" && iconName && <Icon name={iconName} />}
    </button>
  );
};

export default Button;
