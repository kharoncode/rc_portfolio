import styles from './projectCard.module.css';
import eyeIcone from '@/assets/icones/eye.svg';
import eyeSlashIcone from '@/assets/icones/eye_slash.svg';
import gitHubIcone from '@/assets/icones/githubProject.svg';
import { project } from '@/layouts/dataSlice';
import { getLangue } from '@/router/selectors';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

type props = {
   data: project;
};

const ProjectCard = ({ data }: props) => {
   const { id, name, description, github, link, tag } = data;
   const langue = useSelector(getLangue);
   return (
      <div className={styles.container}>
         <div className={styles.pictureContainer}>
            <img
               loading="lazy"
               className={styles.picture}
               src={`./pictures/projects/${id}.png`}
               alt={`${name} Picture`}
            />
            <div className={styles.hoverCard}>
               <Link to={github} target="_blank">
                  <img
                     className={`${styles.icone} ${styles.iconeLink}`}
                     src={gitHubIcone}
                     alt="GitHub Link"
                  />
               </Link>
               {link === '' ? (
                  <img
                     className={`${styles.icone} ${styles.eyeSlash}`}
                     src={eyeSlashIcone}
                     alt="No Web Link"
                  />
               ) : (
                  <Link to={link} target="_blank">
                     <img
                        className={`${styles.icone} ${styles.iconeLink}`}
                        src={eyeIcone}
                        alt="Web Link"
                     />
                  </Link>
               )}
            </div>
         </div>
         <div className={`${styles.info} langue fade`}>
            <h3>{name}</h3>
            {description[langue]}
         </div>
         <div className={styles.tags}>
            {tag.map((el) => (
               <img
                  className={styles.tag}
                  key={el}
                  src={`./pictures/tags/${el}.svg`}
                  alt={el}
               />
            ))}
         </div>
      </div>
   );
};

export default ProjectCard;
