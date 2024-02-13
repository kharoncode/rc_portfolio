import { Navigate, useParams } from 'react-router-dom';
import styles from './projects.module.css';
import { useSelector } from 'react-redux';
import { getWork } from '@/router/selectors';

const Projects = () => {
   const { projects } = useSelector(getWork);

   const { projectId } = useParams();
   const id = projectId ? projectId : '';
   if (!projects[id]) {
      return <Navigate to={'/work'} />;
   }
   const data = projects[id];
   return <div className={styles.container}>Projet {data.name}</div>;
};

export default Projects;
