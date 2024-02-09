import { useEffect, useState } from 'react';
import styles from './lorem.module.css';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras molestie diam eget elit sodales interdum. Duis quis dictum quam. Etiam tristique velit nec sapien finibus, non sagittis urna pellentesque. Fusce a lectus non purus tristique aliquet imperdiet sed felis. Donec gravida lacus a ipsum tincidunt pulvinar. Etiam ultrices fermentum ligula ac sodales. Fusce id iaculis massa, vitae elementum elit.`;

const Lorem = (props: { coordinate: string; isMouseHover: boolean }) => {
   const { coordinate } = props;

   const [lorem, setLorem] = useState([loremIpsum]);
   const h = window.innerHeight;

   useEffect(() => {
      const container = document.querySelector<HTMLElement>(
         `.${styles.container}`
      );
      if (container) {
         if (container.offsetHeight < h * 1) {
            const newLorem = [...lorem];
            newLorem.push(loremIpsum);
            setLorem(newLorem);
         } else if (container.offsetHeight > h * 1.1) {
            const newLorem = [...lorem];
            newLorem.pop();
            setLorem(newLorem);
         }
      }
   }, [h, lorem]);

   useEffect(() => {
      if (coordinate != '') {
         const container = document.querySelector<HTMLElement>(
            `.${styles.container}`
         );
         if (container) {
            container.style.background = `radial-gradient(
               at ${coordinate},
               rgba(var(--text-tertiary), 0.7) 1%,
               rgba(var(--text-primary), 0.08) 5%,
               rgba(var(--text-primary), 0.08) 100%
            )`;
            container.style.backgroundClip = 'text';
         }
      }
   }, [coordinate]);
   return <div className={styles.container}>{lorem.map((el) => el)}</div>;
};

export default Lorem;
