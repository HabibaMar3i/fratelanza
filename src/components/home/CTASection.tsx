import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export default function CTASection() {
    return (
        <section className="relative py-20 bg-linear-to-r from-blue-900 to-cyan-600 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <Card
                    data-aos="fade-up"
                    className="p-8 sm:p-12 border-0 bg-white/95 backdrop-blur-sm shadow-2xl"
                >
                    {/* Content */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Let's discuss how Fratelanza can help you achieve your digital goals with innovative solutions tailored to your needs.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 py-8 border-y border-slate-200">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-3">
                                <i className="fas fa-clock text-lg" />
                            </div>
                            <p className="font-semibold text-slate-900">Quick Response</p>
                            <p className="text-sm text-slate-600">Within 24 hours</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-3">
                                <i className="fas fa-users text-lg" />
                            </div>
                            <p className="font-semibold text-slate-900">Expert Team</p>
                            <p className="text-sm text-slate-600">100+ professionals</p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-3">
                                <i className="fas fa-check-circle text-lg" />
                            </div>
                            <p className="font-semibold text-slate-900">Free Consultation</p>
                            <p className="text-sm text-slate-600">No commitment</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button asChild className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-bold px-10 py-6 text-lg w-full sm:w-auto">
                            <Link to="/contact-us" className="flex items-center gap-3 justify-center">
                                <i className="fas fa-envelope" />
                                Start Your Project
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-lg border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-bold px-10 py-6 text-lg w-full sm:w-auto">
                            <Link to="/services" className="flex items-center gap-3 justify-center">
                                <i className="fas fa-briefcase" />
                                View Our Services
                            </Link>
                        </Button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-10 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                            <i className="fas fa-phone text-blue-600" />
                            <a href="tel:01033316088" className="hover:text-blue-600 transition">
                                +(20)1033316088
                            </a>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300" />
                        <div className="flex items-center gap-2 text-slate-600">
                            <i className="fas fa-envelope text-blue-600" />
                            <a href="mailto:info@fratelanza.com" className="hover:text-blue-600 transition">
                                info@fratelanza.com
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}