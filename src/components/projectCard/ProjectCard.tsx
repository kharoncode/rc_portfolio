import styles from './projectCard.module.css';
import eyeIcone from '@/assets/icones/eye.svg';
import eyeSlashIcone from '@/assets/icones/eye_slash.svg';
import gitHubIcone from '@/assets/icones/githubProject.svg';
import { Link } from 'react-router-dom';

type props = {
   data: {
      id: string;
      name: string;
      description: string;
      tag: string[];
      github: string;
      link: string;
   };
};

const ProjectCard = ({ data }: props) => {
   const { id, name, description, github, link } = data;
   return (
      <div className={styles.container}>
         <div className={styles.pictureContainer}>
            <img
               className={styles.picture}
               src={`./pictures/${id}.png`}
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
            <p>{description}</p>
         </div>
      </div>
   );
};

export default ProjectCard;