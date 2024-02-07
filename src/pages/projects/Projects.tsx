import { Navigate, useParams } from 'react-router-dom';
import styles from './projects.module.css';
import { projectsList } from '@/data/projectsList';
import { projectsListT } from '../work/Work';

const Projects = () => {
   const { category, id } = useParams();
   const list: projectsListT = projectsList;
   const cat = category ? category : '';
   const i = id ? id : '';
   if (!list[cat]) {
      return <Navigate to={'/work'} />;
   } else if (!list[cat][i]) {
      return <Navigate to={'/work'} />;
   }
   const data = list[cat][i];
   return <div className={styles.container}>Projet {data.name}</div>;
};

export default Projects;
