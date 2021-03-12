import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/NavBar/Layout'
import { motion } from 'framer-motion'


const easing = [0.6, -0.05, 0.01, 0.99]


const fadeInUp ={
  initial:{
    y:60,
    opacity:0,

  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.6,
      ease: easing
    }
  }
}

const stagger ={
  animate:{
    transition:{
      staggerChildren:0.2
    }
  }
}


export default function Home() {
  return (
    <div >
      <Head>
        <title>Zuky Tornillos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.hero}>
          <div className={styles.text}>
            <h1>Gama completa de tuercas, Tornillos y pernos</h1>
            <Link href='/'><a className="py-2  bg-customRed rounded-full px-3 text-white">Pedir al por mayor</a></Link>
          </div>
        </div>
        <div className="mt-10">
         <h1 className="text-customRed uppercase text-2xl text-center">Tornillos</h1>

        </div>
      </Layout>
    </div>
  )
}
