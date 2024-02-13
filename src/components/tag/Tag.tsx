import styles from './tag.module.css';
import { useState } from 'react';

type props = {
   el: string;
   list: string[];
   setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const Tag = (props: props) => {
   const { el, list, setList } = props;
   const [isSelected, setIsSelected] = useState(false);
   const copy = [...list];
   const tagSelect = () => {
      setIsSelected(!isSelected);
      if (!isSelected) {
         if (!copy.includes(el)) {
            copy.push(el);
         }
      } else {
         const index = copy.indexOf(el);
         copy.splice(index, 1);
      }
      setList(copy);
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
         {el}
      </div>
   );
};

export default Tag;
