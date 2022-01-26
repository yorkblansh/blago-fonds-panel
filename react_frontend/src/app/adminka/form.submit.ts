/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { FORM_INPUTS, FORM_NAME } from 'api/CONSTS';
import { sendFormModify } from 'app/home_page/axios.fns';
import axios from 'axios';

interface IformSubmit {
   (form_name: keyof typeof FORM_NAME): void;
}

export const formSubmit = (index: any) => {
   //    const form_inputs: (keyof typeof FORM_INPUTS)[] = <(keyof typeof FORM_INPUTS)[]>Object.keys(FORM_INPUTS);

   //    let form = document.forms.namedItem(FORM_NAME.modify_data_form);
   //    let dd: any = form_inputs.map((value) => {
   //       let _k: any = form?.elements.namedItem(value);
   //       return (dd[value] = _k);
   //    });
   //    let aa: any = form?.elements.namedItem(FORM_INPUTS.name);

   // let old_name: any = document.getElementById(`old_input_name_${index}`);
   // let old_link1: any = document.getElementById(`old_input_link1_${index}`);
   // let old_link2: any = document.getElementById(`old_input_link2_${index}`);
   // let old_info: any = document.getElementById(`old_input_info_${index}`);

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

   sendFormModify(objj);
};
