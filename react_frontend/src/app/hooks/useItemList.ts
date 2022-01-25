import { useEffect, useState } from 'react';
import { getHomePageData } from '../home_page/axios.fns';
import { dev_data } from '../DEV_DATA';

export type Ilist = { name: string; link1: string; link2: string; info: string }[];

export const useItemList = () => {
   const [list, updateList] = useState([{ name: '', link1: '', link2: '', info: '' }]);

   useEffect(() => {
      if (process.env.NODE_ENV === 'production') {
         getHomePageData((a) => {
            updateList(a.data.organizes);
         });
      } else if (process.env.NODE_ENV === 'development') {
         updateList(dev_data);
      }
   }, [updateList]);
   return { list };
};
