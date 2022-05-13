import { REST_API } from 'api/consts'
import { sendForm } from './axios.fns'

export const removeFromFavorite = (org_name: string | undefined, user_name: string) => {
	console.dir('SMTH REMOVED FROM FAVORITE')
	sendForm({ data: { org_name, user_name }, path: REST_API('/remove_from_favorite') })
}
