import Image from 'next/image'
import LogoEvent from './Images/LogoEvent.png'
import Cup from './Images/Cup.png'

const cup = [
  { title: 'Botox Expert' },
  { title: 'Eyelid Surgery Expert' },
  { title: 'Filler Expert' },
  { title: 'Nose Implant Expert' },
  { title: 'Thread Lift Expert' },
  { title: 'Lips Surgery Expert' },
  { title: 'Lift-up Medical Equipment Expert' },
  { title: 'Best Laser Expert ' },
  { title: 'Acne Treatment Expert' },
  { title: 'Best Anti-Aging ' },
  { title: 'Hair Transplant Expert' },
  { title: 'Best Service Excellency' },
]


function Header() {
  return (
    <div className='bg-[#e8fffac7]' >
      <div className='max-w-7xl mx-auto px-5 opacity-[1.5]'>
        <div className='flex flex-col h-full items-center'>
          <div className='flex justify-center items-center mt-[50px] lg:mt-[50px] mb-[40px]'>
            <Image className='w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover' alt='LogoEvent' src={LogoEvent} width={350} height={350} quality={100} priority={true} />
          </div>
          <div className='flex flex-col items-center'>
            <label className='font-staatliches font-[400] text-[40px] lg:text-[52px] text-[#FF0070] text-center leading-[50px] lg:leading-[60px]'>the Most trusted</label>
            <label className='font-staatliches font-[400] text-[40px] lg:text-[52px] text-[#FF0070] text-center leading-[50px] lg:leading-[60px]'>Beauty Clinics</label>
            <label className='font-staatliches font-[400] text-[40px] lg:text-[52px] text-[#FF0070] text-center leading-[50px] lg:leading-[60px]'>2023</label>
          </div>
          <div className='flex justify-center my-[25px] lg:my-[50px] items-center'>
            <div className='flex w-[150px] border-[1px] border-solid border-[#FF0070]'></div>
            <div className='flex w-[17px] h-[17px] bg-[#FF0070] mx-[20.5px] rotate-45'></div>
            <div className='flex w-[150px] border-[1px] border-solid border-[#FF0070]'></div>
          </div>
          <div className='relative flex justify-center mb-[40px] backdrop-blur-3xl'>
            <p className='font-[400] text-[28px] lg:text-[32px] text-[#000000] text-center leading-[42px] lg:leading-[48px]'>
              สุดยอดคลินิกความงามที่ได้รับการคัดเลือกว่าน่าเชื่อถือ<br />
              คุณภาพยอดเยี่ยม ได้มาตรฐานที่ปลอดภัย<br />
              และดูแลโดยแพทย์ผู้เชี่ยวชาญ<br />
              ที่มีประสบการณ์ในวงการคลินิกความงาม ใน <span className='text-[#FF0070]'>12 สาขารางวัล</span>
            </p>
          </div>
          <div className='flex flex-col items-center px-6 lg:items-start lg:grid lg:grid-cols-2 lg:gap-x-[35px] gap-y-[20px] lg:gap-y-[50px] my-[75px] lg:my-[120px] '>
            {cup.map((item) => (
              <div key={item.title} className='flex items-center bg-[#fff] w-full lg:w-[387px] h-full px-5 py-6 lg:py-4 rounded-[20px] hover:scale-110 transition-all duration-500 hover:shadow-[#FF0070]/20 hover:shadow-2xl'>
                <div className='flex items-center h-full pr-[12px]'>
                  <Image className='object-cover w-[24px] h-[24px] lg:w-[38px] lg:h-[38px]' alt='Cup' src={Cup} quality={100} priority={true} width={38} height={38} />
                </div>
                <div className='flex items-center w-full lg:w-[265px]'>
                  <label className='font-[400] text-[20px] lg:text-[24px] text-[#000000] leading-[24px] lg:leading-[38px]'>{item.title}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header