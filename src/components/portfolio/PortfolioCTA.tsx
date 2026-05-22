import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export default function PortfolioCTA() {
    return (
        <section className="relative py-20 bg-slate-50 overflow-hidden">
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-70" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-70" />
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <Card className="border border-slate-200 bg-white p-10 shadow-2xl shadow-slate-200/50" data-aos="zoom-in" data-aos-delay="120">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                                Ready to turn your next idea into a standout product?
                            </h2>
                            <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
                                Let’s plan a project that fits your goals, your users, and your growth roadmap.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-end">
                            <Button asChild className="rounded-full bg-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-300/30 hover:bg-cyan-500">
                                <Link to="/contact-us">Start your project</Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full border-slate-300 px-8 py-4 text-base text-slate-900 hover:bg-slate-100">
                                <Link to="/about-us">Meet our team</Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
