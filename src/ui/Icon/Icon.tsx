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

const Icon: FC<IIconProps> = ({ name }) => {
  return (
    <>
      {name === "auth" && <AuthIcon />}
      {name === "exit" && <ExitIcon />}
      {name === "passwordNotShow" && <PasswordNotShowIcon />}
      {name === "passwordShow" && <PasswordShowIcon />}
      {name === "like" && <LikeIcon />}
      {name === "back" && <BackIcon />}
      {name === "phone" && <PhoneIcon />}
      {name === "email" && <EmailIcon />}
    </>
  );
};

export default Icon;
