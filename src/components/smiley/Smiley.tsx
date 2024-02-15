import { useState } from 'react';

const Smiley = () => {
   const randomSmiley = [':)', 'X)', ';)', ':D', ':p', '=)', '=D'];
   const [smiley, setSmiley] = useState(':)');
   const [time, setTime] = useState(5000);
   setTimeout(() => {
      setSmiley(randomSmiley[Math.floor(Math.random() * 6)]);
      setTime(Math.ceil(Math.random() * 2000 + 8000));
   }, time);
   return <span>{smiley}</span>;
};

export default Smiley;
