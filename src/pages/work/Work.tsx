import { projectsList } from '@/data/projectsList';
import styles from './work.module.css';
import ProjectCard from '@/components/projectCard/ProjectCard';
import { Link } from 'react-router-dom';

export type projectsListT = {
   [key: string]: {
      id: string;
      name: string;
      description: string;
      tag: string[];
      github: string;
      link: string;
   };
};

const Work = () => {
   const list = projectsList as projectsListT;
   return (
      <div className={styles.container}>
         <h2>Projects</h2>
         <div className={styles.projectsContainer}>
            {Object.keys(list).map((key) => {
               return (
                  <Link
                     className={styles.project}
                     key={key}
                     to={`/projects/${key}`}
                  >
                     <ProjectCard data={list[key]} />
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default Work;
