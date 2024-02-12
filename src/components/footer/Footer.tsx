import styles from './footer.module.css';
import githubIcone from '@/assets/icones/github.svg';
import linkedinIcone from '@/assets/icones/linkedin.svg';
import mail from '@/assets/icones/mail.svg';
import darkIcone from '@/assets/icones/dark.svg';
import lightIcone from '@/assets/icones/light.svg';
import settingIcone from '@/assets/icones/setting.svg';
import frFlag from '@/assets/icones/flag_fr.svg';
import gbFlag from '@/assets/icones/flag_gb.svg';
import { useSelector } from 'react-redux';
import { getLangue, getTheme } from '@/router/selectors';
import { store } from '@/router/store';
import { settingsSlice } from '@/layouts/settingsSlice';
import { useState } from 'react';

const Footer = () => {
   const [open, setOpen] = useState(false);
   const theme = useSelector(getTheme);
   const langue = useSelector(getLangue);
   return (
      <footer className={styles.container}>
         <div className={styles.settings}>
            <img
               className={`${styles.mode} ${styles.settingsIcone}`}
               src={settingIcone}
               alt="Settings"
               onClick={() => {
                  setOpen(open === false ? true : false);
               }}
            />
         </div>
         {open ? (
            <>
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
                  className={`${styles.mode} ${styles.settingsIcone}`}
                  src={theme === 'dark' ? darkIcone : lightIcone}
                  alt={theme}
               />
               <img
                  className={`${styles.settingsIcone}`}
                  src={langue === 'en' ? gbFlag : frFlag}
                  alt={langue === 'en' ? 'EN' : 'FR'}
                  onClick={() => {
                     store.dispatch(
                        settingsSlice.actions.toggleLangue(
                           langue === 'en' ? 'fr' : 'en'
                        )
                     );
                  }}
               />
            </>
         ) : (
            <></>
         )}

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
