import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const channels = [
  {
    title: 'Direct support',
    description: '+20 1033316088\nResponse within 24 hours for new project requests.',
    icon: 'fas fa-phone-alt',
  },
  {
    title: 'Professional network',
    description: 'linkedin.com/company/fratelanza\nConnect with our team and review company updates.',
    icon: 'fab fa-linkedin',
  },
  {
    title: 'Email inquiries',
    description: 'hello@fratelanza.com\nProject questions, pricing, and collaboration requests.',
    icon: 'fas fa-envelope',
  },
]

export default function ContactOverview() {
  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="absolute left-0 top-10 hidden h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl lg:block" />
      <div className="absolute right-0 bottom-10 hidden h-80 w-80 rounded-full bg-blue-200/30 blur-3xl lg:block" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <Badge className="bg-linear-to-r from-blue-600 to-cyan-600 mb-4 px-7 py-2 text-sm font-semibold text-white rounded-full">
            Contact details
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Reach us through the channel that fits your needs.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Whether you want to start a new project, ask about capabilities, or explore a partnership, we are available.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {channels.map((item, index) => (
            <Card
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-600 text-white mb-6">
                <i className={`${item.icon} text-lg`} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
              <p className="whitespace-pre-line text-slate-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
