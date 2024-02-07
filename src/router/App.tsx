import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home/Home';
import Error from '@/pages/error/error';
import RootLayout from '@/layouts/RootLayout';
import Work from '@/pages/work/Work';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';

const App = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: <RootLayout />,
         children: [
            {
               path: '',
               element: <Home />,
            },
            {
               path: 'work',
               element: <Work />,
            },
            {
               path: 'about',
               element: <About />,
            },
            {
               path: 'contact',
               element: <Contact />,
            },
            {
               path: '*',
               element: <Error />,
            },
         ],
      },
   ]);

   return (
      <>
         <RouterProvider router={router} />
      </>
   );
};

export default App;
