import styles from './work.module.css';
import ProjectCard from '@/components/projectCard/ProjectCard';
import { useSelector } from 'react-redux';
import { getLangue, getWork } from '@/router/selectors';

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
   const { title, projects } = useSelector(getWork);
   const langue = useSelector(getLangue);
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>{title[langue]}</h1>
         <div className={styles.contentContainer}>
            {Object.keys(projects).map((key) => {
               return (
                  <ProjectCard key={key} data={projects[key]} langue={langue} />
               );
            })}
         </div>
      </div>
   );
};

export default Work;
