import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home/Home';
import Error from '@/pages/error/error';
import RootLayout from '@/layouts/rootLayout/RootLayout';
import Work from '@/pages/work/Work';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import Projects from '@/pages/projects/Projects';

const App = () => {
   const router = createHashRouter([
      {
         path: '/',
         element: <RootLayout />,
         children: [
            {
               path: '',
               element: <Home />,
            },
            {
               path: '/work',
               element: <Work />,
            },
            /* {
               path: 'projects/:projectId',
               element: <Projects />,
            }, */

            {
               path: '/about',
               element: <About />,
            },
            {
               path: '/contact',
               element: <Contact />,
            },
            {
               path: '/*',
               element: <Error />,
            },
         ],
      },
   ]);

   return (
      <>
         <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
               <RouterProvider router={router} />
            </PersistGate>
         </Provider>
      </>
   );
};

export default App;
