import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import styles from './rootLayout.module.css';
import { useEffect, useState } from 'react';
import Main from '@/components/main/Main';

const RootLayout = () => {
   const [data, setData] = useState({});
   useEffect(() => {
      const fetchData = fetch('./data/data.json')
         .then((resulut) => resulut.json())
         .then((data) => {
            return data;
         });
      setData(fetchData);
   }, []);
   console.log(data);
   return (
      <div className={styles.container}>
         <Header />
         <Main />
         <Footer />
      </div>
   );
};

export default RootLayout;
