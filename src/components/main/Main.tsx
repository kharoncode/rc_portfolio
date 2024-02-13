import { Outlet } from 'react-router-dom';
import Lorem from '../lorem/Lorem';
import styles from './main.module.css';
import { useState } from 'react';

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
               setCoordinate(`${e.clientX - 70}px ${e.clientY - 20}px`);
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
