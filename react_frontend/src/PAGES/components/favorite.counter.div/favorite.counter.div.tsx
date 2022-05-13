import './favorite.counter.style.scss'

interface IFavoriteCounter_div {
	(props: { favorite_counter: string | number }): JSX.Element
}

export const FavoriteCounter_div: IFavoriteCounter_div = ({ favorite_counter }) => {
	return <div className="favorite-counter">{`Запись добавили в избранное - ${favorite_counter} раз`}</div>
}
