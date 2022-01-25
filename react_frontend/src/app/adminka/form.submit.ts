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
   let dd = document.getElementById(`input_name_${index}`);
   console.dir(dd);
   sendFormModify(dd);
};
