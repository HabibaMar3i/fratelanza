import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

export default function NotFound() {
    return (
        <section className="relative min-h-screen bg-linear-to-b from-white via-blue-50 to-slate-50 flex items-center justify-center overflow-hidden pt-20">
            {/* Background orbs */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl opacity-60" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-200/10 rounded-full blur-3xl opacity-40" />

            <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12 text-center">
                {/* 404 Number */}
                <div data-aos="fade-down" className="mb-8">
                    <div className="text-9xl sm:text-[150px] font-black bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-cyan-600 to-teal-600 leading-none">
                        404
                    </div>
                </div>

                {/* Card Container */}
                <Card data-aos="fade-up" data-aos-delay="100" className="p-8 sm:p-12 border-blue-200/50 bg-linear-to-br from-blue-50/50 to-cyan-50/30 shadow-xl">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Page Not Found
                    </h1>

                    {/* Description */}
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
                    </p>

                    {/* Illustration */}
                    <div data-aos="fade-up" data-aos-delay="200" className="my-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-blue-100 to-cyan-100 text-5xl">
                            <i className="fas fa-compass text-blue-600" />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-bold px-10 py-6 text-lg">
                            <Link to="/" className="flex items-center gap-3 justify-center">
                                <i className="fas fa-home" />
                                Back to Home
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-lg border-2 border-blue-300 text-blue-700 hover:bg-blue-50 font-bold px-10 py-6 text-lg">
                            <Link to="/contact-us" className="flex items-center gap-3 justify-center">
                                <i className="fas fa-envelope" />
                                Contact Support
                            </Link>
                        </Button>
                    </div>

                    {/* Help Text */}
                    <p data-aos="fade-up" data-aos-delay="400" className="text-sm text-slate-600 mt-8 pt-8 border-t border-blue-200/50">
                        Need help? <Link to="/contact-us" className="text-blue-600 font-semibold hover:text-cyan-600 transition">Get in touch with our team</Link>
                    </p>
                </Card>

                {/* Quick Links */}
                <div data-aos="fade-up" data-aos-delay="500" className="mt-12">
                    <p className="text-sm text-slate-600 mb-6 font-semibold">Quick Navigation</p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link to="/" className="text-blue-600 hover:text-cyan-600 transition font-medium">
                            <i className="fas fa-home mr-2" />Home
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link to="/services" className="text-blue-600 hover:text-cyan-600 transition font-medium">
                            <i className="fas fa-briefcase mr-2" />Services
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link to="/portfolio" className="text-blue-600 hover:text-cyan-600 transition font-medium">
                            <i className="fas fa-folder mr-2" />Portfolio
                        </Link>
                        <span className="text-slate-400">•</span>
                        <Link to="/about-us" className="text-blue-600 hover:text-cyan-600 transition font-medium">
                            <i className="fas fa-info-circle mr-2" />About
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}