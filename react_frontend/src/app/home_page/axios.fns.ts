import { API, MAIN_PATHES, REST_API } from 'api/consts';
import axios from 'axios';

export interface IgetItemsPageData {
	(
		props: { path: keyof typeof MAIN_PATHES; data?: { user_name: string } },
		cb: (res: { data: { organizes: any[] } }) => void,
	): void;
}

interface IsendForm {
	(props: { data: any; path: keyof typeof API }): void;
}

export const getSoftwareVersion = (cb: (props: any) => void) => {
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

export const getItemsPageData: IgetItemsPageData = ({ path, data }, cb) => {
	axios
		.post(path, data) // home or favorites
		.then((res) => {
			console.dir(res);
			cb(res);
		})
		.catch((err) => {
			console.dir(err);
		});
};

export const sendForm: IsendForm = ({ data, path }) => {
	axios
		.post(path, data)
		.then((res) => {})
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
