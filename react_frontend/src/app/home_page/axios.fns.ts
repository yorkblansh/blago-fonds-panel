import { API } from 'api/CONSTS';
import axios from 'axios';

export interface IgetHomePageData {
   (cb: (res: { data: { organizes: any[] } }) => void): void;
}

interface IsendForm {
   (props: { data: any, path: keyof typeof API }): void
}

export const getHomePageData: IgetHomePageData = (cb) => {
   axios
      .post('/home')
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
      .then((res) => { })
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
