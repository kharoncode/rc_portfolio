import { useSelector } from 'react-redux';
import styles from './categoryFilter.module.css';
import { getWork } from '@/router/selectors';
import { useState } from 'react';

type props = {
   setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoryFilter = (props: props) => {
   const { setList } = props;
   const { projects, categories } = useSelector(getWork);
   const [isActive, setIsActive] = useState('');

   const filter = (category: string) => {
      const projectsList = Object.keys(projects);
      let newList: string[] = [];
      projectsList.map((el) => {
         if (projects[el].category === category) {
            newList.push(el);
         }
      });
      setList(newList);
   };

   return (
      <div className={styles.container}>
         {Object.keys(categories).map((el) => {
            return (
               <ruby
                  key={el}
                  className={`${styles.category} ${
                     isActive === el ? styles.active : ''
                  }`}
                  onClick={() => {
                     setIsActive(isActive === el ? '' : el);
                     if (isActive === el) {
                        setList(Object.keys(projects));
                     } else {
                        filter(el);
                     }
                  }}
               >
                  {categories[el]}
                  <rt>
                     <img
                        className={styles.icone}
                        src={`./pictures/tags/${el}.svg`}
                        alt={el}
                     />
                  </rt>
               </ruby>
            );
         })}
      </div>
   );
};

export default CategoryFilter;
