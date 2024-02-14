import { useSelector } from 'react-redux';
import styles from './home.module.css';
import { getHome, getLangue } from '@/router/selectors';

const Home = () => {
   const { title } = useSelector(getHome);
   const langue = useSelector(getLangue);
   const content = title[langue];
   return (
      <div className={`container`}>
         <h1 className={`${styles.title} langue fade`}>
            <span className={styles.name}>{`{`}</span> Hello World{' '}
            <span className={styles.name}>{`}`}</span>
         </h1>
         <h2 className={`${styles.subTitle} langue fade`}>
            {content[0]} <br /> <span className={styles.name}>Rémi</span>,<br />
            {content[1]}
            <br />
            <span className={styles.name}>{content[2]}</span> {`:)`}
         </h2>
      </div>
   );
};

export default Home;
