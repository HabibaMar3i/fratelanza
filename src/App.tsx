import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

export default function App() {
  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <HomePage /> },
        { path: '/about-us', element: <AboutUs /> },
        { path: '/contact-us', element: <ContactUs /> },
        { path: '/services', element: <Services /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '*', element: <NotFound /> }
      ]
    }
  ])
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <RouterProvider router={routes} />
    </>
  )
}
