import { useEffect, useState, type FormEvent } from 'react';
import styles from './contact.module.css';
import sendIcone from '@/assets/icones/send.svg';
import backIcone from '@/assets/icones/reset.svg';
import { useSelector } from 'react-redux';
import { getContact, getLangue, getTimer } from '@/router/selectors';
import { Modal } from '@/components/modal/Modal';
import { store } from '@/router/store';
import { settingsSlice } from '@/layouts/settingsSlice';

const resetValue = (element: HTMLInputElement) => {
   element.value = '';
};

const Contact = () => {
   const { content, input, modal, waiting_room } = useSelector(getContact);
   const langue = useSelector(getLangue);
   const timer = useSelector(getTimer);
   const [randomNbr] = useState(
      Math.floor(
         Math.random() * Object.keys(waiting_room.content[langue]).length
      )
   );
   const [open, setOpen] = useState(false);
   const [isOver, setIsOver] = useState(true);
   const [seconds, setSeconds] = useState(0);
   const data = {
      service_id: import.meta.env.VITE_SERVICE_ID,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_PUBLIC_KEY,
      template_params: {},
   };

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

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const name_elt = document.getElementById(
         'contact_name'
      ) as HTMLInputElement;
      const mail_elt = document.getElementById(
         'contact_mail'
      ) as HTMLInputElement;
      const message_elt = document.getElementById(
         'contact_message'
      ) as HTMLInputElement;
      const result = {
         from_name: name_elt.value,
         reply_to: mail_elt.value,
         message: message_elt.value,
         to_name: 'Rémi',
      };
      data['template_params'] = result;
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-Type': 'application/json',
         },
      });
      store.dispatch(settingsSlice.actions.setTimer(Date.now() + 60000));
      setIsOver(false);
      setOpen(true);
      resetValue(name_elt);
      resetValue(mail_elt);
      resetValue(message_elt);
   };
   return (
      <div className={`container`}>
         <h1 className={`page-title langue fade`}>Contact</h1>
         <div className={`${styles.contentContainer} content-container`}>
            {isOver && timer === 0 ? (
               <>
                  <p className={`${styles.paragraph} langue fade`}>
                     {content[langue][0]}
                  </p>
                  <form className={styles.form} onSubmit={handleSubmit}>
                     <div className={styles.labelContainer}>
                        <label
                           className={`${styles.label} langue fade`}
                           htmlFor="contact_name"
                        >
                           {input.name[langue][0]}
                        </label>
                        <input
                           className={`${styles.inputText} ${styles.input}`}
                           id="contact_name"
                           type="text"
                           name="contact_name"
                           required
                        />
                     </div>
                     <div className={styles.labelContainer}>
                        <label
                           className={`${styles.label} langue fade`}
                           htmlFor="contact_mail"
                        >
                           Email
                        </label>
                        <input
                           className={`${styles.inputText} ${styles.input}`}
                           id="contact_mail"
                           type="email"
                           name="contact_mail"
                           required
                        />
                     </div>

                     <div className={styles.labelContainer}>
                        <label
                           className={`${styles.label} langue fade`}
                           htmlFor="contact_message"
                        >
                           Message
                        </label>
                        <textarea
                           className={`${styles.inputTextArea} ${styles.input}`}
                           id="contact_message"
                           name="contact_message"
                           required
                        />
                     </div>
                     <button
                        className={`${styles.button} ${styles.submitButton}`}
                        type="submit"
                     >
                        <img src={sendIcone} alt="Send" />
                     </button>
                  </form>
               </>
            ) : (
               <div className={`${styles.waitingRoomContainer} langue fade`}>
                  <p className={styles.paragraph}>
                     {waiting_room.title[langue][0]}
                     <span className={styles.timer}>{`${
                        timer > 0 ? seconds : 0
                     }s`}</span>
                     {waiting_room.title[langue][1]}
                  </p>
                  <div className={`${styles.quoteContainer}`}>
                     <p className={`${styles.paragraph} ${styles.quote}`}>
                        "{waiting_room.content[langue][randomNbr].quote}"
                     </p>
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
            )}
            <Modal open={open} setOpen={setOpen}>
               <p className="langue fade">{modal[langue]}</p>
            </Modal>
         </div>
      </div>
   );
};

export default Contact;
