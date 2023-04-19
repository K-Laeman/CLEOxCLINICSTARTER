import Image from 'next/image'
import LogoEvent from './Images/LogoEvent.png'
import LogoCleo from './Images/LogoCleo.png'
import LogoStartClinic from './Images/LogoStartClinic.png'

import { BsLine } from "react-icons/bs";

function Footer() {
  return (
    <div className='bg-[#e8fffac7]' >
    <div className='max-w-7xl mx-auto px-4'>
        <div className="flex flex-col items-center h-full">
            <div className="flex flex-col items-center h-full">
                <label className='font-[400] text-[48px] text-[#FF0070] text-center leading-[76px]'>
                    แพทย์และผู้บริหารคลินิกความงามที่สนใจ<br/>
                    เสนอชื่อคลินิกและเข้าร่วมการคัดเลือกการรับรางวัล
                </label>
            </div>
            <div className='flex justify-center mt-[25px] mb-[61px] items-center'>
                <div className='flex w-[150px] border-[1px] border-solid border-[#ffffff]'></div>
                <div className='flex w-[17px] h-[17px] bg-[#ffffff] mx-[20.5px] rotate-45'></div>
                <div className='flex w-[150px] border-[1px] border-solid border-[#ffffff]'></div>
            </div>
            <div className='flex items-center h-full px-4 mb-[63px]'>
                <div className='flex justify-center items-center mr-[40px]'>
                  <Image className='lg:w-[350px] lg:h-[350px] object-cover' alt='LogoEvent' src={LogoEvent} width={350} height={350} quality={100} priority={true}/>
                </div>
                <div className='flex flex-col '>
                  <label className='font-staatliches font-[400] text-[96px] text-[#FF0070] leading-[120px]'>the Most trusted</label>
                  <label className='font-staatliches font-[400] text-[150px] text-[#FF0070] leading-[188px]'>Beauty Clinics</label>
                  <label className='font-staatliches font-[400] text-[96px] text-[#FF0070] leading-[120px]'>2023</label>
                </div>
            </div>
            <div className='flex w-full h-full justify-center items-center mb-[40px]'>
                <a className='flex justify-center items-center w-[637px] h-[97px] border-[2px] border-solid border-[#FF0070] rounded-[12px] bg-[#ffff] hover:bg-[#FF0070] font-[700] text-[24px] text-[#FF0070] hover:text-[#ffff] text-center leading-[38px] no-underline transition-colors duration-300 shadow-[0px_4px_20px_rgba(255,0,112,0.3)]' 
                href='https://docs.google.com/forms/d/e/1FAIpQLSfMMtX_jXZ-v6f6bGL8oalxdLt7bv7XiWkw3UkM8wXlksoE-Q/viewform' target="_blank">ลงทะเบียนและรับทราบรายละเอียดเพิ่มเติม</a>
            </div>
            <div className='flex justify-center w-full lg:mb-[102px]'>
                <label className='font-[400] text-[24px] text-[#000000] leading-[38px]'>สอบถามข้อมูลเพิ่มเติมได้ที่ </label>
                <a href="line://ti/p/@clinicstarter" target="_blank" className='flex justify-center items-center w-[36px] h-[36px] rounded-full bg-[#000000] mx-[12px]'>
                    <BsLine className='text-[#90e8d5] text-[18px] text-center' />
                </a>
                <label className='font-[400] text-[24px] text-[#000000] leading-[38px]'> @clinicstarter</label>
            </div>
            <div className='flex flex-col items-center mb-[152px]'>
                <label className='font-[400] text-[24px] text-[#000000] leading-[38px] mb-[28px]'>Introducing by</label>
                <div className='flex justify-center'>
                    <Image className='lg:w-[178px] lg:h-[178px] object-cover mr-[27px]' alt='LogoCleo' src={LogoCleo} width={178} height={178} quality={100} priority={true}/>
                    <Image className='lg:w-[178px] lg:h-[178px] object-cover' alt='LogoStartClinic' src={LogoStartClinic} width={178} height={178} quality={100} priority={true}/>
                </div>
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default Footer