import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { cn } from '#lib/utils'

const navigation = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
]

export default function NavbarComponent() {
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    const toggleMenu = () => setMenuOpen(prev => !prev)
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 text-lg font-semibold text-slate-50 hover:text-slate-200 transition">
                    <img
                        src="/favicon.svg"
                        alt="Fratelanza logo"
                        className="h-9 w-9 rounded-lg bg-slate-950 p-1"
                    />
                    <span>Fratelanza</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                aria-current={isActive ? 'page' : undefined}
                                className={cn(
                                    'px-3 py-2 text-sm font-medium rounded-lg transition',
                                    isActive
                                        ? 'bg-slate-800 text-white'
                                        : 'text-slate-200 hover:text-slate-50 hover:bg-slate-800'
                                )}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:block">
                    <Button asChild className="rounded-full bg-slate-900 text-slate-50 hover:bg-slate-800 border border-slate-700 font-semibold px-6 transition">
                        <Link to="/contact-us">Get in Touch</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    aria-expanded={menuOpen}
                    onClick={toggleMenu}
                    className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
                >
                    <span className="sr-only">Toggle menu</span>
                    <div className="flex flex-col gap-1.5">
                        <span className={cn('h-0.5 w-6 bg-current rounded transition-all', menuOpen && 'rotate-45 translate-y-2')} />
                        <span className={cn('h-0.5 w-6 bg-current rounded transition-all', menuOpen && 'opacity-0')} />
                        <span className={cn('h-0.5 w-6 bg-current rounded transition-all', menuOpen && '-rotate-45 -translate-y-2')} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                'lg:hidden overflow-hidden border-t border-slate-800 bg-slate-950 transition-all duration-300',
                menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
            )}>
                <div className="px-4 py-4 space-y-2">
                    {navigation.map((item) => {
                        const isActive = location.pathname === item.href
                        return (
                            <Link
                                key={item.href}
                                to={item.href}
                                onClick={closeMenu}
                                aria-current={isActive ? 'page' : undefined}
                                className={cn(
                                    'block px-4 py-2 text-sm font-medium rounded-lg transition',
                                    isActive
                                        ? 'bg-slate-800 text-white'
                                        : 'text-slate-200 hover:text-slate-50 hover:bg-slate-800'
                                )}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                    <Button asChild className="w-full mt-2 rounded-full bg-slate-900 text-slate-50 hover:bg-slate-800 border border-slate-700 font-semibold">
                        <Link to="/contact-us" onClick={closeMenu}>Get in Touch</Link>
                    </Button>
                </div>
            </div>
        </header>
    )
}