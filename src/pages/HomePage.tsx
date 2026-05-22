import HeroSection from "#components/home/Hero";
import RecentProjects from "#components/home/RecentProjects";
import WhyChooseUs from "#components/home/WhyChooseUs";
import ServicesOverview from '#components/home/Services';

export default function HomePage() {
    return <div>
        <HeroSection/>
        <ServicesOverview/>
        <WhyChooseUs/>
        <RecentProjects/>
    </div>;
}
