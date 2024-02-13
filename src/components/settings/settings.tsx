import styles from './settings.module.css';
import settingIcone from '@/assets/icones/setting.svg';
import frFlag from '@/assets/icones/flag_fr.svg';
import gbFlag from '@/assets/icones/flag_gb.svg';
import darkIcone from '@/assets/icones/dark.svg';
import lightIcone from '@/assets/icones/light.svg';
import { store } from '@/router/store';
import { settingsSlice } from '@/layouts/settingsSlice';
import { useSelector } from 'react-redux';
import { getLangue, getTheme } from '@/router/selectors';

const Settings = () => {
   const theme = useSelector(getTheme);
   const langue = useSelector(getLangue);

   return (
      <div className={styles.contenair}>
         <div className={styles.gearsContainer}>
            <div className={styles.up}>
               <img
                  className={`${styles.gear}`}
                  src={settingIcone}
                  alt="Settings"
               />
            </div>
            <div className={styles.middle}>
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
                     className={`${styles.moon} ${styles.settingsIcone}`}
                     src={theme === 'dark' ? darkIcone : lightIcone}
                     alt={theme}
                  />
                  <img
                     className={`${styles.flag} ${styles.settingsIcone}`}
                     src={langue === 'en' ? frFlag : gbFlag}
                     alt={langue === 'en' ? 'EN' : 'FR'}
                     onClick={() => {
                        document
                           .querySelectorAll('.langue')
                           .forEach((el) => el.classList.remove('fade'));
                        setTimeout(() => {
                           requestAnimationFrame(() => {
                              store.dispatch(
                                 settingsSlice.actions.toggleLangue(
                                    langue === 'en' ? 'fr' : 'en'
                                 )
                              );
                              document
                                 .querySelectorAll('.langue')
                                 .forEach((el) => el.classList.add('fade'));
                           });
                        }, 200);
                     }}
                  />
               </div>
            </div>
            <div className={styles.down}>
               <img
                  className={`${styles.gear}`}
                  src={settingIcone}
                  alt="Settings"
               />
            </div>
         </div>
      </div>
   );
};

export default Settings;
