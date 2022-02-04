import { REST_API } from 'api/consts';
import { getAccountProps } from 'app/getAccountProps';
import { sendForm } from './axios.fns';

export const add2favorite = (index: string | number) => {
	let { user_name } = getAccountProps();
	sendForm({ data: { index, user_name }, path: REST_API('/add_2_favorite') });
};
