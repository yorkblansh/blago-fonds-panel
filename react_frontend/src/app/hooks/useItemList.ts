import { useEffect, useState } from 'react';
import { getHomePageData } from '../home_page/axios.fns';
import { dev_data } from '../DEV_DATA';

export type Ilist_elements = {
   name: string;
   link1: string;
   link2: string;
   info: string;
};

export type Ilist = {
   name: Ilist_elements;
}[];

export const useItemList = () => {
   let bb = [{ name: { name: '', link1: '', link2: '', info: '' } }];
   const aa: any[] | never[] = [];
   const [list, updateList] = useState(bb);

   useEffect(() => {
      if (process.env.NODE_ENV === 'production') {
         getHomePageData((a) => {
            updateList(a.data.organizes);
         });
      } else if (process.env.NODE_ENV === 'development') {
         updateList(dev_data.organizes);
      }
   }, [updateList]);
   return { list };
};
