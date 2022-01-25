import { useState } from 'react';
import './input.modal.style.scss';
interface I_InputModal {
   (props: { Label: string; value: string }): JSX.Element;
}

export const InputModal: I_InputModal = ({ Label, value }) => {
   console.dir(value);

   let { _value, perform_value } = Perf_val(value);

   return (
      <div className="modal--input_wrapper--input">
         <div children={Label} />
         <input value={_value} onChange={(event) => perform_value(event.target.value)} />
      </div>
   );
};

const Perf_val = (value: string) => {
   let [__value, perform_value] = useState(value);
   let _value;

   if (__value === '' || __value === undefined) {
      _value = value;
   } else {
      _value = __value;
   }
   return { _value, perform_value };
};
