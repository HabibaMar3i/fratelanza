import CompanyHero from '#components/about/CompanyHero'
import CompanyStory from '#components/about/CompanyStory'
import CompanyValues from '#components/about/CompanyValues'
import OurTeam from '#components/about/OurTeam'

export default function AboutUs() {
    return (
        <div>
            <CompanyHero />
            <CompanyStory />
            <CompanyValues />
            <OurTeam />
        </div>
    )
}
