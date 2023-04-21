import Image from 'next/image'
import LogoEvent from './Images/LogoEvent.png'
import LogoCleo from './Images/LogoCleo.png'
import LogoStartClinic from './Images/LogoStartClinic.png'

import { BsLine } from "react-icons/bs";

function Footer() {
    return (
        <div className='bg-[#e8fffac7]' >
            <div className='max-w-7xl mx-auto px-5'>
                <div className="flex flex-col items-center h-full">
                    <div className="flex flex-col items-center h-full">
                        <label className='font-[400] text-[28px] lg:text-[48px] text-[#FF0070] text-center leading-[38px] lg:leading-[76px]'>
                            แพทย์และผู้บริหารคลินิกความงามที่สนใจ<br />
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
                            <Image className='w-[120px] h-[120px] lg:w-[350px] lg:h-[350px] object-cover' alt='LogoEvent' src={LogoEvent} width={350} height={350} quality={100} priority={true} />
                        </div>
                        <div className='flex flex-col '>
                            <label className='font-staatliches font-[400] text-[24px] lg:text-[96px] text-[#FF0070] leading-[30px] lg:leading-[120px]'>the Most trusted</label>
                            <label className='font-staatliches font-[400] text-[37.5px] lg:text-[150px] text-[#FF0070] leading-[45px] lg:leading-[188px]'>Beauty Clinics</label>
                            <label className='font-staatliches font-[400] text-[24px] lg:text-[96px] text-[#FF0070] leading-[30px] lg:leading-[120px]'>2023</label>
                        </div>
                    </div>
                    <div className='flex w-full h-full justify-center items-center mb-[40px]'>
                        <a className='flex justify-center items-center w-full lg:w-[637px] h-[60px] lg:h-[97px] border-[1px] lg:border-[2px] border-solid border-[#FF0070] rounded-[12px] bg-[#ffff] hover:bg-[#FF0070] font-[500] text-[18px] lg:text-[24px] text-[#FF0070] hover:text-[#ffff] text-center leading-[24px] lg:leading-[38px] no-underline transition-colors duration-300 shadow-[0px_4px_20px_rgba(255,0,112,0.3)]'
                            href='https://docs.google.com/forms/d/e/1FAIpQLSfMMtX_jXZ-v6f6bGL8oalxdLt7bv7XiWkw3UkM8wXlksoE-Q/viewform' target="_blank">ลงทะเบียนและรับทราบรายละเอียดเพิ่มเติม</a>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center lg:items-end justify-start lg:justify-center w-full mb-[50px] lg:mb-[102px]'>
                        <label className='font-[400] text-[18px] lg:text-[24px] text-[#000000] text-center leading-[26px] lg:leading-[38px]'>สอบถามข้อมูลเพิ่มเติมได้ที่ </label>
                        <a href="line://ti/p/@clinicstarter" target="_blank" className='flex justify-center items-center w-16 h-16 rounded-full bg-[#ffffff] my-[18px] lg:my-0 lg:mx-[12px]'>
                            <BsLine className=' text-green-600 text-[28px] text-center' />
                        </a>
                        <a href="line://ti/p/@clinicstarter" target="_blank" className='font-[400] text-[18px] lg:text-[24px] text-[#000000] text-center leading-[24px] lg:leading-[38px] underline-offset-4 no-underline'> {'@clinicstarter'}</a>
                    </div>
                    <div className='flex flex-col items-center mb-[80px] lg:mb-[152px]'>
                        <label className='font-[400] text-[14px] lg:text-[24px] text-[#000000] leading-[24px] lg:leading-[38px] mb-[14px] lg:mb-[28px]'>Introducing by</label>
                        <div className='flex justify-center'>
                            <Image className='w-[90px] h-[90px] lg:w-[178px] lg:h-[178px] object-cover mr-[27px]' alt='LogoCleo' src={LogoCleo} width={178} height={178} quality={100} priority={true} />
                            <Image className='w-[90px] h-[90px] lg:w-[178px] lg:h-[178px] object-cover' alt='LogoStartClinic' src={LogoStartClinic} width={178} height={178} quality={100} priority={true} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer