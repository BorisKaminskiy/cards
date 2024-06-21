import { FC } from "react";
import { TIcons } from "../../types/icons";
import AuthIcon from "../../assets/icons/AuthIcon";
import ExitIcon from "../../assets/icons/ExitIcon";
import PasswordNotShowIcon from "../../assets/icons/PasswordNotShowIcon";
import PasswordShowIcon from "../../assets/icons/PasswordShowIcon";
import LikeIcon from "../../assets/icons/LikeIcon";
import BackIcon from "../../assets/icons/BackIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";
import EmailIcon from "../../assets/icons/EmailIcon";

interface IIconProps {
  name: TIcons;
}

const icons = {
  auth: <AuthIcon />,
  exit: <ExitIcon />,
  passwordNotShow: <PasswordNotShowIcon />,
  passwordShow: <PasswordShowIcon />,
  like: <LikeIcon />,
  back: <BackIcon />,
  phone: <PhoneIcon />,
  email: <EmailIcon />,
};

const Icon: FC<IIconProps> = ({ name }) => {
  return <>{name in icons && icons[name]}</>;
};

export default Icon;
