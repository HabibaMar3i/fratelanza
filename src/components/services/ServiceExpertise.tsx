import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const expertise = [
    {
        title: 'UX & Product Design',
        description: 'Design systems, interaction flows, and polished interfaces with a focus on usability.',
        icon: 'fas fa-pencil-ruler',
    },
    {
        title: 'Cloud & Infrastructure',
        description: 'Secure hosting, scalable backend architecture, and continuous deployment tools.',
        icon: 'fas fa-cloud',
    },
    {
        title: 'Data & Analytics',
        description: 'Actionable dashboards, automation pipelines, and custom reporting solutions.',
        icon: 'fas fa-chart-pie',
    },
]

export default function ServiceExpertise() {
    return (
        <section className="relative py-20 bg-white overflow-hidden" data-aos="fade-up">
            <div className="absolute top-10 right-0 hidden h-80 w-80 rounded-full bg-cyan-200/20 blur-3xl lg:block" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                    <div data-aos="fade-right" data-aos-delay="100">
                        <Badge className="bg-linear-to-r from-blue-600 to-cyan-600 mb-4 px-7 py-2 text-sm font-semibold text-white rounded-full">
                            Expertise
                        </Badge>
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                            Deep experience that supports every project lifecycle.
                        </h2>
                        <p className="mt-6 text-base text-slate-600 sm:text-lg">
                            Our team is built to handle product strategy, development, launch, and ongoing improvement in one flow.
                        </p>

                        <div className="mt-10 space-y-6">
                            {expertise.map((item) => (
                                <Card key={item.title} className="border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                    <div className="flex items-start gap-5">
                                        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                                            <i className={`${item.icon} text-lg`} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                                            <p className="mt-2 text-slate-600 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl shadow-2xl" data-aos="fade-left" data-aos-delay="200">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                            alt="Team meeting and planning"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
