import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const values = [
    {
        title: 'User-first design',
        description: 'We create experiences that are intuitive, accessible, and delightful for every user.',
        icon: 'fas fa-user-check',
    },
    {
        title: 'Reliable delivery',
        description: 'Clear timelines, honest communication, and consistent execution are part of every project.',
        icon: 'fas fa-tasks',
    },
    {
        title: 'Growth mindset',
        description: 'We focus on value, not vanity metrics, and help you scale with the right technology choices.',
        icon: 'fas fa-chart-line',
    },
    {
        title: 'Continuous support',
        description: 'Your product keeps evolving after launch with maintenance, updates, and real partnership.',
        icon: 'fas fa-life-ring',
    },
]

export default function CompanyValues() {
    return (
        <section className="relative py-20 bg-linear-to-b from-slate-50 to-white overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl opacity-40" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div data-aos="fade-up" className="text-center mb-16">
                    <Badge className="bg-linear-to-r from-blue-600 to-cyan-600 mb-6 px-8 py-3 text-sm font-bold rounded-full">
                        Our Values
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Values that guide every project.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We make decisions based on long-term impact, transparency, and thoughtful execution.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group p-8 border-blue-200/50 bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-cyan-600 text-white mb-5">
                                <i className={`${value.icon} text-lg`} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{value.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
