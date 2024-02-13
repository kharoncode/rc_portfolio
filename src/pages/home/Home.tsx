import { useSelector } from 'react-redux';
import styles from './home.module.css';
import { getHome, getLangue } from '@/router/selectors';
import TextAnimation from '@/components/textAnimation/TextAnimation';

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
            <TextAnimation content={content[0]} />{' '}
            <span className={styles.name}>Rémi</span>,
            <TextAnimation content={content[1]} />
            <span className={styles.name}>
               <TextAnimation content={content[2]} />
            </span>
         </h2>
      </div>
   );
};

export default Home;
