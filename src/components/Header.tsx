'use client'
import Image from "next/image"
import logo from '@/assets/images/logo.png'
import playStoreLogo from '@/assets/images/play-store.png'
import appStoreLogo from '@/assets/images/app-store.png'
import phonesImg from '@/assets/images/phones.png'
import bgImg from '@/assets/images/bg.png'
import { useState } from "react"
import { Menu } from "lucide-react"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1550px] mx-auto relative md:h-screen flex flex-col justify-between overflow-y-hidden overflow-x-hidden px-10 md:px-20 py-10">

      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center w-[8.5rem]">
          <Image width={45} height={27} src={logo} alt="logo" className="mb-1" />
          <h1 className="font-lilac text-2xl">Wealt</h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-medium">
            <li>Sobre</li>
            <li>Característicos</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </nav>
        <button className="block md:hidden">
          <Menu size={30} />
        </button>
        <div className="hidden md:w-[8.5rem]"></div>
      </div>

      <div className="flex md:flex-row flex-col gap-8 md:justify-between items-center h-full mt-8 md:mt-0">

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-center md:text-left text-2xl md:text-[50px] leading-[1.15]">
              Seu Caminho para a <br className="hidden md:block"/> Prosperidade <br className="hidden md:block"/> Financeira
            </h2>
    
            <p className="text-zinc-500 text-center md:text-left text-sm">
              Wealt é seu companheiro confiável para uma gestão financeira segura <br className="hidden md:block"/> e sem complicações.
            </p>
          </div>

          <div className="flex gap-5 items-center mx-auto md:mx-0">
            <a
              className="bg-[#2F2F2F] rounded-lg flex gap-3 justify-center items-center w-[9.0rem] py-1 text-sm"
              href="https://play.google.com/store"
              target="_blank">
              <Image height={20} width={18} src={playStoreLogo} alt="play-store-logo" />
              <div className="flex flex-col">
                <p className="text-[0.50rem]">Free Download</p>
                <p className="font-medium -mt-2">Play Store</p>
              </div>
            </a>

            <a
              className="bg-[#2F2F2F] rounded-lg flex gap-3 justify-center items-center w-[9.0rem] py-1 text-sm"
              href="https://apps.apple.com/br/app/wealt/id1527903645"
              target="_blank">
              <Image height={26} width={24} src={appStoreLogo} alt="app-store-logo" />
              <div className="flex flex-col">
                <p className="text-[0.50rem]">Free Download</p>
                <p className="font-medium -mt-2">App Store</p>
              </div>
            </a>

          </div>
        </div>

        <div>
          <Image src={phonesImg} height={617} width={602} alt="phones" className=" md:mt-28" />
        </div>

      </div>

      <Image
        src={bgImg}
        height={1143}
        width={969}
        alt="background image"
        className="absolute top-0 right-1 zz -z-10 hidden md:block"
      />

    </header>
  )
}
