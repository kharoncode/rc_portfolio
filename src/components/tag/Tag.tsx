import styles from './tag.module.css';
import { useEffect, useState } from 'react';

type props = {
   el: string;
   list: string[];
   setList: React.Dispatch<React.SetStateAction<string[]>>;
   reset: boolean;
};

const Tag = (props: props) => {
   const { el, list, setList, reset } = props;
   const [isSelected, setIsSelected] = useState(false);

   useEffect(() => {
      setIsSelected(false);
   }, [reset]);

   const tagSelect = () => {
      const temp = [...list];
      setIsSelected(!isSelected);
      if (!isSelected) {
         if (!temp.includes(el)) {
            temp.push(el);
         }
      } else {
         const index = temp.indexOf(el);
         temp.splice(index, 1);
      }
      setList(temp);
   };

   return (
      <div
         className={`${styles.container} ${isSelected ? styles.selected : ''}`}
         key={el}
         id={`tag_${el}`}
         onClick={() => {
            tagSelect();
         }}
      >
         <img
            className={styles.icone}
            src={`./pictures/tags/${el}.svg`}
            alt={el}
         />
      </div>
   );
};

export default Tag;
