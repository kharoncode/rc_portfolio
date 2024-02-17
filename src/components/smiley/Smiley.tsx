import { useSelector } from 'react-redux';
import styles from './smiley.module.css';
import { useEffect, useState } from 'react';
import { getSmileyList } from '@/router/selectors';

const Smiley = () => {
   const { eyes, mouth } = useSelector(getSmileyList);
   const [smiley, setSmiley] = useState(
      `${eyes[Math.floor(Math.random() * eyes.length)]}${
         mouth[Math.floor(Math.random() * mouth.length)]
      }`
   );
   useEffect(() => {
      const smileyTimeOut = setInterval(() => {
         setSmiley(
            `${eyes[Math.floor(Math.random() * eyes.length)]}${
               mouth[Math.floor(Math.random() * mouth.length)]
            }`
         );
      }, 3000);
      return () => {
         clearInterval(smileyTimeOut);
      };
   }, [eyes, mouth]);
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
