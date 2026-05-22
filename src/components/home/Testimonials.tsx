import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const testimonials = [
    {
        id: 1,
        name: 'Ahmed Hassan',
        role: 'CEO, TechStart Egypt',
        content: 'Fratelanza transformed our operations with a custom management system. Their team was professional, responsive, and delivered beyond expectations.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
        id: 2,
        name: 'Layla Mohamed',
        role: 'Founder, Fashion E-Store',
        content: 'The e-commerce platform they built for us increased our sales by 40%. Their support team is always available and helpful.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
        id: 3,
        name: 'Karim Ibrahim',
        role: 'Operations Manager, Retail Chain',
        content: 'The POS system implementation was smooth and seamless. We saved significant time on inventory management and reporting.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
]

export default function Testimonials() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            {/* Background orbs */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl opacity-35" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div data-aos="fade-up" className="text-center mb-16">
                    <Badge variant="default" className="bg-linear-to-r from-blue-600 to-cyan-600 mb-4 inline-block">
                        Client Stories
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        What Our <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-600">Clients Say</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Real feedback from businesses we've helped transform and grow.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="p-8 border-blue-200/50 bg-linear-to-br from-blue-50/50 to-cyan-50/30 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <i key={i} className="fas fa-star text-yellow-400" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-slate-700 mb-6 leading-relaxed italic text-base sm:text-lg">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-blue-200/30">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-slate-900">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}