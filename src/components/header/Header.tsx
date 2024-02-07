import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
   return (
      <header className={styles.container}>
         <nav className={styles.nav}>
            <Link className={styles.link} to={'/'}>
               Home
            </Link>
            <Link className={styles.link} to={'/work'}>
               Work
            </Link>
            <Link className={styles.link} to={'/about'}>
               About
            </Link>
            <Link className={styles.link} to={'/contact'}>
               Contact
            </Link>
         </nav>
         <div>Mode Langue</div>
      </header>
   );
};

export default Header;
