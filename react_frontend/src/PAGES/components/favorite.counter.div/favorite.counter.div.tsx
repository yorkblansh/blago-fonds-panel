import './favorite.counter.style.scss'

interface FavoriteCounter_divProps {
	favorite_counter: string | number
}

export const FavoriteCounter_div = ({ favorite_counter }: FavoriteCounter_divProps) => {
	return (
		<div className="favorite-counter">
			<div>{favorite_counter}</div>
		</div>
	)
}
