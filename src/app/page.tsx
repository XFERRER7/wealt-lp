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
import { Header } from "@/components/Header"

export default function Home() {
  return (
    <>
      <Header />

      <main>

        <About />
        <Smartphone />
        <Download />
        <section className="h-10 md:h-[200px]" />

      </main>

      <footer className="h-[243px] bg-[#141414] flex flex-col justify-between items-center pt-8 pb-5">

        <div className="flex justify-between items-center w-[8.5rem]">
          <Image width={45} height={27} src={logo} alt="logo" className="mb-1" />
          <h1 className="font-lilac text-2xl">Wealt</h1>
        </div>

        <ul className="flex gap-3 text-sm px-5 justify-center">
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Careers</li>
          <li>Help</li>
          <li>Privacy Policy</li>
        </ul>

        <div className="block sm:hidden">
            <ul className="flex gap-2">
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={instagramImg} alt="Icone de rede social" />
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={unknownImg} alt="Icone de rede social" />
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={twitterImg} alt="Icone de rede social" />
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={youtubeImg} alt="Icone de rede social" />
              </li>
            </ul>
          </div>

        <div className="w-[80%] border-t-2 border border-white/10 " />

        <div className="w-[80%] flex justify-center md:justify-between items-center">
          <p className="text-xs text-[##D9DBE1]">© 2020 Wealt . All rights reserved</p>
          <div className="hidden md:block">
            <ul className="flex gap-2">
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={instagramImg} alt="Icone de rede social" />
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={unknownImg} alt="Icone de rede social" />
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={twitterImg} alt="Icone de rede social" />
              </li>
              <li className="bg-white/10 p-[0.30rem] rounded-full flex justify-center items-center">
                <Image src={youtubeImg} alt="Icone de rede social" />
              </li>
            </ul>
          </div>
        </div>

      </footer>
    </>
  )
}
