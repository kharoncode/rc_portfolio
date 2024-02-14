import { useSelector } from 'react-redux';
import styles from './home.module.css';
import { getHome, getLangue } from '@/router/selectors';
import { useState } from 'react';

const randomSmiley = [':)', 'X)', ';)', ':D', ':p', '=)', '=D'];

const Home = () => {
   const { title } = useSelector(getHome);
   const langue = useSelector(getLangue);
   const content = title[langue];
   const [temp, setTemp] = useState(':)');
   const [time, setTime] = useState(5000);
   console.log('ini');
   setTimeout(() => {
      setTemp(randomSmiley[Math.floor(Math.random() * 6)]);
      setTime(Math.ceil(Math.random() * 2000 + 8000));
   }, time);
   return (
      <div className={`container`}>
         <h1 className={`${styles.title} langue fade`}>
            <span className={styles.name}>{`{`}</span> Hello World{' '}
            <span className={styles.name}>{`}`}</span>
         </h1>
         <h2 className={`${styles.subTitle} langue fade`}>
            {content[0]} <br /> <span className={styles.name}>Rémi</span>,<br />
            {content[1]}
            <br />
            <span className={styles.name}>{content[2]}</span>{' '}
            <span className={`smiley fade`}>{temp}</span>
         </h2>
      </div>
   );
};

export default Home;
