import { sendForm } from 'app/home_page/axios.fns';

export const remove_data = (index: number | string) => {
   sendForm({ path: 'remove_data_api', data: { index } });
};
