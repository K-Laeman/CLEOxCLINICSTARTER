import Head from 'next/head'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import Styles from './Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>CLEO x StartClinic</title>
      <meta name="description" content="CLEO x StartClinic"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <main >
      <div className={Styles.BG}>
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
