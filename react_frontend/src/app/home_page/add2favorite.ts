import { REST_API } from 'api/consts';
import { getAccountProps } from 'app/getAccountProps';
import { sendForm } from './axios.fns';

export const add2favorite = (org_name: string | undefined) => {
	let { user_name } = getAccountProps();
	sendForm({ data: { org_name, user_name }, path: REST_API('/add_2_favorite') });
};
