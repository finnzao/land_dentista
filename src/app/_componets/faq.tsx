'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const content = [
  {
    id: 1,
    title: 'CLAREAMENTO ENFRAQUECE OS DENTES?',
    episodes: [
      { id: 2, title: 'O clareamento consiste em uma reação química. O gel clareador age no pigmento que ocasiona o escurecimento dental. Esse processo não é abrasivo e não afeta a estrutura dos dentes' },
    ],
  },
  {
    id: 2,
    title: 'ADULTO PODE FAZER TRATAMENTO COM APARELHO ORTODÔNTICO?',
    episodes: [
      { id: 2, title: 'Sim, os pacientes que possuem desajustes na posição dos dentes ou no tamanho dos ossos da face, com consequente desarmonia muscular, devem ser submetidos ao tratamento ortodôntico, mesmo quando em idade adulta.' },
    ],
  },
  {
    id: 3,
    title: 'GRÁVIDAS PODEM FAZER TRATAMENTO ODONTOLÓGICO?',
    episodes: [
      { id: 2, title: 'Já é conhecida a importância do pré-natal na área médica, valorizando a gestação quanto aos cuidados da mãe e do bebê. Da mesma maneira, na Odontologia, a abordagem da criança a partir da gestação se tornou incontestável e aumentam as chances do bebê ter saúde bucal. Este cuidado possibilita que a grávida tenha uma microbiota compatível com saúde, diminuindo as chances de transmissão vertical de microrganimos patogênicos da mãe para a criança.' },
    ],
  },

];

function FeatureSection() {
  return (
    <section
      id='feature'
      className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'
    >

      <div className='mx-auto text-center md:max-w-[58rem]'>
        <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
          Perguntas frequentes
        </h2>
        <p className='leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-4'>

        </p>
        <Accordion type='single' collapsible className='w-full'>
          {content.map((item) => (
            <AccordionItem value={`item-${item.id}`} key={item.id}>
              <AccordionTrigger>
                <div className='space-y-1 text-left'>
                  <h4 className='text-sm font-medium leading-none'>
                    {item.title}
                  </h4>

                </div>
              </AccordionTrigger>
              <AccordionContent className='text-left'>
                {item.episodes.map((episode) => (
                  <>
                    <div key={episode.id} className='text-sm'>
                      {`${episode.title}`}
                    </div>

                  </>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FeatureSection;