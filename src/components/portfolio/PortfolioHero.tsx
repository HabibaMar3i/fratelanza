import { Link } from 'react-router-dom'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export default function PortfolioHero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 text-slate-900">
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-cyan-100 blur-3xl opacity-70" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.14),_transparent_30%)]" />

            <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
                <div data-aos="fade-up" className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                    <div>
                        <Badge className="bg-cyan-500 text-white mb-6 px-5 py-2 text-sm font-semibold rounded-full">
                            Portfolio
                        </Badge>
                        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Showcase of polished digital products and measurable results.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
                            Browse a curated selection of our work in web, mobile, AI, and POS systems—designed to help
                            businesses grow with confidence.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Button asChild className="rounded-full bg-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-300/30 hover:bg-cyan-500">
                                <Link to="/contact-us">Book a discovery call</Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full border-slate-300 px-8 py-4 text-base text-slate-900 hover:bg-slate-100">
                                <Link to="/services">View services</Link>
                            </Button>
                        </div>
                    </div>

                    <div className="rounded-[2rem] bg-white p-10 shadow-2xl shadow-slate-200/50">
                        <div className="grid gap-6">
                            <div className="rounded-3xl bg-slate-100 p-6">
                                <h3 className="text-xl font-semibold text-slate-900">Featured project</h3>
                                <p className="mt-3 text-slate-600">
                                    A bespoke retail POS platform that reduced checkout time by 40% and improved inventory
                                    accuracy.
                                </p>
                            </div>
                            <div className="rounded-3xl bg-slate-100 p-6">
                                <h3 className="text-xl font-semibold text-slate-900">Project impact</h3>
                                <p className="mt-3 text-slate-600">
                                    Design systems, analytics, and performance engineering for a reliable product launch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
