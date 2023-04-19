import Head from 'next/head'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Head>
      <title>CLEO x StartClinic</title>
      <meta name="description" content="CLEO x StartClinic"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <main >
      <div className='BG bg-white relative'>
        <div className=' bg-color '>
          <Header/>
          <Content/>
          <Footer/>
        </div>
      </div>
    </main>
  </>
    
  )
}
