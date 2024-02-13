import { useSelector } from 'react-redux';
import styles from './about.module.css';
import portrait from '@/assets/pictures/about.png';
import { getAbout, getLangue } from '@/router/selectors';
import TextAnimation from '@/components/textAnimation/TextAnimation';

const About = () => {
   const { content, title } = useSelector(getAbout);
   const langue = useSelector(getLangue);
   return (
      <div className={`${styles.container} container`}>
         <h1 className={styles.title}>
            <TextAnimation content={title[langue]} />
         </h1>
         <div className={styles.contentContainer}>
            <img
               src={portrait}
               alt="Portait de Rémi"
               className={styles.picture}
            />
            {content[langue].map((el, index) => (
               <TextAnimation
                  key={index}
                  style={styles.paragraph}
                  content={el}
               />
            ))}
         </div>
      </div>
   );
};

export default About;
