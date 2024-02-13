import { getWork } from '@/router/selectors';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Tag from '../tag/Tag';

type props = {
   setList: React.Dispatch<React.SetStateAction<string[]>>;
};

const TagFilter = (props: props) => {
   const { setList } = props;
   const { projects, tag } = useSelector(getWork);
   const [tagList, setTagList] = useState(['']);
   const raw = Object.keys(projects);

   const handleTag = () => {
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

   return (
      <>
         <div>
            {Object.keys(tag).map((el) => {
               return (
                  <Tag key={el} el={el} list={tagList} setList={setTagList} />
               );
            })}
         </div>
         <button
            onClick={() => {
               setList(Object.keys(projects));
               setTagList(['']);
            }}
         >
            Reset
         </button>
         <button
            onClick={() => {
               handleTag();
            }}
         >
            Tag Filter
         </button>
      </>
   );
};

export default TagFilter;
