import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'Full-stack e-commerce solution with payment integration and inventory management.',
        image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&h=300&fit=crop',
        tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
        id: 2,
        title: 'Mobile Banking App',
        category: 'Mobile Development',
        description: 'Secure mobile banking application with real-time transactions and analytics.',
        image: 'https://images.unsplash.com/photo-1609921141835-710b7fa6e438?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=500&h=300&fit=crop',
        tags: ['React Native', 'Firebase', 'iOS/Android'],
    },
    {
        id: 3,
        title: 'AI Analytics Dashboard',
        category: 'AI Solutions',
        description: 'Advanced analytics dashboard powered by machine learning algorithms.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
        tags: ['Python', 'TensorFlow', 'React'],
    },
    {
        id: 4,
        title: 'Restaurant POS System',
        category: 'POS Systems',
        description: 'Complete point-of-sale system with kitchen management and reporting.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
        tags: ['Vue.js', 'Express', 'PostgreSQL'],
    },
]

export default function RecentProjects() {
    return (
        <section className="relative py-20 bg-slate-50 overflow-hidden">
            {/* Background orbs */}
            <div className="absolute top-10 right-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-200/15 rounded-full blur-3xl opacity-30" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div data-aos="fade-up" className="text-center mb-16">
                    <Badge className="bg-linear-to-r from-blue-600 to-cyan-600 mb-6 px-8 py-3 text-sm font-bold rounded-full">
                        Our Work
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Recent <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-600">Projects</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        See what we've built for our clients across different industries and technologies.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <Card
                            key={project.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="group overflow-hidden border-blue-200/50 bg-white hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden bg-slate-200">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent" />
                                <Badge className="absolute top-4 left-4 bg-linear-to-r from-blue-600 to-cyan-600">
                                    {project.category}
                                </Badge>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <Link to="/portfolio" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-cyan-600 transition">
                                    View Project
                                    <i className="fas fa-arrow-right text-sm" />
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* CTA */}
                <div data-aos="fade-up" data-aos-delay="400" className="text-center">
                    <Button asChild className="rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-bold px-10 py-6 text-lg">
                        <Link to="/portfolio" className="flex items-center gap-3 justify-center">
                            <i className="fas fa-folder-open" />
                            View Full Portfolio
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}