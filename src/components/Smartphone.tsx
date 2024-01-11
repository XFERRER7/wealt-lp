import Image from 'next/image'
import smartphonesImg from '@/assets/images/smartphones.png'

export const Smartphone = () => {
  return (
    <section className='flex items-center justify-center py-10'>
      <Image 
      src={smartphonesImg} 
      alt='Imagem de 3 celulares'
      className='h-[350px] w-[650px] md:h-[550px] md:w-[700px]'
      />
    </section>
  )
}
