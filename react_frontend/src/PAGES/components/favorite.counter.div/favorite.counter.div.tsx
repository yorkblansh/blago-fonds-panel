import './favorite.counter.style.scss';

interface IFavoriteCounter_div {
	(props: { isRender: boolean; favorite_counter: string | number }): JSX.Element;
}

export const FavoriteCounter_div: IFavoriteCounter_div = ({ favorite_counter, isRender }) => {
	return (
		<div className="favorite-counter">{isRender && `Запись добавили в избранное - ${favorite_counter} раз`}</div>
	);
};
