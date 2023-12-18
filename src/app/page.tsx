import HeroSection from './_componets/heroSection';
import AboutSection from './_componets/aboutSection';
import QualificationsSection from './_componets/qualificationsSection';
import ShowCase from './_componets/showCase';
import Faq from './_componets/faq';
import Feedback from './_componets/feedback';


export default function Home() {
  return (
    <main className=''>
      <HeroSection />

      <AboutSection />
      <QualificationsSection />


      <ShowCase />
      <Faq />
      <Feedback />

    </main>
  )
} 
