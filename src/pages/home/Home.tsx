import styles from './home.module.css';

const Home = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>
            <span className={styles.name}>{`{`}</span> Hello World{' '}
            <span className={styles.name}>{`}`}</span>
            <br />
            my name is <span className={styles.name}>Rémi</span>, <br />
            and i'm a <br />
            <span className={styles.name}>Front-End Developer</span> !
         </h1>
      </div>
   );
};

export default Home;
