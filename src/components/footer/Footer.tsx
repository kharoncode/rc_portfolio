import styles from './footer.module.css';
import githubIcone from '@/assets/icones/github.svg';
import linkedinIcone from '@/assets/icones/linkedin.svg';
import mail from '@/assets/icones/mail.svg';
import Settings from '../settings/settings';

const Footer = () => {
   return (
      <footer className={styles.container}>
         <Settings />
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
               href="https://www.linkedin.com/in/collinremi/"
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
