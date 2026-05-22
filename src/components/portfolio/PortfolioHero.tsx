import { Link } from 'react-router-dom'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export default function PortfolioHero() {
    return (
        <section className="relative min-h-[80vh] overflow-hidden bg-slate-950 text-white">
            <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1400&q=80"
                alt="Portfolio showcase background"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-slate-950/40" />

            <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
                <div data-aos="fade-up" className="max-w-3xl">
                    <Badge className="bg-cyan-400 text-slate-950 mb-6 px-5 py-2 text-sm font-semibold rounded-full">
                        Portfolio
                    </Badge>
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        Elegant product design and powerful software built for modern businesses.
                    </h1>
                    <p className="mt-6 text-lg text-slate-200 sm:text-xl">
                        Explore select case studies, insights, and real results from our past work across web, mobile,
                        AI, and POS systems.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button asChild className="rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-400/20 hover:bg-cyan-300">
                            <Link to="/contact-us">Book a discovery call</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full border-white/25 px-8 py-4 text-base text-white hover:bg-white/10">
                            <Link to="/services">View services</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
