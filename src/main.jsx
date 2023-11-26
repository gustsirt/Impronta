import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import About from './routes/about';
import Contact from './routes/contact';
import ErrorPage from './routes/error-page';
import Home from './routes/home';
import Root from './routes/root.jsx';
import './styles/index.scss';
import Colores from './auxiliares/AuxiliarColores/Colores';

const router = createHashRouter([
  // createBrowserRouter reemplazaria --> createHashRouter (se pone hash para que lo tome github pages)
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about/', element: <About /> },
      { path: 'contact/', element: <Contact /> },
      { path: 'refcolores/', element: <Colores /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
