import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home/Home';
import Error from '@/pages/error/error';
import RootLayout from '@/layouts/RootLayout';
import Work from '@/pages/work/Work';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';
import { createContext, useState } from 'react';
import { persistor, store } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import Projects from '@/pages/projects/Projects';

type themeContextT = {
   theme: string;
   toggleTheme: () => void;
} | null;

export const ThemeContext = createContext<themeContextT>(null);

const App = () => {
   const [theme, setTheme] = useState('light');
   const toggleTheme = () => {
      setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
      document.querySelector('body')?.setAttribute('data-theme', theme);
   };

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
               <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  <RouterProvider router={router} />
               </ThemeContext.Provider>
            </PersistGate>
         </Provider>
      </>
   );
};

export default App;
