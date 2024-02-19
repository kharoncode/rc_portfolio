import { useState, type FormEvent } from 'react';
import styles from './contact.module.css';
import sendIcone from '@/assets/icones/send.svg';
import { useSelector } from 'react-redux';
import { getContact, getLangue, getTimer } from '@/router/selectors';
import { Modal } from '@/components/modal/Modal';
import { store } from '@/router/store';
import { settingsSlice } from '@/layouts/settingsSlice';
import WaitingRoom from '@/components/waitingRoom/WaitingRoom';

const resetValue = (element: HTMLInputElement) => {
   element.value = '';
};

const Contact = () => {
   const { content, input, modal } = useSelector(getContact);
   const langue = useSelector(getLangue);
   const timer = useSelector(getTimer);
   const [open, setOpen] = useState(false);
   const [isOver, setIsOver] = useState(true);
   const data = {
      service_id: import.meta.env.VITE_SERVICE_ID,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_PUBLIC_KEY,
      template_params: {},
   };

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
                           {input.name[langue]}
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
                           {input.mail[langue]}
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
                           {input.message[langue]}
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
               <WaitingRoom setIsOver={setIsOver} />
            )}
            <Modal open={open} setOpen={setOpen}>
               <p className="langue fade">{modal[langue]}</p>
            </Modal>
         </div>
      </div>
   );
};

export default Contact;
