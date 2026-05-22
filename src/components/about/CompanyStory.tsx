import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

const storyItems = [
  {
    title: 'Our Journey',
    description: 'Founded to help ambitious businesses use technology with confidence, we bring a practical mindset to every software challenge.',
    icon: 'fas fa-route',
  },
  {
    title: 'Our Mission',
    description: 'To create digital experiences that feel effortless, deliver measurable results, and make every customer interaction more meaningful.',
    icon: 'fas fa-bullseye',
  },
  {
    title: 'Our Promise',
    description: 'Transparent delivery, ongoing support, and strong collaboration so your project stays on track and grows with you.',
    icon: 'fas fa-handshake',
  },
]

export default function CompanyStory() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center mb-16">
          <Badge className="bg-linear-to-r from-blue-600 to-cyan-600 mb-4 px-8 py-3 text-sm font-bold rounded-full">
            About Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Building modern products with a human-centered approach.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We blend design, engineering, and business thinking into digital solutions that help teams move faster and customers feel more connected.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {storyItems.map((item, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group p-8 border-blue-200/50 bg-linear-to-br from-blue-50/50 to-cyan-50/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br from-blue-600 to-cyan-600 text-white mb-6">
                <i className={`${item.icon} text-xl`} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
