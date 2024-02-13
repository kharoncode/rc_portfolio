import { useSelector } from 'react-redux';
import styles from './about.module.css';
import portrait from '@/assets/pictures/about.png';
import { getAbout, getLangue } from '@/router/selectors';
import Paragraph from '@/components/paragraph/Paragraph';

const About = () => {
   const { content, title } = useSelector(getAbout);
   const langue = useSelector(getLangue);
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>{title[langue]}</h1>
         <div className={styles.contentContainer}>
            <img
               src={portrait}
               alt="Portait de Rémi"
               className={styles.picture}
            />
            {content[langue].map((el, index) => (
               <Paragraph key={index} classes={styles.paragraph} content={el} />
            ))}
         </div>
      </div>
   );
};

export default About;
