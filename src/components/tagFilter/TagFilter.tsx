import styles from './tagFilter.module.css';
import filterIcone from '@/assets/icones/filter.svg';
import resetIcone from '@/assets/icones/reset.svg';
import { getWork } from '@/router/selectors';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tag from '../tag/Tag';

type props = {
   setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const TagFilter = (props: props) => {
   const { setList } = props;
   const { projects, tag } = useSelector(getWork);
   const [tagList, setTagList] = useState(['']);
   const [reset, setReset] = useState(false);
   const [open, setOpen] = useState(false);

   const filter = () => {
      const raw = Object.keys(projects);
      let tempList = raw;
      if (tagList.length !== 0) {
         tagList.map((value) => {
            const temp = raw.filter((el) =>
               Object.values(projects[el].tag).some((val) =>
                  val.includes(value)
               )
            );
            const newList: string[] = [];
            tempList.map((el) => {
               temp.map((tempEl) => {
                  if (el === tempEl) {
                     newList.push(el);
                  }
               });
            });
            tempList = newList;
         });
         setList(tempList);
      } else {
         tempList = raw;
         setList(raw);
      }
   };

   useEffect(() => {
      filter();
      /* eslint-disable */
   }, [tagList]);
   /* eslint-enable */

   return (
      <div className={styles.container}>
         <img
            className={styles.icone}
            src={filterIcone}
            alt="Filter"
            onClick={() => {
               setOpen(!open);
            }}
         />
         {open ? (
            <>
               <div className={styles.tagsContainer}>
                  {Object.keys(tag).map((el) => {
                     return (
                        <Tag
                           key={el}
                           el={el}
                           list={tagList}
                           setList={setTagList}
                           reset={reset}
                        />
                     );
                  })}
               </div>
               <img
                  className={styles.icone}
                  src={resetIcone}
                  alt="Close"
                  onClick={() => {
                     setList(Object.keys(projects));
                     setTagList(['']);
                     setReset(!reset);
                  }}
               />
            </>
         ) : (
            <></>
         )}
      </div>
   );
};

export default TagFilter;
