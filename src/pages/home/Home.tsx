import { useSelector } from 'react-redux';
import styles from './home.module.css';
import { getHome, getLangue } from '@/router/selectors';

const Home = () => {
   const { title } = useSelector(getHome);
   const langue = useSelector(getLangue);
   const content = title[langue];
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>
            <span className={styles.name}>{`{`}</span> Hello World{' '}
            <span className={styles.name}>{`}`}</span>
            <br />
            {content[0]} <span className={styles.name}>Rémi</span>, <br />
            {content[1]} <br />
            <span className={styles.name}>{content[2]}</span> !
         </h1>
      </div>
   );
};

export default Home;
