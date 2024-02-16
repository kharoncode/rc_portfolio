import { useSelector } from 'react-redux';
import styles from './error.module.css';
import { getError, getLangue } from '@/router/selectors';

const Error = () => {
   const { title } = useSelector(getError);
   const langue = useSelector(getLangue);
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
