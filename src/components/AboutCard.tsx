import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IAboutCardProps {
  img: StaticImageData,
  alt: string,
  title: string
}

export const AboutCard = ({ img, alt, title }: IAboutCardProps) => {

  return (
    <article className='bg-black w-[345px] h-[372px] flex flex-col rounded-xl items-center justify-center p-5 gap-2'>
      <Image src={img} alt={alt} />
      <h3 className='font-bold text-xl'>{title}</h3>
    </article>
  )
}
