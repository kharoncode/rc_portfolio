import styles from './work.module.css';
import ProjectCard from '@/components/projectCard/ProjectCard';
import { useSelector } from 'react-redux';
import { getLangue, getWork } from '@/router/selectors';
import { useState } from 'react';
import TagFilter from '@/components/tagFilter/TagFilter';
import CategoryFilter from '@/components/categoryFilter/CategoryFilter';

const Work = () => {
   const { title, projects } = useSelector(getWork);
   const langue = useSelector(getLangue);
   const [list, setList] = useState(Object.keys(projects));
   const [tagList, setTagList] = useState(list);
   return (
      <div className={`container`}>
         <h1 className={`page-title langue fade`}>{title[langue]}</h1>
         <div className={`${styles.contentContainer} content-container`}>
            <CategoryFilter setList={setList} />
            <TagFilter list={list} setList={setTagList} />
            <div className={styles.projectsContainer}>
               {tagList.map((key) => {
                  return <ProjectCard key={key} data={projects[key]} />;
               })}
            </div>
         </div>
      </div>
   );
};

export default Work;
