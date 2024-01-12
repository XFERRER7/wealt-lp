import Image from "next/image"
import aboutImg1 from '@/assets/images/about-1.png'
import aboutImg2 from '@/assets/images/about-2.png'
import aboutImg3 from '@/assets/images/about-3.png'
import aboutImg4 from '@/assets/images/about-4.png'
import { AboutCard } from "./AboutCard"

export const About = () => {
  return (
    <section id="about" className="bg-zinc-800 py-10 flex flex-col gap-5 items-center ">

      <h2 className="font-bold text-2xl md:text-[50px] leading-[1.15]">Sobre o app</h2>
      <p className="text-zinc-500 text-sm md:w-[40rem] text-center px-2 md:px-0">Wealt foi cuidadosamente desenvolvido para  simplificar sua vida, oferecendo uma variedade de ferramentas para auxiliá-lo, tudo em uma plataforma unificada. Com o FinançasMestras, você pode acompanhar e gerenciar sua   riqueza de maneira simples e eficaz, ajudando-o a tomar decisões financeiras informadas. Assuma o controle total   de suas finanças!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <AboutCard
          img={aboutImg1}
          alt="Imagem 1 do app"
          title="Administre suas assinaturas"
        />
        <AboutCard
          img={aboutImg2}
          alt="Imagem 2 do app"
          title="Adquira insights valiosos"
        />
        <AboutCard
          img={aboutImg3}
          alt="Imagem 3 do app"
          title="Administre suas assinaturas"
        />
        <AboutCard
          img={aboutImg4}
          alt="Imagem 4 do app"
          title="Adquira insights valiosos"
        />

      </div>


    </section>
  )
}
