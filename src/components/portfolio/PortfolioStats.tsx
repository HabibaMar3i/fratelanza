import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const stats = [
  {
    label: 'Projects delivered',
    value: '50+',
    description: 'From MVPs to full enterprise experiences.',
    icon: 'fas fa-briefcase',
  },
  {
    label: 'Client retention',
    value: '92%',
    description: 'Long-term relationships with businesses across industries.',
    icon: 'fas fa-handshake',
  },
  {
    label: 'Average launch time',
    value: '12 weeks',
    description: 'Agile teams that move quickly without sacrificing quality.',
    icon: 'fas fa-stopwatch',
  },
]

export default function PortfolioStats() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 hidden h-72 bg-cyan-100/50 blur-3xl lg:block" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Badge className="bg-linear-to-r from-blue-600 to-cyan-600 mb-4 px-7 py-2 text-sm font-semibold text-white rounded-full">
              Results
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Portfolio outcomes that speak for themselves.
            </h2>
            <p className="mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
              Our work is focused on measurable product impact, faster time to market, and reliable user experiences.
            </p>
          </div>

          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <Card
                key={stat.label}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <i className={`${stat.icon} text-lg`} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm text-slate-600">{stat.label}</p>
                  </div>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
