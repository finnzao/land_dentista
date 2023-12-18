import { cn } from '@/lib/utils'
import HeroSection from './_componets/heroSection'
import AboutSection from './_componets/aboutSection'
import QualificationsSection from './_componets/qualificationsSection'
import ShowCase from './_componets/showCase'
import Faq from './_componets/faq'



export default function Home() {
  return (
    <main className=''>
      <HeroSection />

      <AboutSection />
      <QualificationsSection />


      <ShowCase />
      <Faq />
      <section id="opinions">
        <h1 className='text-primary'>Opniões</h1>
      </section>

    </main>
  )
} 
