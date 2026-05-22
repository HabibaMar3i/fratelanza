import { Link } from 'react-router-dom'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

export default function ContactHero() {
    return (
        <section className="relative overflow-hidden bg-slate-50 text-slate-900">
            <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80"
                alt="Light office collaboration"
                className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-white/40" />

            <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
                <div data-aos="fade-up" className="max-w-3xl">
                    <Badge className="bg-blue-600 text-white mb-6 px-5 py-2 text-sm font-semibold rounded-full">
                        Contact Us
                    </Badge>
                    <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                        Let’s build the next digital experience for your business.
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 sm:text-xl">
                        Ask about web apps, mobile apps, AI solutions, or POS systems with a team that delivers clear value.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button asChild className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-200/40 hover:bg-blue-700">
                            <Link to="/contact-us">Send a message</Link>
                        </Button>
                        <Button asChild variant="outline" className="rounded-full font-bold border-blue-800 px-8 py-4 text-base text-blue-800 hover:bg-blue-50">
                            <Link to="/about-us">Why Fratelanza</Link>
                        </Button>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2">
                        <a
                            href="tel:+201033316088"
                            className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 shadow-sm">
                                    <i className="fas fa-phone text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Phone</p>
                                    <p className="mt-2 text-2xl font-semibold text-slate-900">+20 1033316088</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-blue-600 group-hover:text-blue-700">
                                <span>Call now</span>
                                <i className="fas fa-arrow-right text-sm" />
                            </div>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/fratelanza"
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 text-blue-600 shadow-sm">
                                    <i className="fab fa-linkedin text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">LinkedIn</p>
                                    <p className="mt-2 text-xl font-semibold text-slate-900">Fratelanza Company Page</p>
                                </div>
                            </div>
                            <div className="mt-4 flex items-center gap-2 text-blue-600 group-hover:text-blue-700">
                                <span>View page</span>
                                <i className="fas fa-arrow-right text-sm" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
