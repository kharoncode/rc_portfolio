import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';
import styles from './rootLayout.module.css';
import Lorem from '@/components/lorem/Lorem';
import { useState } from 'react';

const percentage = (x: number, y: number) => {
   const container = document.querySelector(`.${styles.mainContainer}`);
   const width = container?.offsetWidth;
   const height = container?.offsetHeight;
   const left = Math.round((x * 100) / width);
   const h = Math.round((y * 100) / height);
   return `${left}% ${h}%`;
};

const RootLayout = () => {
   const [coordinate, setCoordinate] = useState('');
   return (
      <div className={styles.container}>
         <Header />
         <div className={styles.mainContainer}>
            <Lorem coordinate={coordinate} />
            <main
               onMouseMove={(e) => {
                  setCoordinate(percentage(e.clientX, e.clientY));
                  console.log(e.clientY);
               }}
            >
               <Outlet />
            </main>
         </div>
         <Footer />
      </div>
   );
};

export default RootLayout;
