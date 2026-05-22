import { Link } from 'react-router-dom'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'

const offerings = [
    {
        title: 'Custom Web Development',
        description: 'Fast, secure web applications with modern interfaces and scalable architectures.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D?auto=format&fit=crop&w=900&q=80',
        label: 'Web',
    },
    {
        title: 'Mobile Apps & PWAs',
        description: 'Native and web-first mobile experiences that keep customers engaged across devices.',
        image: 'https://images.unsplash.com/photo-1519336305162-4b6ed6b6fc83?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=900&q=80',
        label: 'Mobile',
    },
    {
        title: 'AI & Automation',
        description: 'Smart workflows, predictive analytics, and data-driven decision support for your team.',
        image: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?q=80&w=796&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=900&q=80',
        label: 'AI',
    },
    {
        title: 'Point of Sale Systems',
        description: 'Intuitive POS solutions designed for retail, hospitality, and service businesses.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
        label: 'POS',
    },
]

export default function ServiceOfferings() {
    return (
        <section className="relative py-20 bg-slate-50">
            <div className="absolute left-0 top-0 hidden h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl lg:block" />
            <div className="absolute right-0 bottom-0 hidden h-80 w-80 rounded-full bg-blue-200/30 blur-3xl lg:block" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
                    <Badge className="bg-blue-600 text-white mb-4 px-7 py-2 text-sm font-semibold rounded-full" data-aos="fade-down" data-aos-delay="150">
                        What we do
                    </Badge>
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                        Services designed for every stage of your digital journey.
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
                        Our services combine product strategy, design, engineering, and long-term support so your technology keeps
                        delivering value.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2">
                    {offerings.map((service, index) => (
                        <Card
                            key={service.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                                <Badge className="absolute left-5 top-5 bg-white text-slate-900 shadow-lg">
                                    {service.label}
                                </Badge>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                                <Button asChild className="rounded-full bg-slate-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200/30 hover:bg-blue-700">
                                    <Link to="/contact-us">Book a consultation</Link>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
