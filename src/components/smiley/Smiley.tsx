import { useSelector } from 'react-redux';
import styles from './smiley.module.css';
import { useEffect, useState } from 'react';
import { getSmileyList } from '@/router/selectors';

const Smiley = () => {
   const smileyList = useSelector(getSmileyList);
   const [smiley, setSmiley] = useState(
      `${smileyList.eyes[Math.floor(Math.random() * smileyList.eyes.length)]}${
         smileyList.mouth[Math.floor(Math.random() * smileyList.mouth.length)]
      }`
   );
   useEffect(() => {
      const smileyTimeOut = setInterval(() => {
         setSmiley(
            `${
               smileyList.eyes[
                  Math.floor(Math.random() * smileyList.eyes.length)
               ]
            }${
               smileyList.mouth[
                  Math.floor(Math.random() * smileyList.mouth.length)
               ]
            }`
         );
      }, 3000);
      return () => {
         clearInterval(smileyTimeOut);
      };
   }, [smileyList]);
   return (
      <span
         className={`${styles.smiley} ${styles.glitch} ${styles.layers}`}
         data-text={smiley}
      >
         <span>{smiley}</span>
      </span>
   );
};

export default Smiley;
