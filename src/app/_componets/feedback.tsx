import Image from 'next/image';
import img1 from '@/assets/img/custom.jpeg'

export default function Feedback() {
  return (
    <section id='ualifications' className='container my-px space-y-6 py-8 md:py-12 lg:py-24 mb-1 h-full'>
      <h1 className='font-heading text-3xl md:text-4xl lg:text-5xl text-center'>Aqui as opniões dos nosos clientes são importantes</h1>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 h-full'>
        <Image className='max-h-80 object-cover' src={img1} alt='123' />
        <div className=''>
          <span className='text-5xl'>	&ldquo;</span>
          <span className='text-lg'>
            Minha experiência na consulta de dentista foi extremamente positiva. O profissional demonstrou habilidade técnica excepcional, explicou de forma clara e cuidadosa cada procedimento, e o ambiente acolhedor proporcionou conforto durante toda a visita. Recomendo totalmente!
          </span>
          <span className='text-5xl'>	&rdquo;	</span>

        </div>
      </div>
    </section>
  )
}
