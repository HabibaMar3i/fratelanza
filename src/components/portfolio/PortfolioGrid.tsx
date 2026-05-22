import { Link } from 'react-router-dom'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const caseStudies = [
  {
    id: 1,
    title: 'Retail POS Transformation',
    category: 'Point of Sale',
    description: 'A fast, mobile-friendly POS system for retail and hospitality that simplifies checkout and inventory control.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80',
    tags: ['POS', 'Retail', 'UX'],
  },
  {
    id: 2,
    title: 'Smart Analytics Dashboard',
    category: 'AI & Data',
    description: 'A data platform that helps teams spot trends, automate reporting, and unlock faster decisions.',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=900&q=80',
    tags: ['Analytics', 'AI', 'Automation'],
  },
  {
    id: 3,
    title: 'E-Commerce Growth Platform',
    category: 'Web App',
    description: 'A scalable commerce experience with marketing tools, payment flow, and performance optimization.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    tags: ['E-Commerce', 'React', 'Performance'],
  },
  {
    id: 4,
    title: 'Mobile Service Experience',
    category: 'Mobile App',
    description: 'A polished mobile product designed to increase user retention and simplify service delivery.',
    image: 'https://images.unsplash.com/photo-1661160094555-a798a7df499f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMGFwcHN8ZW58MHx8MHx8fDA%3D?auto=format&fit=crop&w=900&q=80',
    tags: ['Mobile', 'UX', 'iOS/Android'],
  },
]

export default function PortfolioGrid() {
  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="absolute left-0 top-0 hidden h-72 w-72 rounded-full bg-blue-200/20 blur-3xl lg:block" />
      <div className="absolute right-0 bottom-0 hidden h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <Badge className="bg-linear-to-r from-blue-600 to-cyan-600 mb-4 px-7 py-2 text-sm font-semibold text-white rounded-full">
            Featured work
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Selected case studies with elegant design and measurable impact.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Every project combines strategic thinking, polished interfaces, and engineering that scales.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((caseStudy, index) => (
            <Card
              key={caseStudy.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="overflow-hidden border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <Badge className="absolute left-5 top-5 bg-white text-slate-900 shadow-lg">
                  {caseStudy.category}
                </Badge>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{caseStudy.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{caseStudy.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-cyan-600 transition"
                >
                  Learn more
                  <i className="fas fa-arrow-right text-sm" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
