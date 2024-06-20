import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
  useEffect,
} from "react";
import { useAppDispatch } from '../../../../store/store';
import { setId } from '../../../../store/slices/activeUser/activeUser';

import { useNavigate } from 'react-router';
import { useGetUsersQuery } from "../../../../store/api/usersApi";
import { useWindowSize } from "../../../../hooks/useWindowResize";
import { Portal } from "../../../layout/components/Portal/Portal";
import {
  getLikesFromLocalStorage,
  setLikesToLocalStorage,
} from "../../../../helpers/utils/locakStorage";
import Card from "../Card/Card";
import cn from "classnames";
import styles from "./CardsContainer.module.scss";
import Typography from '../../../../ui/Typography/Typography';
import Button from '../../../../ui/Button/Button';

interface ICardsContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const CardsContainer: FC<ICardsContainerProps> = ({ ...props }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const likesSet = new Set(getLikesFromLocalStorage());

  const [likes, setLikes] = useState<Set<number>>(likesSet);
  const [page, setPage] = useState<number>(1);
  const [per_page, setPer_page] = useState<number>(8);
  const { data, isFetching, isError } = useGetUsersQuery({ page, per_page });
	const width = useWindowSize().width;
	
	useEffect(() => {
		dispatch(setId(null))
	})

  useEffect(() => {
    width && width >= 1400 && setPer_page(8);
    width && width < 1400 && width >= 1080 && setPer_page(6);
    width && width < 1080 && setPer_page(4);
  }, [width]);

  const onLikeClick = (id: number) => () => {
    if (likes.has(id)) {
      likesSet.delete(id);
      setLikes(likesSet);
    } else {
      likesSet.add(id);
      setLikes(likesSet);
    }

    setLikesToLocalStorage(Array.from(likesSet));
  };

	const onCardClick = (id: number) => () => {
		dispatch(setId(id))
		navigate(`/user/${id}`)
	};
	
	const onPaginationClick = () => {
		(data?.total_pages && page < data.total_pages) ? setPage(page + 1) : setPage(1)  
	}

  return (
    <div className={cn(styles.root)} {...props}>
      {isFetching && <Portal variant='loading' />}
      {isError && (
        <Typography variant='t20px400'>Ошибка загрузки данных...</Typography>
      )}
      <div className={cn(styles.container)}>
        {data &&
          data.data.map((item) => (
            <Card
              onCardClick={onCardClick(item.id)}
              onLikeClick={onLikeClick(item.id)}
              isLiked={likes.has(item.id)}
              value={item}
              key={item.id}
            />
          ))}
			</div>
			<div className={ cn(styles.pagination) }>
				<Button onClick={onPaginationClick} variant='primary' color='black'>Показать еще</Button>
			</div>
    </div>
  );
};

export default CardsContainer;
