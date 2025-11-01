import { useSelector } from 'react-redux';
import styles from './error.module.css';
import { getError, getLangue } from '@/router/selectors';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Error = () => {
   const { title } = useSelector(getError);
   const langue = useSelector(getLangue);

   const location = useLocation();

   useEffect(() => {
      const externalRoutes = ['/cdl'];

      if (externalRoutes.some(route => location.pathname.startsWith(route))) {
         window.location.href = location.pathname;
      }
   }, [location]);

   return (
      <div className={`container ${styles.container}`}>
         <p
            className={`${styles.error} ${styles.glitch} ${styles.layers} page-title`}
            data-text={title[langue][1]}
         >
            <ruby>
               {title[langue][1]}
               <rt>{title[langue][0]}</rt>
            </ruby>
         </p>
      </div>
   );
};

export default Error;
