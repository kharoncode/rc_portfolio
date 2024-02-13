import styles from './projectCard.module.css';
import eyeIcone from '@/assets/icones/eye.svg';
import eyeSlashIcone from '@/assets/icones/eye_slash.svg';
import gitHubIcone from '@/assets/icones/githubProject.svg';
import { contentLangue } from '@/layouts/dataSlice';
import { Link } from 'react-router-dom';

type props = {
   langue: string;
   data: {
      id: string;
      name: string;
      description: contentLangue;
      tag: string[];
      github: string;
      link: string;
   };
};

const ProjectCard = ({ data, langue }: props) => {
   const { id, name, description, github, link } = data;
   return (
      <div className={styles.container}>
         <div className={styles.pictureContainer}>
            <img
               loading="lazy"
               className={styles.picture}
               src={`./pictures/projects/${id}.png`}
               alt="BF"
            />
            <div className={styles.hoverCard}>
               <Link to={github} target="_blank">
                  <img
                     className={`${styles.icone} ${styles.iconeLink}`}
                     src={gitHubIcone}
                     alt="GitHub"
                  />
               </Link>
               {link === '' ? (
                  <img
                     className={`${styles.icone} ${styles.eyeSlash}`}
                     src={eyeSlashIcone}
                     alt=""
                  />
               ) : (
                  <Link to={link} target="_blank">
                     <img
                        className={`${styles.icone} ${styles.iconeLink}`}
                        src={eyeIcone}
                        alt="Visite"
                     />
                  </Link>
               )}
            </div>
         </div>
         <div className={styles.info}>
            <h3>{name}</h3>
            <p>{description[langue]}</p>
         </div>
      </div>
   );
};

export default ProjectCard;
