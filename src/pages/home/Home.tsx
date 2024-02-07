import styles from './home.module.css';

const Home = () => {
   return (
      <>
         <h1 className={styles.title}>
            Hi, <br />
            I'm <span className={styles.name}>Rémi</span>, <br />
            Front-End Developer !
         </h1>
      </>
   );
};

export default Home;
