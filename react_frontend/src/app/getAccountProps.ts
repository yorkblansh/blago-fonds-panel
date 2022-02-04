import { env } from 'process';
import { getCookie } from './getCookie';

export const getAccountProps = () => {
	let user_name: string;
	let user_key: string;
	let cookies: any = getCookie();
	let is_authorized = false;
	if (process.env.NODE_ENV === 'production') {
		user_key = cookies?.user_key;
		user_name = cookies?.user_name;
		if (user_key) {
			is_authorized = true;
		} else {
			is_authorized = false;
		}
	} else if (process.env.NODE_ENV === 'development') {
		is_authorized = true;
		user_name = 'test_user';
		user_key = 'keykey';
	} else {
		user_key = 'keykey';
		is_authorized = false;
		user_name = 'test_user';
	}

	return { is_authorized, user_key, user_name };
};