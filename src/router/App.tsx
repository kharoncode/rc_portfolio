import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/home/Home';
import Error from '@/pages/error/error';
import RootLayout from '@/layouts/RootLayout';
import Work from '@/pages/work/Work';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';
import { createContext, useState } from 'react';
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
         <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <RouterProvider router={router} />
         </ThemeContext.Provider>
      </>
   );
};

export default App;
