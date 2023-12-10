import { cn } from '@/lib/utils'
import HeroSection from './_componets/heroSection'
import AboutSection from './_componets/aboutSection'
import QualificationsSection from './_componets/qualificationsSection'



export default function Home() {
  return (
    <main className=''>
      <HeroSection />

      <AboutSection />
      <QualificationsSection />
      
      <section id="opinions">
        <h1 className='text-primary'>Opniões</h1>
      </section>

      <section id="specialties">
        <h1 className='text-primary'>Especialides</h1>
      </section>

      <section id="faq">
        <h1 className='text-primary'>Perguntas frequentes</h1>
      </section>


    </main>
  )
} 
