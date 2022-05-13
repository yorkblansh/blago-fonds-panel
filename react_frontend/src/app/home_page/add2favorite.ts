import { REST_API } from 'api/consts'
import { sendForm } from './axios.fns'

export const add2favorite = (org_name: string | undefined, user_name: string) => {
	console.dir('SMTH ADDED TO FAVORITE')
	sendForm({ data: { org_name, user_name }, path: REST_API('/add_2_favorite') })
}
