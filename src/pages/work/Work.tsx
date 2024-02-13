import styles from './work.module.css';
import ProjectCard from '@/components/projectCard/ProjectCard';
import { useSelector } from 'react-redux';
import { getLangue, getWork } from '@/router/selectors';
import { useState } from 'react';
import TagFilter from '@/components/tagFilter/TagFilter';

const Work = () => {
   const { title, projects, tag } = useSelector(getWork);
   const langue = useSelector(getLangue);
   const [list, setList] = useState(Object.keys(projects));

   return (
      <div className={styles.container}>
         <h1 className={styles.title}>{title[langue]}</h1>
         <div className={styles.contentContainer}>
            <TagFilter setList={setList} />
            {list.map((key) => {
               return (
                  <ProjectCard key={key} data={projects[key]} langue={langue} />
               );
            })}
         </div>
      </div>
   );
};

export default Work;
