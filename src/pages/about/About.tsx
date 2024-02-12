import styles from './about.module.css';

const About = () => {
   return (
      <div className={styles.container}>
         <h1 className={styles.title}>About</h1>
         <div className={styles.contentContainer}>
            <p className={styles.paragraph}>
               Hi, I'm Rémi, a passionate developer who loves taking on
               challenges to make every project a reality.
            </p>
            <p className={styles.paragraph}>
               With a mind brimming with imagination, I love looking for and
               above all finding ways of turning into reality all the crazy
               ideas that pop into my head. My time at the Beaux Arts in Geneva
               enabled me to unleash this full potential, which I can now
               express through lines of code.
            </p>
            <p className={styles.paragraph}>
               I hope you'll enjoy the projects I've created, and don't hesitate
               to let me know what you think, or to submit any crazy ideas that
               will fuel my creativity!
            </p>
         </div>
      </div>
   );
};

export default About;
