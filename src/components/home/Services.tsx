import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const services = [
    {
        icon: 'fas fa-code',
        title: 'Software Development',
        description: 'Custom business systems and applications tailored to your specific needs.',
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'Web & Mobile Apps',
        description: 'Responsive web and mobile applications that engage your users.',
    },
    {
        icon: 'fas fa-brain',
        title: 'AI Solutions',
        description: 'Intelligent automation and data analysis to drive smarter decisions.',
    },
    {
        icon: 'fas fa-cash-register',
        title: 'POS Systems',
        description: 'Complete point-of-sale and management systems for retail operations.',
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Business Analytics',
        description: 'Data-driven insights to optimize your operations and growth.',
    },
    {
        icon: 'fas fa-graduation-cap',
        title: 'Technical Training',
        description: 'Professional development and talent upskilling for your team.',
    },
]

export default function ServicesOverview() {
    return (
        <section className="relative py-20 bg-white">
            {/* Background gradient orbs */}
            <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl opacity-30" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div data-aos="fade-up" className="text-center mb-16">
                    <Badge variant="default" className="bg-linear-to-r from-blue-600 to-cyan-600 mb-4 inline-block">
                        Our Expertise
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Our <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-600">Services</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Comprehensive technology solutions designed to help your business grow and operate more efficiently.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group p-8 border-blue-200/50 bg-linear-to-br from-blue-50/50 to-cyan-50/30 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 text-white mb-4 group-hover:shadow-lg transition-shadow">
                                <i className={`${service.icon} text-xl`} />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Link */}
                            <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-cyan-600 transition">
                                Learn more
                                <i className="fas fa-arrow-right text-sm" />
                            </Link>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div data-aos="fade-up" data-aos-delay="600" className="text-center mt-16">
                    <Button asChild className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-bold px-10 py-6 text-lg">
                        <Link to="/services" className="flex items-center gap-3 justify-center">
                            <i className="fas fa-arrow-right" />
                            View All Services
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}