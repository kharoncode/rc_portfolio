import { useSelector } from 'react-redux';
import styles from './about.module.css';
import portrait from '@/assets/pictures/about.png';
import { getAbout, getLangue } from '@/router/selectors';

const About = () => {
   const { content, title } = useSelector(getAbout);
   const langue = useSelector(getLangue);
   return (
      <div className={`container`}>
         <h1 className={`page-title langue fade`}>{title[langue]}</h1>
         <div className={`${styles.contentContainer} content-container`}>
            <img
               src={portrait}
               alt="Portait de Rémi"
               className={styles.picture}
            />
            {content[langue].map((el, index) => (
               <p key={index} className={`${styles.paragraph} langue fade`}>
                  {el}
               </p>
            ))}
         </div>
      </div>
   );
};

export default About;
