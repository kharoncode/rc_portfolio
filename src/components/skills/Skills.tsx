import { useSelector } from 'react-redux';
import styles from './skills.module.css';
import { getHome } from '@/router/selectors';

const Logos = () => {
   const { skills } = useSelector(getHome);
   return (
      <div className={styles.logosContainer}>
         {skills.map((el) => (
            // <div
            //    className={styles.logoContainer}
            //    style={{
            //       animationDelay: `${index * 1500}ms`,
            //       animationDuration: `${skills.length * 1500}ms`,
            //    }}
            // >
            <img
               className={`${styles.icone} ${styles[`icone${el.type}`]}`}
               key={el.name}
               src={`./pictures/skills/${el.name}_${el.type}.svg`}
               alt={el.name}
            />
            // </div>
         ))}
      </div>
   );
};

const Skills = () => {
   const { skills } = useSelector(getHome);
   return (
      <div
         className={styles.container}
         style={{ width: `${skills.length * 100}px` }}
      >
         <Logos />
         <Logos />
      </div>
   );
};

export default Skills;
