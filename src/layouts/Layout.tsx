import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function Layout() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        AOS.refresh();
    }, [location.pathname]);

    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <BackToTop />
        </div>
    );
}