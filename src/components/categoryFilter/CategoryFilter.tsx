import { useSelector } from 'react-redux';
import styles from './categoryFilter.module.css';
import { getLangue, getWork } from '@/router/selectors';
import { useState } from 'react';

type props = {
   setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const CategoryFilter = (props: props) => {
   const { setList } = props;
   const { projects, categories } = useSelector(getWork);
   const langue = useSelector(getLangue);
   const [isActive, setIsActive] = useState('');

   const filter = (category: string) => {
      const projectsList = Object.keys(projects);
      const newList: string[] = [];
      projectsList.map((el) => {
         if (projects[el].category === category) {
            newList.push(el);
         }
      });
      setList(newList);
   };

   return (
      <div className={`${styles.container}`}>
         <div className={`${styles.categoryContainer} langue fade`}>
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
                     {categories[el][langue]}
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
         <div
            className={`${styles.messageContainer} ${
               isActive !== '' ? styles.openMessage : ''
            }`}
         >
            <p className={`${styles.message} langue fade`}>
               Ceci est un échantillon des projets réalisé lors de ma formation.
               Ils ont pour but de mettre en application les connaissances
               acquises afin de valider les acquis et ne sont pas fini.
            </p>
         </div>
      </div>
   );
};

export default CategoryFilter;
