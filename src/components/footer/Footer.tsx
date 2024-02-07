import styles from './footer.module.css';
import githubIcone from '@/assets/icones/github.svg';
import linkedinIcone from '@/assets/icones/linkedin.svg';
import mail from '@/assets/icones/mail.svg';

const Footer = () => {
   return (
      <footer className={styles.container}>
         <div className={styles.iconesContainer}>
            <a
               className={styles.a}
               href="https://github.com/kharoncode"
               target="_blank"
            >
               <img className={styles.icone} src={githubIcone} alt="GitHub" />
            </a>
            <a
               className={styles.a}
               href="https://www.linkedin.com/in/r%C3%A9mi-collin-176826227/"
               target="_blank"
            >
               <img
                  className={styles.icone}
                  src={linkedinIcone}
                  alt="LinkedIn"
               />
            </a>
            <a className={styles.a} href="mailto: collin.remi@protonmail.com">
               <img className={styles.icone} src={mail} alt="Mail" />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
