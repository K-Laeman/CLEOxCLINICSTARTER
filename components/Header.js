import Image from 'next/image'
import LogoEvent from './Images/LogoEvent.png'
import Cup from './Images/Cup.png'

const cup = [
  { title: 'Botox Expert'},
  { title: 'Eyelid Surgery Expert'},
  { title: 'Filler Expert'},
  { title: 'Nose Implant Expert'},
  { title: 'Thread Lift Expert'},
  { title: 'Lips Surgery Expert'},
  { title: 'Lift-up Medical Equipment Expert'},
  { title: 'Chin Surgery Expert'},
  { title: 'Best Laser Expert '},
  { title: 'Breast Implant Expert '},
  { title: 'Acne Treatment Expert'},
  { title: 'Best Anti-Aging '},
  { title: 'Hair Transplant Expert'},
  { title: 'Best Service Excellency'},
]


function Header() {
  return (
    <div className='bg-[#e8fffac7]' >
        <div className='max-w-7xl mx-auto px-4 opacity-[1.5]'>
            <div className='flex flex-col h-full items-center'>
                <div className='flex justify-center items-center mt-[152px] mb-[40px]'>
                  <Image className='lg:w-[350px] lg:h-[350px] object-cover' alt='LogoEvent' src={LogoEvent} width={350} height={350} quality={100} priority={true}/>
                </div>
                <div className='flex flex-col items-center'>
                  <label className='font-staatliches font-[400] text-[96px] text-[#FF0070] text-center leading-[120px]'>the Most trusted</label>
                  <label className='font-staatliches font-[400] text-[150px] text-[#FF0070] text-center leading-[188px]'>Beauty Clinics</label>
                  <label className='font-staatliches font-[400] text-[96px] text-[#FF0070] text-center leading-[120px]'>2023</label>
                </div>
                <div className='flex justify-center my-[50px] items-center'>
                    <div className='flex w-[150px] border-[1px] border-solid border-[#FF0070]'></div>
                    <div className='flex w-[17px] h-[17px] bg-[#FF0070] mx-[20.5px] rotate-45'></div>
                    <div className='flex w-[150px] border-[1px] border-solid border-[#FF0070]'></div>
                </div>
                <div className='flex justify-center mb-[40px]'>
                  <p className='font-[400] text-[24px] text-[#000000] text-center leading-[38px]'>
                  สุดยอดคลินิกความงามที่ได้รับการคัดเลือกว่าน่าเชื่อถือ<br/>
                  คุณภาพยอดเยี่ยม ได้มาตรฐานที่ปลอดภัย<br/>
                  และดูแลโดยแพทย์ผู้เชี่ยวชาญ<br/>
                  ที่มีประสบการณ์ในวงการคลินิกความงาม ใน 14 สาขารางวัล 
                  </p>
                </div>
                <div className='grid grid-cols-2 gap-x-[35px] gap-y-[50px] mb-[105px]'>
                {cup.map((item) => (
                    <div key={item.title} className='flex items-center bg-[#fff] w-[387px] h-full px-5 py-3 rounded-[20px] '>
                        <div className='flex items-center h-full mr-[16px]'>
                            <Image className='object-cover' alt='Cup' src={Cup} quality={100} priority={true} width={38} height={38}/>
                        </div>
                        <div className='flex items-center w-[265px]'>
                            <label className='font-[400] text-[24px] text-[#000000] leading-[38px]'>{item.title}</label>
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