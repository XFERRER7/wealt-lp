import Image from 'next/image'
import React from 'react'
import playStoreLogo from '@/assets/images/play-store.png'
import appStoreLogo from '@/assets/images/app-store.png'
import phonesImg from '@/assets/images/phone-small.png'

export const Download = () => {
  return (
    <section id='services' className='w-full bg-zinc-800 flex justify-center items-center gap-20 h-[300px] relative'>

      <div className='flex flex-col items-center justify-center gap-8 mx-auto'>
        <h2 className="font-bold text-2xl md:text-[40px] text-center md:text-left leading-[1.15]">Baixe Wealt!<br />  Junte-se a outras pessoas</h2>

        <div className="flex gap-5 items-center">
          <a
            className="bg-black rounded-lg flex gap-3 justify-center items-center w-[9.0rem] py-1 text-sm"
            href="https://play.google.com/store/apps/details?id=app.wealt"
            target="_blank">
            <Image height={20} width={18} src={playStoreLogo} alt="play-store-logo" />
            <div className="flex flex-col">
              <p className="text-[0.50rem]">Free Download</p>
              <p className="font-medium -mt-2">Play Store</p>
            </div>
          </a>

          <a
            className="bg-black rounded-lg flex gap-3 justify-center items-center w-[9.0rem] py-1 text-sm"
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

      <div className='hidden md:block'/>

      <Image src={phonesImg} alt='Imagem de celulares' className='absolute -top-24 right-5 hidden md:block'/>

    </section>
  )
}
