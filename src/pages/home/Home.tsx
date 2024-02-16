import { useSelector } from 'react-redux';
import styles from './home.module.css';
import { getHome, getLangue } from '@/router/selectors';
import Smiley from '@/components/smiley/Smiley';
import Skills from '@/components/skills/Skills';

const Home = () => {
   const { title } = useSelector(getHome);
   const langue = useSelector(getLangue);
   const content = title[langue];
   return (
      <div className={`container ${styles.container}`}>
         <h1 className={`${styles.title} langue fade`}>
            <span className={styles.name}>{`{`}</span> Hello World{' '}
            <span className={styles.name}>{`}`}</span>
         </h1>
         <h2 className={`${styles.content} langue fade`}>
            <p>{content[0]}</p>{' '}
            <p>
               <span className={styles.name}>Rémi</span>,
            </p>
            <p>{content[1]}</p>
            <p className={styles.status}>
               <span className={styles.name}>{content[2]}</span>
               <Smiley />
            </p>
         </h2>
         <div className={styles.skillsContainer}>
            <Skills />
         </div>
      </div>
   );
};

export default Home;
