import { type FormEvent } from 'react';
import styles from './contact.module.css';
import sendIcone from '@/assets/icones/send.svg';
import { useSelector } from 'react-redux';
import { getContact, getLangue } from '@/router/selectors';
import Paragraphe from '@/components/paragraphe/Paragraphe';

const Contact = () => {
   const { content, input } = useSelector(getContact);
   const langue = useSelector(getLangue);
   const data = {
      service_id: import.meta.env.VITE_SERVICE_ID,
      template_id: import.meta.env.VITE_TEMPLATE_ID,
      user_id: import.meta.env.VITE_PUBLIC_KEY,
      template_params: {},
   };

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const name: string = e.currentTarget.contact_name.value;
      const mail: string = e.currentTarget.mail.value;
      const message: string = e.currentTarget.message.value;
      const result = {
         from_name: name,
         reply_to: mail,
         message: message,
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
   };
   return (
      <div className={`${styles.container} container`}>
         <h1 className={styles.title}>Contact</h1>
         <div className={styles.contentContainer}>
            <h2>
               <Paragraphe content={content[langue][0]} />
            </h2>
            <form className={styles.form} onSubmit={handleSubmit}>
               <div className={styles.labelContainer}>
                  <label className={styles.label} htmlFor="contact_name">
                     <Paragraphe content={input.name[langue][0]} />
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
                  <label className={styles.label} htmlFor="mail">
                     Email
                  </label>
                  <input
                     className={`${styles.inputText} ${styles.input}`}
                     id="mail"
                     type="email"
                     name="mail"
                     required
                  />
               </div>

               <div className={styles.labelContainer}>
                  <label className={styles.label} htmlFor="message">
                     Message
                  </label>
                  <textarea
                     className={`${styles.inputTextArea} ${styles.input}`}
                     id="message"
                     name="message"
                     required
                  />
               </div>
               <button className={styles.submitButton} type="submit">
                  <img src={sendIcone} alt="Send" />
               </button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
