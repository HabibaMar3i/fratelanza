import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'

export default function ServiceHero() {
    return (
        <section className="relative overflow-hidden bg-slate-950 text-white">
            <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=1400&q=80"
                alt="Digital service strategy"
                className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-slate-950/80" />
            <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-center">
                    <Badge className="bg-cyan-500 text-slate-950 mb-6 px-5 py-2 text-sm font-semibold rounded-full">
                        Services
                    </Badge>
                    <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                        Digital products, AI systems and enterprise solutions that move your business forward.
                    </h1>
                    <p className="mt-6 text-lg text-slate-200 sm:text-xl">
                        From custom web apps to mobile experiences and intelligent automation, we deliver services that are built
                        to scale and stay easy to use.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild className="rounded-full bg-cyan-500 px-8 py-4 text-base font-bold text-slate-950 shadow-xl shadow-cyan-500/20 hover:bg-cyan-400">
                            <Link to="/contact-us">Book a consultation</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full border-white/30 px-8 py-4 text-base text-white hover:bg-white/10">
                            <Link to="/portfolio">Explore our work</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
