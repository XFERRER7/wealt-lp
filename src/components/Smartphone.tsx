import Image from 'next/image'
import smartphonesImg from '@/assets/images/smartphones.png'

export const Smartphone = () => {
  return (
    <section id='characteristics' className='flex items-center justify-center py-10'>
      <Image 
      src={smartphonesImg} 
      alt='Imagem de 3 celulares'
      className='h-auto w-auto md:h-[550px] md:w-[700px]'
      />
    </section>
  )
}
