import { projectsList } from '@/data/projectsList';
import styles from './work.module.css';
import ProjectCard from '@/components/projectCard/ProjectCard';

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
         <h1 className={styles.title}>Work</h1>
         <div className={styles.contentContainer}>
            {Object.keys(list).map((key) => {
               return <ProjectCard key={key} data={list[key]} />;
            })}
         </div>
      </div>
   );
};

export default Work;
