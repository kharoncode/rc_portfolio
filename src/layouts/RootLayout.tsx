import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';
import styles from './rootLayout.module.css';

const RootLayout = () => {
   return (
      <div className={styles.container}>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
};

export default RootLayout;
