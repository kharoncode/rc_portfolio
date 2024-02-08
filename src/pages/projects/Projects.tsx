import { Navigate, useParams } from 'react-router-dom';
import styles from './projects.module.css';
import { projectsList } from '@/data/projectsList';
import { projectsListT } from '../work/Work';

const Projects = () => {
   const { projectId } = useParams();
   const list: projectsListT = projectsList;
   const id = projectId ? projectId : '';
   if (!list[id]) {
      return <Navigate to={'/work'} />;
   }
   const data = list[id];
   return <div className={styles.container}>Projet {data.name}</div>;
};

export default Projects;
