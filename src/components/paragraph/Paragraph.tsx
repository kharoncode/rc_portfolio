//import { useEffect} from 'react';
import styles from './paragraph.module.css';
//import { useSelector } from 'react-redux';
//import { getLangue } from '@/router/selectors';

type props = {
   classes: CSSModuleClasses[string];
   content: string;
};

const Paragraph = (props: props) => {
   const { classes, content } = props;
   // const langue = useSelector(getLangue);

   return <p className={`${classes} ${styles.container}`}>{content}</p>;
};

export default Paragraph;
