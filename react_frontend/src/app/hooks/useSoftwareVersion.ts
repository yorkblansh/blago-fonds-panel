import { useEffect, useState } from 'react';
import { getSoftwareVersion } from '../home_page/axios.fns';

export const useSoftwareVersion = () => {
   const [software_version, updateVER] = useState('');

   useEffect(() => {
      if (process.env.NODE_ENV === 'production') {
         getSoftwareVersion((a) => {
            updateVER(a.data.version);
         });
      } else if (process.env.NODE_ENV === 'development') {
         //  updateList(dev_data.organizes);
      }
   }, [updateVER]);
   return { software_version };
};
