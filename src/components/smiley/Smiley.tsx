import { useSelector } from 'react-redux';
import styles from './smiley.module.css';
import { useEffect, useState } from 'react';
import { getSmileyList } from '@/router/selectors';

const Smiley = () => {
   const smileyList = useSelector(getSmileyList);
   const [smiley, setSmiley] = useState(
      smileyList[Math.floor(Math.random() * smileyList.length)]
   );
   useEffect(() => {
      const smileyTimeOut = setInterval(() => {
         setSmiley(smileyList[Math.floor(Math.random() * smileyList.length)]);
      }, 5000);
      return () => {
         clearInterval(smileyTimeOut);
      };
   }, [smileyList]);
   return <span className={styles.smiley}>{smiley}</span>;
};

export default Smiley;
