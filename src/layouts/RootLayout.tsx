import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';
import styles from './rootLayout.module.css';
import Lorem from '@/components/lorem/Lorem';
import { useState } from 'react';

const percentage = (x: number, y: number) => {
   const container = document.querySelector<HTMLElement>(
      `.${styles.mainContainer}`
   );
   let result = '';
   if (container) {
      const width = container?.offsetWidth;
      const height = container?.offsetHeight;
      const left = Math.round((x * 100) / width);
      const h = Math.round((y * 100) / height);
      result = `${left}% ${h}%`;
   }
   return result;
};

const RootLayout = () => {
   const [coordinate, setCoordinate] = useState('');
   const [isMouseHover, setIsMouseHover] = useState(false);
   return (
      <div className={styles.container}>
         <Header />
         <div className={styles.mainContainer}>
            <div className={styles.loremContainer}>
               <Lorem coordinate={coordinate} isMouseHover={isMouseHover} />
            </div>
            <main
               onMouseMove={(e) => {
                  setCoordinate(percentage(e.clientX, e.clientY));
               }}
               onMouseEnter={() => setIsMouseHover(true)}
               onMouseLeave={() => setIsMouseHover(false)}
            >
               <Outlet />
            </main>
         </div>
         <Footer />
      </div>
   );
};

export default RootLayout;
