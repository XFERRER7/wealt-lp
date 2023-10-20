import Image from "next/image"
import logo from '@/assets/images/logo.png'
import playStoreLogo from '@/assets/images/play-store.png'
import appStoreLogo from '@/assets/images/app-store.png'
import phonesImg from '@/assets/images/phones.png'
import bgImg from '@/assets/images/bg.png'
import twitterImg from '@/assets/images/twitter-icon.png'
import instagramImg from '@/assets/images/insta-icon.png'
import youtubeImg from '@/assets/images/youtube-icon.png'
import unknownImg from '@/assets/images/unknown-icon.png'

import { About } from "@/components/About"
import { Smartphone } from "@/components/Smartphone"
import { Download } from "@/components/Download"

export default function Home() {
  return (
    <>
      <header className="relative h-screen flex flex-col justify-between overflow-y-hidden overflow-x-hidden px-20 py-10">

        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between items-center w-[8.5rem]">
            <Image width={45} height={27} src={logo} alt="logo" className="mb-1" />
            <h1 className="font-lilac text-2xl">Wealt</h1>
          </div>
          <nav>
            <ul className="flex gap-8 font-medium">
              <li>Sobre</li>
              <li>Característicos</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
          </nav>
          <div className="w-[8.5rem]"></div>
        </div>

        <div className="flex justify-between items-center h-full">

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-7">
              <h2 className="font-bold text-[50px] leading-[1.15]">
                Seu Caminho para a <br /> Prosperidade <br /> Financeira
              </h2>

              <p className="text-zinc-500 text-sm">
                Wealt é seu companheiro confiável para uma gestão financeira segura <br /> e sem complicações.
              </p>
            </div>

            <div className="flex gap-5 items-center">
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
            <Image src={phonesImg} height={617} width={602} alt="phones" className="mt-28" />
          </div>

        </div>

        <Image
          src={bgImg}
          height={1143}
          width={969}
          alt="background image"
          className="absolute top-0 right-1 zz -z-10"
        />

      </header>

      <main>

        <About />
        <Smartphone />
        <Download />
        <section className="h-[200px]" />

      </main>

      <footer className="h-[243px] bg-[#141414] flex flex-col justify-between items-center pt-8 pb-5">

        <div className="flex justify-between items-center w-[8.5rem]">
          <Image width={45} height={27} src={logo} alt="logo" className="mb-1" />
          <h1 className="font-lilac text-2xl">Wealt</h1>
        </div>

        <ul className="flex gap-3 text-sm">
          <li>About</li>
          <li>About</li>
          <li>Pricing</li>
          <li>Careers</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
        </ul>

        <div className="w-[80%] border-t-2 border border-white/10 "/>

        <div className="w-[80%] flex justify-between items-center">
          <p className="text-xs text-[##D9DBE1]">© 2020 Wealt . All rights reserved</p>
          <div>
            <ul className="flex gap-2">
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={instagramImg} alt="Icone de rede social"/>
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={unknownImg} alt="Icone de rede social"/>
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={twitterImg} alt="Icone de rede social"/>
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={youtubeImg} alt="Icone de rede social"/>
              </li>
            </ul>
          </div>
        </div>

      </footer>
    </>
  )
}
