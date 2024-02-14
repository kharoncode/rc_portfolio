import styles from './header.module.css';
import { NavLink } from 'react-router-dom';
import homeIcone from '@/assets/icones/home.svg';
import workIcone from '@/assets/icones/work.svg';
import aboutIcone from '@/assets/icones/about.svg';
import contactIcone from '@/assets/icones/contact.svg';

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
               <div className={styles.navIconeContainer}>
                  <img className={styles.navIcone} src={homeIcone} alt="Home" />
               </div>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive ? `${styles.link}  ${styles.isActive}` : styles.link
               }
               to={'/work'}
            >
               <div className={styles.navIconeContainer}>
                  <img className={styles.navIcone} src={workIcone} alt="Work" />
               </div>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive ? `${styles.link}  ${styles.isActive}` : styles.link
               }
               to={'/about'}
            >
               <div className={styles.navIconeContainer}>
                  <img
                     className={styles.navIcone}
                     src={aboutIcone}
                     alt="About"
                  />
               </div>
            </NavLink>
            <NavLink
               className={({ isActive }) =>
                  isActive ? `${styles.link}  ${styles.isActive}` : styles.link
               }
               to={'/contact'}
            >
               <div className={styles.navIconeContainer}>
                  <img
                     className={styles.navIcone}
                     src={contactIcone}
                     alt="Contact"
                  />
               </div>
            </NavLink>
         </nav>
      </header>
   );
};

export default Header;
