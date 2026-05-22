import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'

export default function ContactCTA() {
    return (
        <section className="relative py-20 bg-slate-50 text-slate-900 overflow-hidden">
            <div className="absolute inset-x-0 top-0 hidden h-72 bg-cyan-100/70 blur-3xl lg:block" />
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <Card className="border border-slate-200 bg-white p-10 shadow-xl" data-aos="zoom-in" data-aos-delay="150">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Need help bringing your idea to life?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
                            We help teams create polished digital products with clear strategy, design, and engineering support.
                        </p>
                        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild className="rounded-full bg-cyan-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200/40 hover:bg-blue-700">
                                <Link to="/contact-us">Start your project</Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full border-slate-300 px-8 py-4 text-base text-slate-900 hover:bg-slate-100">
                                <Link to="/about-us">See our story</Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
