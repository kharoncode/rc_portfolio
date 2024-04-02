import { useSelector } from 'react-redux';
import styles from './waitingroom.module.css';
import { getContact, getLangue, getTimer } from '@/router/selectors';
import backIcone from '@/assets/icones/reset.svg';
import React, { useEffect, useState } from 'react';
import { store } from '@/router/store';
import { settingsSlice } from '@/layouts/settingsSlice';

type props = {
   setIsOver: React.Dispatch<React.SetStateAction<boolean>>;
};

const WaitingRoom = (props: props) => {
   const { setIsOver } = props;
   const { waiting_room } = useSelector(getContact);
   const langue = useSelector(getLangue);
   const timer = useSelector(getTimer);
   const [seconds, setSeconds] = useState(0);
   const [randomNbr] = useState(
      Math.floor(
         Math.random() * Object.keys(waiting_room.content[langue]).length
      )
   );

   useEffect(() => {
      const getTime = (date: number) => {
         const time = date - Date.now();
         if (time < 0) {
            store.dispatch(settingsSlice.actions.setTimer(0));
         }
         setSeconds(Math.floor((time / 1000) % 60));
      };
      if (timer !== 0) {
         getTime(timer);
         const interval = setInterval(() => getTime(timer), 1000);
         return () => {
            clearInterval(interval);
         };
      }
   }, [timer]);

   return (
      <div className={`${styles.waitingRoomContainer} langue fade`}>
         <p className={styles.paragraph}>
            {waiting_room.title[langue][0]}
            <span className={styles.timer}>{`${
               timer > 0 ? seconds : 0
            }s`}</span>
            {waiting_room.title[langue][1]}
         </p>
         <div className={`${styles.quoteContainer}`}>
            <q className={`${styles.paragraph} ${styles.quote}`}>
               {waiting_room.content[langue][randomNbr].quote}
            </q>
            <p className={`${styles.paragraph} ${styles.author}`}>
               {waiting_room.content[langue][randomNbr].author}
            </p>
         </div>
         {timer === 0 ? (
            <button
               className={`${styles.button}`}
               onClick={() => {
                  setIsOver(true);
               }}
            >
               <img src={backIcone} alt="Back" />
            </button>
         ) : (
            <></>
         )}
      </div>
   );
};

export default WaitingRoom;
