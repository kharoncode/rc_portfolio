import { projectsList } from '@/data/projectsList';
import styles from './work.module.css';
import ProjectCard from '@/components/projectCard/ProjectCard';
import { Link } from 'react-router-dom';

export type projectsListT = {
   [key: string]: {
      [key: string]: {
         id: string;
         name: string;
         description: string;
         tag: string[];
         github: string;
         link: string;
      };
   };
};

const Work = () => {
   const { personnal, school } = projectsList as projectsListT;
   return (
      <div className={styles.container}>
         <h2>Personal projects</h2>
         <div className={styles.projectsContainer}>
            {Object.keys(personnal).map((key) => {
               return (
                  <Link
                     className={styles.project}
                     key={key}
                     to={`/projects/personnal/${key}`}
                  >
                     <ProjectCard data={personnal[key]} />
                  </Link>
               );
            })}
         </div>
         <h2>School projects</h2>
         <div className={styles.projectsContainer}>
            {Object.keys(school).map((key) => {
               return (
                  <Link
                     className={styles.project}
                     key={key}
                     to={`/projects/school/${key}`}
                  >
                     <ProjectCard data={school[key]} />
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Work;
