import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const features = [
    {
        icon: 'fas fa-rocket',
        title: 'Fast Delivery',
        description: 'Quick turnaround times without compromising on quality. Agile methodology ensures your project moves forward efficiently.',
    },
    {
        icon: 'fas fa-users',
        title: 'Expert Team',
        description: 'Access to a network of 100+ skilled professionals across development, design, and technical domains.',
    },
    {
        icon: 'fas fa-cogs',
        title: 'Flexible Solutions',
        description: 'Scalable systems that grow with your business. From startups to enterprises, we adapt to your needs.',
    },
    {
        icon: 'fas fa-handshake',
        title: 'Professional Management',
        description: 'Dedicated project managers ensure clear communication and on-time delivery of your solutions.',
    },
]

export default function WhyChooseUs() {
    return (
        <section className="relative py-20 bg-linear-to-b from-slate-50 to-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl opacity-40" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div data-aos="fade-up" className="text-center mb-16">
                    <Badge variant="default" className="bg-linear-to-r from-blue-600 to-cyan-600 mb-4 inline-block">
                        Why Us
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Why Choose <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-600">Fratelanza</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We combine professional expertise with agility to deliver solutions that truly transform your business.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Text Features */}
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                data-aos="fade-right"
                                data-aos-delay={index * 100}
                                className="flex gap-5 group"
                            >
                                {/* Icon */}
                                <div className="shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-cyan-500 text-white group-hover:shadow-lg transition-shadow">
                                        <i className={`${feature.icon} text-lg`} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Image */}
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="relative rounded-2xl overflow-hidden shadow-xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                            alt="Team collaboration"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 to-transparent" />
                    </div>
                </div>

                {/* Stats Section */}
                <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t-2 border-blue-200/50">
                    <Card className="text-center border-blue-200/50 bg-linear-to-br from-blue-50/50 to-cyan-50/30 group hover:shadow-lg transition-shadow p-8">
                        <p className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-600 mb-2">
                            50+
                        </p>
                        <p className="text-slate-600 font-semibold">Projects Delivered</p>
                    </Card>
                    <Card className="text-center border-blue-200/50 bg-linear-to-br from-cyan-50/50 to-teal-50/30 group hover:shadow-lg transition-shadow p-8">
                        <p className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-600 to-teal-600 mb-2">
                            30+
                        </p>
                        <p className="text-slate-600 font-semibold">Satisfied Clients</p>
                    </Card>
                    <Card className="text-center border-blue-200/50 bg-linear-to-br from-teal-50/50 to-blue-50/30 group hover:shadow-lg transition-shadow p-8">
                        <p className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-teal-600 to-blue-600 mb-2">
                            100%
                        </p>
                        <p className="text-slate-600 font-semibold">Commitment to Quality</p>
                    </Card>
                </div>

                {/* CTA */}
                <div data-aos="fade-up" data-aos-delay="300" className="text-center mt-16">
                    <p className="text-slate-600 mb-6">Ready to transform your business?</p>
                    <Button asChild className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-bold px-10 py-6 text-lg">
                        <Link to="/contact-us" className="flex items-center gap-3 justify-center">
                            <i className="fas fa-envelope" />
                            Get in Touch Today
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}