import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import styles from './rootLayout.module.css';
import Main from '@/components/main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '@/router/selectors';
import { fetchData } from './dataSlice';
import { AppDispatch } from '@/router/store';

const RootLayout = () => {
   const dispatch = useDispatch<AppDispatch>();
   const { loading, data } = useSelector(getData);
   useEffect(() => {
      if (Object.keys(data).length === 0) {
         dispatch(fetchData());
      }
   }, []);

   return (
      <>
         {loading ? (
            'loading'
         ) : (
            <div className={styles.container}>
               <Header />
               <Main />
               <Footer />
            </div>
         )}
      </>
   );
};

export default RootLayout;
