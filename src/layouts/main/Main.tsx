import { Outlet } from 'react-router-dom';
import styles from './main.module.css';
import { useState } from 'react';
import Lorem from '@/components/lorem/Lorem';

const getDeviceType = () => {
   const ua = navigator.userAgent;
   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
   }
   if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
         ua
      )
   ) {
      return 'mobile';
   }
   return 'desktop';
};

const Main = () => {
   const [coordinate, setCoordinate] = useState('');
   const [isMouseHover, setIsMouseHover] = useState(false);
   return (
      <div className={styles.container}>
         <div className={styles.loremContainer}>
            <Lorem coordinate={coordinate} isMouseHover={isMouseHover} />
         </div>
         <main
            onMouseMove={(e) => {
               if (getDeviceType() === 'desktop') {
                  setCoordinate(`${e.clientX - 70}px ${e.clientY - 20}px`);
               }
            }}
            onMouseEnter={() => setIsMouseHover(true)}
            onMouseLeave={() => setIsMouseHover(false)}
         >
            <div className={styles.mainContenair}>
               <Outlet />
            </div>
         </main>
      </div>
   );
};

export default Main;
