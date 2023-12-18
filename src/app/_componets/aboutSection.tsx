import Image from 'next/image';
import React from 'react';
import profileImg from '../../assets/img/profile.jpg';
import SocialLinks from './socialLinks';
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon, YoutTubeIcon } from '@/components/iconsSocial';
export default function AboutSection() {
    return (
        <section
            id='about'
            className='container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24'
        >

            <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr] my-2'>
                <div className='lg:pl-20 flex justify-center'>
                    <div className='max-w-xs px-2.5 lg:max-w-noneff'>
                        <Image
                            src={profileImg}
                            alt='Profile'
                            width={800}
                            height={800}
                            quality='95'
                            priority={true}
                            className='aspect-square object-cover bg-zinc-100 '
                        />
                    </div>
                </div>

                <div className='lg:order-first lg:row-span-2 tex-center md:text-start'>
                    <h1 className='font-heading text-3xl md:text-4xl lg:text-5xl'>Sobre nós</h1>
                    <p>
                        Olá, somos a equipe da clínica dentária <span>Dentes Novos</span>, comprometida em oferecer cuidados odontológicos excepcionais para todos os nossos clientes. Nosso objetivo é criar um ambiente acolhedor e confortável, onde cada paciente se sinta valorizado e compreendido.
                        Nossos profissionais são dedicados e apaixonados pela arte de transformar sorrisos, buscando constantemente a excelência em cada tratamento. Utilizamos as mais recentes tecnologias e técnicas inovadoras para garantir procedimentos eficazes e indolores.
                        Em nossa clínica, você encontrará uma equipe amigável e comprometida em oferecer atendimento personalizado. Realizamos uma variedade de serviços odontológicos, desde limpezas e check-ups regulares até procedimentos estéticos avançados. Cada detalhe é cuidadosamente considerado para assegurar a satisfação e confiança de nossos pacientes.
                    </p>
                    {/* <div className='mt-6 flex justify-center md:justify-start gap-6'>
                        <SocialLinks href="#" icon={InstagramIcon} />
                    </div> */}
                </div>
            </div>
        </section>
    )
}
