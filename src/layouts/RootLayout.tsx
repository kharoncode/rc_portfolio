import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import styles from './rootLayout.module.css';
import Main from '@/components/main/Main';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, getTheme } from '@/router/selectors';
import { fetchData } from './dataSlice';
import { AppDispatch } from '@/router/store';

const RootLayout = () => {
   const dispatch = useDispatch<AppDispatch>();
   const { loading, data } = useSelector(getData);
   const theme = useSelector(getTheme);
   useEffect(() => {
      if (data.init) {
         dispatch(fetchData());
      }
      document.querySelector('body')?.setAttribute('data-theme', theme);
      /* eslint-disable */
   }, []);
   /* eslint-enable */
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
