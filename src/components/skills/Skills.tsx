import { useSelector } from 'react-redux';
import styles from './skills.module.css';
import { getHome } from '@/router/selectors';

const Logos = ({ time, width }: { time: number; width: number }) => {
   const { skills } = useSelector(getHome);
   return (
      <div
         style={{ animationDuration: `${skills.length * time}ms` }}
         className={styles.logosContainer}
      >
         {skills.map((el, index) => (
            <img
               style={{
                  width: `${width}px`,
                  animationDelay: `${index * time}ms`,
                  animationDuration: `${skills.length * time}ms`,
               }}
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
   const time = 1500;
   const sw = window.screen.width;
   const iconeWith =
      sw > 1300
         ? 80
         : sw <= 1300 && sw > 1000
         ? 70
         : sw <= 1000 && sw > 600
         ? 50
         : sw <= 600 && sw > 400
         ? 30
         : 20;
   return (
      <div
         className={styles.container}
         style={{
            width: `${skills.length * (iconeWith + 20)}px`,
         }}
      >
         <Logos time={time} width={iconeWith} />
         <Logos time={time} width={iconeWith} />
      </div>
   );
};

export default Skills;
