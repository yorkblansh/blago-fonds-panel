import { API, MAIN_PATHES, REST_API } from 'api/consts';
import axios from 'axios';

export interface IgetItemsPageData {
	(
		props: { path: keyof typeof MAIN_PATHES; user_name?: string },
		cb: (res: { data: { organizes: any } }) => void,
	): void;
}

interface IsendForm {
	(props: { data?: any; path: keyof typeof API }, cb?: (res: any) => void): void;
}

export const get_SoftwareVersion = (cb: (props: any) => void) => {
	axios
		.get(REST_API('/get_version'))
		.then((res) => {
			console.dir(`GET VER ${res}`);
			console.info(res);
			cb(res.data.version);
		})
		.catch((err) => {
			console.dir(err);
		});
};

export const getItemsPageData: IgetItemsPageData = ({ path, user_name }, cb) => {
	axios
		.post(path, { user_name }) // home or favorites
		.then((res) => {
			console.dir(res);
			cb(res);
		})
		.catch((err) => {
			console.dir(err);
		});
};

export const sendForm: IsendForm = ({ data, path }, cb) => {
	axios
		.post(path, data)
		.then((res) => {
			if (cb) cb(res);
		})
		.catch((err) => console.error(err));
};

// export const goToAdminka = (): void => {
//    axios
//       .get('/adminka')
//       .then((res) => {
//          console.dir(res);
//       })
//       .catch((err) => {
//          console.dir(err);
//       });
// };
