import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';
import styles from './rootLayout.module.css';
import Lorem from '@/components/lorem/Lorem';
import { useState } from 'react';

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
                  setCoordinate(`${e.clientX - 70}px ${e.clientY - 20}px`);
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
