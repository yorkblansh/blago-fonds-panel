import { API } from 'api/consts';
import axios from 'axios';

export interface IgetHomePageData {
   (cb: (res: { data: { organizes: any[] } }) => void): void;
}

interface IsendForm {
   (props: { data: any; path: keyof typeof API }): void;
}

export const getSoftwareVersion = (cb: (props: any) => void) => {
   axios
      .get('/get_version')
      .then((res) => {
         console.dir(`GET VER ${res}`);
         console.info(res);
         cb(res.data.version);
      })
      .catch((err) => {
         console.dir(err);
      });
};

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
