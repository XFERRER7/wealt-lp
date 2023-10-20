import Image from 'next/image'
import React from 'react'
import playStoreLogo from '@/assets/images/play-store.png'
import appStoreLogo from '@/assets/images/app-store.png'
import phonesImg from '@/assets/images/phone-small.png'

export const Download = () => {
  return (
    <section className='bg-zinc-800 flex justify-around items-center gap-20 h-[300px] relative'>

      <div className='flex flex-col gap-8'>
        <h2 className="font-bold text-[40px] leading-[1.15]">Download Wealt! and <br /> Join with Other Peoples</h2>

        <div className="flex gap-5 items-center">
          <a
            className="bg-black rounded-lg flex gap-3 justify-center items-center w-[9.0rem] py-1 text-sm"
            href="https://play.google.com/store"
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

      <div />

      <Image src={phonesImg} alt='Imagem de celulares' className='absolute -top-24 right-5'/>

    </section>
  )
}