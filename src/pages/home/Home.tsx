import { useSelector } from 'react-redux';
import styles from './home.module.css';
import { getHome, getLangue } from '@/router/selectors';
import Paragraphe from '@/components/paragraphe/Paragraphe';

const Home = () => {
   const { title } = useSelector(getHome);
   const langue = useSelector(getLangue);
   const content = title[langue];
   return (
      <div className={`${styles.container} container`}>
         <h1 className={styles.title}>
            <span className={styles.name}>{`{`}</span> Hello World{' '}
            <span className={styles.name}>{`}`}</span>
         </h1>
         <h2 className={styles.subTitle}>
            <Paragraphe content={content[0]} />{' '}
            <span className={styles.name}>Rémi</span>,
            <Paragraphe content={content[1]} />
            <span className={styles.name}>
               <Paragraphe content={content[2]} />
            </span>
         </h2>
      </div>
   );
};

export default Home;
