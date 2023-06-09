
const content01 = [
    { num: '1', title: 'มีแพทย์ผู้ดำเนินการรักษาประจำคลินิกอย่างน้อย 1 คน เป็นคนเดียวกันกับแพทย์ผู้ดำเนินการสถานพยาบาล (หมอแขวนป้าย)' },
    { num: '2', title: 'แพทย์ผู้ดำเนินการรักษาประจำคลินิก มีความรู้ ประสบการณ์ และมีความเชี่ยวชาญจริงในสาขาที่รับรางวัล' },
    { num: '3', title: 'ใช้เครื่องมือแพทย์และยาแท้ที่มี อย. สถานที่สะอาด ปลอดภัย มีอุปกรณ์ช่วยชีวิตกรณีฉุกเฉิน ' },
    { num: '4', title: 'ให้การรักษาตามคำโฆษณา ไม่หลอกลวงผู้บริโภค และไม่ขายแบบฮาร์ดเซลล์' },
]
const content02 = [
    { num: '1', title: 'แพทย์หรือผู้บริหารคลินิกลงทะเบียนเสนอชื่อคลินิกและสาขารางวัลที่ต้องการมากที่สุด 1 สาขารางวัล หรือมากกว่า' },
    { num: '2', title: 'แพทย์หรือผู้บริหารคลินิก รับฟังรายละเอียด เงื่อนไขและข้อตกลงต่างๆ ของการรับรางวัลจากคณะกรรมการหรือทีมงานผ่านทาง Zoom และยืนยันการตอบรับข้อตกลง' },
    { num: '3', title: 'คลินิกเข้าสู่กระบวนการคัดเลือกจากคณะกรรมการโดยการสัมภาษณ์ การทดลองเข้าใช้บริการจาก Mystery Shopper หรือลูกค้าลึกลับที่ไม่เปิดเผยตัวตน การสำรวจความคิดเห็นจากกลุ่มตัวอย่างที่เคยเข้ารับบริการในคลินิก และการตรวจสอบเชิงลึกจากหน่วยงานที่เกี่ยวข้องและแหล่งข้อมูลที่เชื่อถือได้' },
    { num: '4', title: 'แพทย์หรือผู้บริหารของคลินิกที่ผ่านการคัดเลือกและมีสิทธิ์ได้รับรางวัลในแต่ละสาขา ยืนยันการขอใช้สิทธิ์และรับรางวัลตามข้อตกลง' },
    { num: '5', title: 'ประกาศรางวัลในเดือนกรกฎาคม 2566' },
]

function Content() {
    return (
        <div className='bg-[#e8fffac7]' >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col items-center h-full">
                    <div className="flex flex-col items-center h-full">
                        <div className="flex flex-col items-center h-full">
                            <label className='font-[400] text-[26px] lg:text-[48px] text-[#FF0070] text-center leading-[80px]'>คุณสมบัติของคลินิกความงาม</label>
                            <label className='font-[400] text-[24px] lg:text-[24px] text-[#000000] text-center leading-[35px] lg:leading-[38px]'>ที่มีสิทธิ์ได้รับการเสนอชื่อและรับรางวัลในแต่ละสาขา</label>
                        </div>
                        <div className='flex justify-center mt-[35px] mb-[48.5px] items-center'>
                            <div className='flex w-[150px] border-[1px] border-solid border-[#FF0070]'></div>
                            <div className='flex w-[17px] h-[17px] bg-[#FF0070] mx-[20.5px] rotate-45'></div>
                            <div className='flex w-[150px] border-[1px] border-solid border-[#FF0070]'></div>
                        </div>
                        <div className=' flex flex-col items-center lg:items-start lg:grid lg:grid-cols-1 gap-y-[44px] lg:gap-y-[60px] mb-[90px] lg:mb-[131px]'>
                            {content01.map((item, index) => (
                                <div key={item.title} className='relative flex items-center bg-[#fff] w-[90%] lg:w-[834px] h-full py-4 lg:py-0 px-2 lg:px-[24px]  rounded-[20px] shadow-[0px_4px_20px_5px_rgba(255,0,112,0.3)]'>

                                    {/* {index !== content01.length - 1 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute -bottom-11 lg:-bottom-16 left-1/2 -translate-x-1/2 z-10 w-12 h-12 lg:w-20 lg:h-20 stroke-[#FF0070]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg> : null
                                    } */}


                                    <div className='flex items-center w-[50px] h-full ml-[10px] lg:ml-[20px] mr-[5px] lg:mr-[45px]'>
                                        <label className='font-staatliches font-[400] text-[52px] lg:text-[96px] text-[#FF0070] text-center leading-[40px] lg:leading-[120px]'>{item.num}</label>
                                    </div>
                                    <div className='flex items-center w-full lg:w-[680px]  lg:py-5'>
                                        <label className='font-[400] text-[18px] lg:text-[24px] text-[#000000]  leading-[26px] lg:leading-[38px] '>{item.title}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center h-full">
                        <div className="flex flex-col items-center h-full">
                            <label className='font-[400] text-[28px] lg:text-[48px] text-indigo-700 text-center leading-[38px] lg:leading-[76px]'>ขั้นตอนการคัดเลือกและรับรางวัล</label>
                        </div>
                        <div className='flex justify-center mt-[25px] mb-[37.5px] items-center'>
                            <div className='flex w-[150px] border-[1px] border-solid border-indigo-700'></div>
                            <div className='flex w-[17px] h-[17px] bg-indigo-700 mx-[20.5px] rotate-45'></div>
                            <div className='flex w-[150px] border-[1px] border-solid border-indigo-700'></div>
                        </div>
                        <div className='flex flex-col items-center lg:items-start lg:grid lg:grid-cols-1 gap-y-[44px] lg:gap-y-[60px] mb-[90px] lg:mb-[131px]'>
                            {content02.map((item, index) => (
                                <div key={item.title} className='relative flex items-center bg-[#fff] w-[90%] lg:w-[834px] h-full py-4 lg:py-0 px-2 lg:px-[24px]  rounded-[20px] shadow-[0px_4px_20px_5px_rgba(67,56,202,0.3)]'>
                                    {index !== content02.length - 1 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute -bottom-11 lg:-bottom-16 left-1/2 -translate-x-1/2 z-10 w-12 h-12 lg:w-20 lg:h-20 stroke-indigo-700">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg> : null
                                    }
                                    <div className='flex items-center w-[50px] h-full ml-[10px] lg:ml-[20px] mr-[5px] lg:mr-[45px]'>
                                        <label className='font-staatliches font-[400] text-[52px] lg:text-[96px] text-indigo-700 text-center leading-[40px] lg:leading-[120px]'>{item.num}</label>
                                    </div>
                                    <div className='flex items-center w-full lg:w-[680px]  lg:py-5'>
                                        <label className='font-[400] text-[18px] lg:text-[24px] text-[#000000]  leading-[26px] lg:leading-[38px] '>{item.title}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center h-full">
                        <div className="flex flex-col items-center h-full">
                            <label className='font-[400] text-[28px] lg:text-[48px] text-[#FF0070] text-center leading-[38px] lg:leading-[76px]'>สุดยอดคลินิกความงามที่ได้รับรางวัล</label>
                        </div>
                        <div className='flex justify-center mt-[25px] mb-[37.5px] items-center'>
                            <div className='flex w-[150px] border-[1px] border-solid border-[#FF0070]'></div>
                            <div className='flex w-[17px] h-[17px] bg-[#FF0070] mx-[20.5px] rotate-45'></div>
                            <div className='flex w-[150px] border-[1px] border-solid border-[#FF0070]'></div>
                        </div>
                        <div className='flex justify-center mb-[75px] lg:mb-[131px]'>
                            <p className='font-[400] text-[18px] lg:text-[24px] text-[#000000] text-center leading-[26px] lg:leading-[42px]'>
                                จะได้รับการแนะนำให้กับผู้อ่านของคลีโอบนเว็บไชต์ พร้อมรับโล่รางวัล<br />
                                และประกาศนียบัตร รวมถึงข้อตกลงในการนำเสนอบทความ บทสัมภาษณ์<br />
                                และคลิปวิดีโอต่างๆลงในเว็บไซต์ของคลีโอ และข้อตกลงในการได้รับคัดเลือกให้อยู่ใน CLEO Magazine ฉบับพิเศษ<br />
                                ที่คลีโอจะกลับมาตีพิมพ์ใหม่อีกครั้งเป็นครั้งแรกและครั้งเดียวของปี
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content