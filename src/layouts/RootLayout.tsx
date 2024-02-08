import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';
import styles from './rootLayout.module.css';
import Lorem from '@/components/lorem/Lorem';

const RootLayout = () => {
   return (
      <div className={styles.container}>
         <Header />
         <div className={styles.mainContainer}>
            <Lorem />
            <main>
               <Outlet />
            </main>
         </div>
         <Footer />
      </div>
   );
};

export default RootLayout;
