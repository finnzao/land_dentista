import Image from "next/image"
import img1 from '@/assets/img/dente exemplo.jpg'

export default function ShowCase() {
    return (
        <section id="qualifications" className='bg-slate-50 dark:bg-transparent container space-y-6 py-8 md:py-12 lg:py-24'>
            <h2 className="font-heading text-3xl leading-[1.1] sm:text=3xl text-primary text-center">Sorrisos radiantes, clientes felizes, missão cumprida.</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
                <div>
                    <Image src={img1} alt="Image2" />
                </div>
                <div>
                    <Image src={img1} alt="Image1" />
                </div>
            </div>

        </section>
    )
}
