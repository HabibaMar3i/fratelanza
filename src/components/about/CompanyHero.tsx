import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

export default function CompanyHero() {
    return (
        <section className="relative min-h-screen bg-linear-to-b from-white via-blue-50 to-slate-50 flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl opacity-60" />
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-yellow-200/10 rounded-full blur-3xl opacity-40" />

            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 text-center">
                <div data-aos="fade-down" className="flex justify-center mb-8">
                    <Badge variant="outline" className="bg-linear-to-r from-blue-800 to-cyan-500 border-blue-300 text-transparent bg-clip-text px-8 py-3 text-sm font-bold">
                        About Fratelanza
                    </Badge>
                </div>

                <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                    Passionate about delivering <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-cyan-600 to-teal-600">digital excellence</span> for businesses.
                </h1>

                <p data-aos="fade-up" data-aos-delay="200" className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                    We build software, web and mobile experiences, AI products, and POS systems that help companies grow faster while staying easy to use.
                </p>

                <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                    <Button asChild className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-bold px-10 py-6 text-lg shadow-lg hover:shadow-xl transition">
                        <Link to="/contact-us" className="flex items-center gap-3">
                            <i className="fas fa-envelope" />
                            Talk to Us
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="rounded-lg border-2 border-blue-300 text-blue-700 hover:bg-blue-50 font-bold px-10 py-6 text-lg transition">
                        <Link to="/portfolio" className="flex items-center gap-3">
                            <i className="fas fa-briefcase" />
                            See Our Work
                        </Link>
                    </Button>
                </div>

                <div data-aos="fade-up" data-aos-delay="400" className="grid grid-cols-3 gap-8 pt-12 border-t-2 border-blue-200">
                    <div className="group">
                        <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-600">10+</p>
                        <p className="text-sm text-slate-600 mt-2">Years of experience</p>
                    </div>
                    <div className="group">
                        <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-teal-600">50+</p>
                        <p className="text-sm text-slate-600 mt-2">Projects completed</p>
                    </div>
                    <div className="group">
                        <p className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-teal-600 to-blue-600">100%</p>
                        <p className="text-sm text-slate-600 mt-2">Client satisfaction</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
