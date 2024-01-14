'use client'
import Image from "next/image"
import logo from '@/assets/images/logo.png'
import playStoreLogo from '@/assets/images/play-store.png'
import appStoreLogo from '@/assets/images/app-store.png'
import phonesImg from '@/assets/images/phones.png'
import bgImg from '@/assets/images/bg.png'
import { useState } from "react"
import { CloudCog, Contact, ListCollapse, Menu, SearchSlash, X } from "lucide-react"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1550px] mx-auto relative md:h-screen flex flex-col justify-between overflow-y-hidden overflow-x-hidden px-10 md:px-20 py-10">

      {/* Mobile navbar */}

      <div className={`
        ${isMenuOpen ? 'absolute' : 'hidden'} top-0
        w-[calc(100%-5rem)] mt-20 md:hidden left-1/2 transform -translate-x-1/2
        `}
      >
        <div className="
          w-full h-full border-b border-t flex flex-col
          justify-center gap-3 py-5 px-5 text-xl bg-zinc-800"
        >

          <a href="#about" className='flex gap-2 items-center'>
            <SearchSlash />
            <span className="h-10 px-2 text-white flex items-center">Sobre</span>
          </a>

          <a href="mailto:seiertechnology@gmail.com" target="_blank" className='flex gap-2 items-center'>
            <Contact />
            <span className="h-10 px-2 text-white flex items-center">Contato</span>
          </a>

        </div>

      </div>

      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center w-[8.5rem]">
          <Image width={45} height={27} src={logo} alt="logo" className="mb-1" />
          <h1 className="font-lilac text-2xl">Wealt</h1>
        </div>
        <nav className="hidden md:block z-50">
          <ul className="flex gap-8 font-medium">
            <li>
              <a href="#about">
                Sobre
              </a>
            </li>
            <li>
              <a href="mailto:seiertechnology@gmail.com" target="_blank">
                Contato
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {
            isMenuOpen ? <X size={30} /> : <Menu size={30} />
          }
        </button>
        <div className="hidden md:w-[8.5rem]"></div>
      </div>

      <div className="flex md:flex-row flex-col gap-8 md:justify-between items-center h-full mt-8 md:mt-0">

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-7">
            <h2 className="font-bold text-center md:text-left text-2xl md:text-[50px] leading-[1.15]">
              Seu Caminho para a <br className="hidden md:block" /> Prosperidade <br className="hidden md:block" /> Financeira
            </h2>

            <p className="text-zinc-500 text-center md:text-left text-sm">
              Wealt é seu companheiro confiável para uma gestão financeira segura <br className="hidden md:block" /> e sem complicações.
            </p>
          </div>

          <div className="flex gap-5 items-center mx-auto md:mx-0">
            <a
              className="bg-[#2F2F2F] rounded-lg flex gap-3 justify-center items-center w-[9.0rem] py-1 text-sm"
              href="https://play.google.com/store/apps/details?id=app.wealt"
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
