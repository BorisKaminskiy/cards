import { FC, DetailedHTMLProps, HTMLAttributes } from "react";
import { IUserData } from "../../../../types/api";
import Typography from "../../../../ui/Typography/Typography";
import Icon from "../../../../ui/Icon/Icon";
import cn from "classnames";
import styles from "./Card.module.scss";

interface ICardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: IUserData;
  isLiked: boolean;
  onLikeClick: () => void;
  onCardClick: () => void;
}

const Card: FC<ICardProps> = ({
  value,
  isLiked,
  onCardClick,
  onLikeClick,
  ...props
}) => {
  return (
    <div onClick={onCardClick} className={cn(styles.root)} {...props}>
      <img
        src={value.avatar}
        alt='cardImage'
        className={cn(styles.card_image)}
      />
      <Typography variant='t20px400' color='black'>
        {value.first_name} {value.last_name}
      </Typography>
      <div
        onClick={(e) => {
          e.stopPropagation(), onLikeClick();
        }}
        className={cn(styles.like_container, isLiked && styles.liked)}
      >
        <Icon name='like' />
      </div>
    </div>
  );
};

export default Card;
