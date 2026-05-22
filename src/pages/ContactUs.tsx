import ContactHero from '#components/contact/ContactHero'
import ContactOverview from '#components/contact/ContactOverview'
import ContactForm from '#components/contact/ContactForm'
import ContactCTA from '#components/contact/ContactCTA'

export default function ContactUs() {
    return (
        <div>
            <ContactHero />
            <ContactOverview />
            <ContactForm />
            <ContactCTA />
        </div>
    )
}
