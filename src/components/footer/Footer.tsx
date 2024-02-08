import styles from './footer.module.css';
import githubIcone from '@/assets/icones/github.svg';
import linkedinIcone from '@/assets/icones/linkedin.svg';
import mail from '@/assets/icones/mail.svg';
import darkIcone from '@/assets/icones/dark.svg';
import lightIcone from '@/assets/icones/light.svg';
import { ThemeContext } from '@/router/App';
import { useContext } from 'react';

const Footer = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
   return (
      <footer className={styles.container}>
         <div className={styles.settings}>
            <img
               onClick={() => toggleTheme()}
               className={`${styles.mode}`}
               src={theme === 'dark' ? lightIcone : darkIcone}
               alt={theme}
            />
         </div>
         <div className={styles.iconesContainer}>
            <a
               className={styles.a}
               href="https://github.com/kharoncode"
               target="_blank"
            >
               <div className={styles.navIconeContainer}>
                  <img
                     className={styles.icone}
                     src={githubIcone}
                     alt="GitHub"
                  />
               </div>
            </a>
            <a
               className={styles.a}
               href="https://www.linkedin.com/in/r%C3%A9mi-collin-176826227/"
               target="_blank"
            >
               <div className={styles.navIconeContainer}>
                  <img
                     className={styles.icone}
                     src={linkedinIcone}
                     alt="LinkedIn"
                  />
               </div>
            </a>
            <a className={styles.a} href="mailto: collin.remi@protonmail.com">
               <div className={styles.navIconeContainer}>
                  <img className={styles.icone} src={mail} alt="Mail" />
               </div>
            </a>
         </div>
      </footer>
   );
};

export default Footer;
