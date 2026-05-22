import PortfolioHero from '#components/portfolio/PortfolioHero'
import PortfolioGrid from '#components/portfolio/PortfolioGrid'
import PortfolioStats from '#components/portfolio/PortfolioStats'
import PortfolioCTA from '#components/portfolio/PortfolioCTA'

export default function Portfolio() {
    return (
        <div>
            <PortfolioHero />
            <PortfolioGrid />
            <PortfolioStats />
            <PortfolioCTA />
        </div>
    )
}
