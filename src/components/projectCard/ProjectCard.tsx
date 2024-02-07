import styles from './projectCard.module.css';

type props = {
   data: {
      id: string;
      name: string;
      description: string;
      tag: string[];
      github: string;
      link: string;
   };
};

const ProjectCard = ({ data }: props) => {
   const { id, name } = data;
   return (
      <div className={styles.container}>
         <div className={styles.pictureContainer}>
            <img
               className={styles.picture}
               src={`./pictures/${id}.png`}
               alt="BF"
            />
         </div>
         {name}
      </div>
   );
};

export default ProjectCard;
