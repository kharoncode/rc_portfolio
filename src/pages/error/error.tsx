import { Link } from 'react-router-dom';

const Error = () => {
   return (
      <div>
         <div>404 not Found</div>
         <Link to={'/'}>Retour</Link>
      </div>
   );
};

export default Error;
