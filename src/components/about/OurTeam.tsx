import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const team = [
  {
    name: 'Sara Amin',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Omar Nabil',
    role: 'Head of Engineering',
    image: 'https://images.pexels.com/photos/3775536/pexels-photo-3775536.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Mona El-Sayed',
    role: 'Product Design Lead',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function OurTeam() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <Badge className="bg-linear-to-r from-blue-600 to-cyan-600 mb-6 px-8 py-3 text-sm font-bold rounded-full">
            Leadership Team
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Meet the people behind our work.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A balanced team of strategists, creatives, and engineers who bring your vision to life.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group overflow-hidden border-blue-200/50 bg-linear-to-br from-blue-50/50 to-cyan-50/30 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-slate-600 leading-relaxed">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
