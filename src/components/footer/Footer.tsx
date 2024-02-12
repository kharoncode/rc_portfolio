import styles from './footer.module.css';
import githubIcone from '@/assets/icones/github.svg';
import linkedinIcone from '@/assets/icones/linkedin.svg';
import mail from '@/assets/icones/mail.svg';
import darkIcone from '@/assets/icones/dark.svg';
import lightIcone from '@/assets/icones/light.svg';
import { useSelector } from 'react-redux';
import { getTheme } from '@/router/selectors';
import { store } from '@/router/store';
import { settingsSlice } from '@/layouts/settingsSlice';

const Footer = () => {
   const theme = useSelector(getTheme);
   return (
      <footer className={styles.container}>
         <div className={styles.settings}>
            <img
               onClick={() => {
                  store.dispatch(
                     settingsSlice.actions.toggleTheme(
                        theme === 'dark' ? 'light' : 'dark'
                     )
                  );
                  document
                     .querySelector('body')
                     ?.setAttribute(
                        'data-theme',
                        theme === 'dark' ? 'light' : 'dark'
                     );
               }}
               className={`${styles.mode}`}
               src={theme === 'dark' ? darkIcone : lightIcone}
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
