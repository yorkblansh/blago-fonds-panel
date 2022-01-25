import { API } from 'api/CONSTS';
import axios from 'axios';

export interface IgetHomePageData {
   (cb: (res: { data: { organizes: any[] } }) => void): void;
}

export const getHomePageData: IgetHomePageData = (cb) => {
   axios
      .post('/home')
      .then((res) => {
         cb(res);
      })
      .catch((err) => {
         console.dir(err);
      });
};

export const sendFormModify = (data: any) => {
   axios
      .post(API.modify_data_api, data)
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
