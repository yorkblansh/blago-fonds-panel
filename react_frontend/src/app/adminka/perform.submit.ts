/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { API, PERF_TYPE } from 'api/CONSTS';
import { sendForm } from 'app/home_page/axios.fns';

export const perform_submit = (index: any, perform_type: keyof typeof PERF_TYPE) => {
   let objj;
   let _path: keyof typeof API;
   if (perform_type === 'MODIFY') {
      _path = '/modify_data_api';
      let name: any = document.getElementById(`input_name_${index}`);
      let link1: any = document.getElementById(`input_link1_${index}`);
      let link2: any = document.getElementById(`input_link2_${index}`);
      let info: any = document.getElementById(`input_info_${index}`);
      objj = {
         name: name.value,
         link1: link1.value,
         link2: link2.value,
         info: info.value,
         index: index,
      };
   } else if (perform_type === 'REMOVE') {
      _path = '/remove_data_api';
      objj = { index };
   } else {
      _path = '/modify_data_api';
   }

   sendForm({ data: objj, path: _path });
};