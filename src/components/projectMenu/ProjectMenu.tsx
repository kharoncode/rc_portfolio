import styles from './projectMenu.module.css';

const ProjectMenu = () => {
   return (
      <div className={styles.container}>
         <div className={styles.pie}>
            <div className={`${styles.entry} ${styles.school}`}></div>
            <div className={`${styles.entry} ${styles.professional}`}></div>
            <div className={`${styles.entry} ${styles.personnal}`}></div>
         </div>
         <svg height="0" width="0">
            <defs>
               <clipPath clipPathUnits="objectBoundingBox" id="sector">
                  <path
                     fill="none"
                     stroke="#000"
                     strokeWidth="1"
                     className="sector"
                     d="M0.5,0.5 l0.5,0 A0.5,0.5 0 0,0 0.25,.066987298 z"
                  ></path>
               </clipPath>
            </defs>
         </svg>
      </div>
   );
};

export default ProjectMenu;
