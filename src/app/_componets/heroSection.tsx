import React from 'react'


function HeroSection() {
  return (
    <section id="intro" className='space-y-6 py-8 md:py-12 lg:py-32'>
      <div className='container flex max-w-[64rem] flex-col items-center text-center gap-4'>
        <span className='rounded-2xç bg-muted px-4 py-1.5 text-sm font-medium flex items-center'>
          Faça seu agendamento agora
        </span>
        <h1 className='font-heading text-4xl md:text-6xl lg:text-7xl'>
          Mudando vidas através de sorrisos!
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted- sm:text-xl sm:leading-8'>
          another text
        </p>

        <div className='space-x-4 sm:flex'>
          <a href="#contact" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Marcar consulta</a>
          <a href="#about" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" >Saber mais</a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;