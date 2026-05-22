import { Link } from 'react-router-dom'

const footerLinks = {
    company: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Services', href: '/services' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Blog', href: '#' },
    ],
    services: [
        { label: 'Web Development', href: '/services' },
        { label: 'Mobile Apps', href: '/services' },
        { label: 'AI Solutions', href: '/services' },
        { label: 'POS Systems', href: '/services' },
    ],
    support: [
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'Documentation', href: '#' },
        { label: 'FAQ', href: '#' },
        { label: 'Support', href: '#' },
    ],
}

const socials = [
    { icon: 'fab fa-facebook', label: 'Facebook', href: '#' },
    { icon: 'fab fa-twitter', label: 'Twitter', href: '#' },
    { icon: 'fab fa-linkedin', label: 'LinkedIn', href: '#' },
    { icon: 'fab fa-instagram', label: 'Instagram', href: '#' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-slate-950 text-slate-200 overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-600/10 to-cyan-600/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="py-16">
                    {/* Logo & Description */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-1">
                            <Link to="/" className="inline-flex items-center gap-2 text-lg font-semibold text-white hover:text-cyan-400 transition mb-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 text-sm font-bold">
                                    F
                                </div>
                                <span>Fratelanza</span>
                            </Link>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Technology solutions that transform businesses and drive real results.
                            </p>
                            {/* Social Links */}
                            <div className="flex gap-4 mt-6">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-slate-400 hover:bg-linear-to-br hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-all duration-300"
                                    >
                                        <i className={`${social.icon} text-lg`} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links Sections */}
                        <div>
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                <i className="fas fa-building text-cyan-500" />
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-slate-400 hover:text-cyan-400 transition"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                <i className="fas fa-cogs text-blue-500" />
                                Services
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-slate-400 hover:text-cyan-400 transition"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                                <i className="fas fa-life-ring text-teal-500" />
                                Support
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.support.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            to={link.href}
                                            className="text-sm text-slate-400 hover:text-cyan-400 transition"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="h-px bg-slate-800" />
                </div>

                {/* Contact Section */}
                <div className="py-12 border-b border-slate-800">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div>
                            <p className="text-xs uppercase font-semibold text-slate-400 mb-2">
                                <i className="fas fa-phone text-cyan-500 mr-2" />
                                Phone
                            </p>
                            <a href="tel:01033316088" className="text-lg font-semibold text-white hover:text-cyan-400 transition">
                                +20 (0) 103 331 6088
                            </a>
                        </div>
                        <div>
                            <p className="text-xs uppercase font-semibold text-slate-400 mb-2">
                                <i className="fas fa-envelope text-blue-500 mr-2" />
                                Email
                            </p>
                            <a href="mailto:info@fratelanza.com" className="text-lg font-semibold text-white hover:text-cyan-400 transition">
                                info@fratelanza.com
                            </a>
                        </div>
                        <div>
                            <p className="text-xs uppercase font-semibold text-slate-400 mb-2">
                                <i className="fas fa-map-marker-alt text-teal-500 mr-2" />
                                Location
                            </p>
                            <p className="text-lg font-semibold text-white">Cairo, Egypt</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                    <p>
                        © {currentYear} Fratelanza. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-cyan-400 transition">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-cyan-400 transition">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}