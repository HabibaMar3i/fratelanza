import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export default function ServiceCTA() {
    return (
        <section className="relative py-20 bg-linear-to-r from-blue-900 to-cyan-600 text-white overflow-hidden" data-aos="fade-up">
            <div className="absolute inset-0 opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80"
                    alt="Team developing service"
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="absolute inset-0 bg-slate-950/60" />
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <Card className="border-0 bg-white/10 p-10 shadow-2xl backdrop-blur-xl" data-aos="zoom-in" data-aos-delay="150">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                            Ready to start your next digital transformation?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200 sm:text-lg">
                            Tell us about your business goals and we’ll help you choose the right service path to grow faster.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild className="rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-xl shadow-cyan-400/30 hover:bg-cyan-300">
                                <Link to="/contact-us">Start a project</Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full border-white/50 px-8 py-4 text-base text-white hover:bg-white/10">
                                <Link to="/portfolio">View our portfolio</Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
