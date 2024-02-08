import styles from './home.module.css';

const Home = () => {
   return (
      <>
         <h1 className={styles.title}>
            Hi, my name is
            <br />
            <span className={styles.name}>Rémi</span>, <br />
            and i'm a <br />
            <span className={styles.name}>Front-End Developer !</span>
         </h1>
      </>
   );
};

export default Home;
