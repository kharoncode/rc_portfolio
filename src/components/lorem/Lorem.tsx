import { useEffect, useState } from 'react';
import styles from './lorem.module.css';

const loremIpsum = [
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in massa odio. Nulla auctor justo in turpis scelerisque, quis pellentesque dui interdum. Ut egestas justo nisl, quis convallis mauris tempor quis. Quisque sit amet luctus sem, in placerat dui. Donec sit amet fermentum purus, id maximus nisl. Donec non turpis quis libero feugiat fermentum. Donec maximus pharetra elit, vel lacinia urna iaculis non.',
   'Suspendisse sit amet nisi eros. Nullam ut feugiat justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam maximus est aliquet, aliquam lectus placerat, commodo sem. Mauris tincidunt, sapien eget vulputate pellentesque, risus nisi finibus erat, et commodo lectus diam id ex. Curabitur dui tellus, eleifend in sollicitudin pretium, consectetur ac ligula.',
   'Proin vitae lacus ut mi dignissim venenatis. Maecenas efficitur quam eu mattis lacinia. Phasellus congue rutrum orci, quis lobortis orci tempus id. Vestibulum quis risus vitae massa porta rhoncus nec porta dui. Cras at dolor at massa semper gravida. Cras commodo quam ac lacus facilisis cursus. Cras vitae vehicula orci, at consequat massa. Nullam euismod rutrum rutrum.',
   'Suspendisse consequat augue nec tellus condimentum pellentesque. Cras libero turpis, elementum ac sollicitudin vitae, dignissim ut nisi. Vestibulum pretium, mi sit amet volutpat elementum, lorem nulla tristique neque, eu cursus tortor mauris tempor augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam ipsum nibh, sollicitudin eget convallis eu, tempus nec augue.',
   'Aenean in elit sollicitudin, luctus odio a, molestie ligula. Sed massa dolor, tincidunt a enim id, feugiat posuere dolor. Phasellus ut posuere ante. Fusce ut maximus leo. Mauris porttitor turpis quis sollicitudin ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisi purus, faucibus mattis vehicula eu, pulvinar nec sapien.',
   'Curabitur elit lorem, posuere eu condimentum eget, consequat sed urna. Suspendisse et fermentum mauris. Aliquam iaculis massa fringilla lectus fermentum rhoncus. Morbi odio nisl, tristique sit amet pellentesque sed, lacinia id tortor. Sed eu luctus metus, sed aliquet odio. In scelerisque tempor ex, eget pretium tellus semper in.',
   'Nullam sodales, massa eget gravida laoreet, ex eros rutrum urna, ut porttitor diam est eu dui. Sed sit amet laoreet ante. Integer ut orci elit. In sagittis arcu sit amet consequat finibus. In id libero quis arcu dictum iaculis. Cras varius velit vitae mi tempus, eu tristique enim vestibulum. Sed accumsan volutpat malesuada. Morbi vitae volutpat nibh, nec placerat turpis. ',
];

const Lorem = (props: { coordinate: string; isMouseHover: boolean }) => {
   const { coordinate, isMouseHover } = props;

   const [lorem, setLorem] = useState([
      loremIpsum[Math.floor(Math.random() * loremIpsum.length)],
   ]);
   const h = window.innerHeight;

   useEffect(() => {
      const container = document.querySelector<HTMLElement>(
         `.${styles.container}`
      );
      if (container) {
         if (container.offsetHeight < h * 1) {
            const newLorem = [...lorem];
            newLorem.push(
               loremIpsum[Math.floor(Math.random() * loremIpsum.length)]
            );
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
            container.style.background = `radial-gradient(circle 1500px at ${
               isMouseHover ? coordinate : '-100px -100px'
            },
               rgba(var(--text-tertiary), 0.7) 1%,
               rgba(var(--text-primary), 0.08) 5%,
               rgba(var(--text-primary), 0.08) 100%
            )`;
            container.style.backgroundClip = 'text';
         }
      }
   }, [coordinate, isMouseHover]);
   return <div className={styles.container}>{lorem.map((el) => el)}</div>;
};

export default Lorem;
