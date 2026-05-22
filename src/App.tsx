import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';
import './styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card"

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
        <i className="fa-solid fa-house"></i>
        Hello world!
      </h1>
      <div>
        <h1 data-aos="fade-up">Welcome</h1>
        <p data-aos="fade-left" data-aos-delay="200">Delayed fade</p>
        <button data-aos="flip-left" data-aos-duration="1500">Click</button>
      </div>
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>Project Overview</CardTitle>
          <CardDescription>
            Track progress and recent activity for your Vite app.
          </CardDescription>
        </CardHeader>
        <CardContent>
          Your design system is ready. Start building your next component.
        </CardContent>
      </Card>
      <RouterProvider router={routes} />
    </>
  )
}
