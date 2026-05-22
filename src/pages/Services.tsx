import ServiceHero from '#components/services/ServiceHero'
import ServiceOfferings from '#components/services/ServiceOfferings'
import ServiceExpertise from '#components/services/ServiceExpertise'
import ServiceCTA from '#components/services/ServiceCTA'

export default function Services() {
    return (
        <div>
            <ServiceHero />
            <ServiceOfferings />
            <ServiceExpertise />
            <ServiceCTA />
        </div>
    )
}
