import styles from './settings.module.css';
import settingIcone from '@/assets/icones/setting.svg';
import frFlag from '@/assets/icones/flag_fr.svg';
import gbFlag from '@/assets/icones/flag_gb.svg';
import darkIcone from '@/assets/icones/dark.svg';
import lightIcone from '@/assets/icones/light.svg';
import { useState } from 'react';
import { store } from '@/router/store';
import { settingsSlice } from '@/layouts/settingsSlice';
import { useSelector } from 'react-redux';
import { getLangue, getTheme } from '@/router/selectors';

const Settings = () => {
   const theme = useSelector(getTheme);
   const langue = useSelector(getLangue);
   const [open, setOpen] = useState(false);

   return (
      <div className={styles.contenair}>
         <img
            className={`${styles.gear}`}
            src={settingIcone}
            alt="Settings"
            onClick={() => {
               setOpen(open === false ? true : false);
            }}
         />
         <div className={styles.settingsContenair}>
            <div className={`${styles.settings} ${open ? styles.open : ''}`}>
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
                  className={`${styles.moon} ${styles.settingIcone} ${
                     open ? styles.openSetting : ''
                  }`}
                  src={theme === 'dark' ? darkIcone : lightIcone}
                  alt={theme}
               />
               <img
                  className={`${styles.flag} ${styles.settingIcone} ${
                     open ? styles.openSetting : ''
                  }`}
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
            </div>
         </div>
      </div>
   );
};

export default Settings;
