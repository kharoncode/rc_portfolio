import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import styles from './rootLayout.module.css';
import Main from '@/components/main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, getTheme } from '@/router/selectors';
import { AppDispatch } from '@/router/store';
import { fetchData } from './dataSlice';

const RootLayout = () => {
   const dispatch = useDispatch<AppDispatch>();
   const theme = useSelector(getTheme);
   const { loading, data } = useSelector(getData);
   if (data.init) {
      dispatch(fetchData());
   }
   useEffect(() => {
      document.querySelector('body')?.setAttribute('data-theme', theme);
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
