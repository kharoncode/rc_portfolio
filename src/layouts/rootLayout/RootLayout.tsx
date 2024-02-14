import styles from './rootLayout.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, getTheme } from '@/router/selectors';
import { AppDispatch } from '@/router/store';
import { fetchData } from '../dataSlice';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';

const RootLayout = () => {
   const dispatch = useDispatch<AppDispatch>();
   const theme = useSelector(getTheme);
   const { loading, data } = useSelector(getData);
   if (data.init) {
      dispatch(fetchData());
   }
   useEffect(() => {
      document.querySelector('body')?.setAttribute('data-theme', theme);
   }, [theme]);
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
