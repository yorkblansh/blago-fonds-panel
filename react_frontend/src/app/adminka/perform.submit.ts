/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { PERF_TYPE } from 'api/CONSTS';
import { sendForm } from 'app/home_page/axios.fns';

export const perform_data = (index: any, perform_type: keyof typeof PERF_TYPE) => {
   //    const form_inputs: (keyof typeof FORM_INPUTS)[] = <(keyof typeof FORM_INPUTS)[]>Object.keys(FORM_INPUTS);
   let name: any = document.getElementById(`input_name_${index}`);
   let link1: any = document.getElementById(`input_link1_${index}`);
   let link2: any = document.getElementById(`input_link2_${index}`);
   let info: any = document.getElementById(`input_info_${index}`);
   let objj = {
      name: name.value,
      link1: link1.value,
      link2: link2.value,
      info: info.value,
      index: index,
   };

   sendForm({ data: objj, path: 'modify_data_api' });
};
