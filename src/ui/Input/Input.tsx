import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  useState,
  FormEvent,
} from "react";
import Button from "../Button/Button";
import Typography from '../Typography/Typography';
import cn from "classnames";
import styles from "./Input.module.scss";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  variant: "primary";
  kind?: "text" | "email" | "password";
  name: string,
  onInputChange: (name: string, value: string) => void
  label?: string;
  isIcon?: boolean;
  isPasswordInput?: boolean;
  icon?: JSX.Element;
  isError?: boolean;
  error?: string;
}

const Input: FC<IInputProps> = ({
  variant = "primary",
  label,
  name,
  onInputChange,
  kind = "text",
  isIcon,
  icon,
  isPasswordInput = false,
  isError,
  error,
  ...props
}) => {
  const [isPassword, setIsPassword] = useState<boolean>(isPasswordInput);

  const changePasswordVisibility = (e: FormEvent) => {
    e.preventDefault();
    setIsPassword(!isPassword);
  };

  return (
    <label className={cn(styles.root)} aria-label={label}>
      {label && (
        <Typography variant='t16px400' color='black'>
          {label}
        </Typography>
      )}
      <input
        onChange={ (e) => {
          onInputChange(name, e.currentTarget.value)
        }}
        className={cn(styles.input, styles[variant], isError && styles.error)}
        type={isPassword ? "password" : kind}
        name={name}
        {...props}
      />
      {isIcon && <div className={cn(styles.icon_container)}>{icon}</div>}
      {isPasswordInput && (
        <div className={cn(styles.icon_container)}>
          <Button
            onClick={changePasswordVisibility}
            variant='icon'
            iconName={isPassword ? "passwordNotShow" : "passwordShow"}
          />
        </div>
      )}
      {isError && (
        <span className={cn(styles.error_message)}>
          <Typography variant='t10px400'>{error}</Typography>
        </span>
      )}
    </label>
  );
};

export default Input;
