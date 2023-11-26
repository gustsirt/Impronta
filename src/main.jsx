import React from 'react';
import ReactDOM from 'react-dom/client' ;
import './styles/index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import About from './routes/about';
import Contact from './routes/contact';
import Home from './routes/home';



const router = createHashRouter([
  // createBrowserRouter reemplazaria --> createHashRouter (se pone hash para que lo tome github pages)
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
