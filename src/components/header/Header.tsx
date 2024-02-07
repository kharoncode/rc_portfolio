import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

import homeIcone from '@/assets/icones/home.svg';
import workIcone from '@/assets/icones/work.svg';
import aboutIcone from '@/assets/icones/about.svg';
import contactIcone from '@/assets/icones/contact.svg';

import darkIcone from '@/assets/icones/dark.svg';
//import lightIcone from '@/assets/icones/light.svg';
import frFlage from '@/assets/icones/flag_fr.svg';

const Header = () => {
   return (
      <header className={styles.container}>
         <nav className={styles.nav}>
            <NavLink
               className={({ isActive }) =>
                  isActive ? `${styles.link}  ${styles.isActive}` : styles.link
               }
               to={'/'}
            >
               <img src={homeIcone} alt="Home" />
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive ? `${styles.link}  ${styles.isActive}` : styles.link
               }
               to={'/work'}
            >
               <img src={workIcone} alt="Work" />
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive ? `${styles.link}  ${styles.isActive}` : styles.link
               }
               to={'/about'}
            >
               <img src={aboutIcone} alt="About" />
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive ? `${styles.link}  ${styles.isActive}` : styles.link
               }
               to={'/contact'}
            >
               <img src={contactIcone} alt="Contact" />
            </NavLink>
         </nav>
         <div className={styles.settings}>
            <img
               className={`${styles.icone} ${styles.mode}`}
               src={darkIcone}
               alt="Dark"
            />
            <img className={styles.flag} src={frFlage} alt="FR" />
         </div>
      </header>
   );
};

export default Header;
