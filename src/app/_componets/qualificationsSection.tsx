'use client'

import imgPrev from '@/assets/img/features/prev.png';
import imgRas from '@/assets/img/features/ras.png';
import imgCla from '@/assets/img/features/shineTooth.png';
import imgRes from '@/assets/img/features/restauren.png';
import Image from "next/image";

export default function QualificationsSection() {
    return (



        <section id="qualifications" className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'>
            
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 ">
                <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl'>
                    Especialidades
                </h2>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Aqui oferemos os seguintes serviços
                </p>
            </div>


            <div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3'>

                <div className='relative overflow-hidden rounded-lg border bg-background p-2'>

                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6 items-center'>

                        <Image className='h-12 w-12 fill-current' alt="Prev" src={imgPrev} />
                        <div className='space-y-2 text-center'>
                            <h3 className='font-bold'>Prevenção</h3>
                            <p className='text-sm text-muted-foreground'>
                                O melhor acompanhamento de confiança para prevenir problemas odontológicos que podem se agravar com o tempo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6 items-center'>
                        <Image className='h-12 w-12 fill-current' alt="Prev" src={imgRas} />
                        <div className='space-y-2 text-center'>
                            <h3 className='font-bold'>Limpeza</h3>
                            <p className='text-sm text-muted-foreground'>
                                Procedimento de limpeza ,como finalidade acabar com as impurezas e manter os dentes bonitos e bem cuidados.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='relative overflow-hidden rounded-lg border bg-background p-2'>
                    <div className='flex h-[180px] flex-col justify-between rounded-md p-6 items-center'>
                        <Image className='h-12 w-12 fill-current' alt="Prev" src={imgCla} />

                        <div className='space-y-2 text-center'>
                            <h3 className='font-bold'>Clareamento Dental</h3>
                            <p className='text-sm text-muted-foreground'>
                                Eliminar os pigmentos que deixam os dentes manchados ou escurecidos. Assim renovando o seu sorriso , e entregando uma melhor qualidade de vida.
                            </p>
                        </div>
                    </div>
                </div>

            </div>


        </section >
    )
}
