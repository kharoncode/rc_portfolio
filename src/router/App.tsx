import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home/Home';
import Error from '@/pages/error/error';
import Portfolio from '@/pages/portfolio/Portfolio';

const App = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <Home />,
         errorElement: <Error />,
      },
      {
         path: '/portfolio',
         element: <Portfolio />,
      },
   ]);

   return <RouterProvider router={router} />;
};

export default App;
