import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/NavBar/Layout'
import { motion } from 'framer-motion'
import { pernos, tornillos, tuercas,tornilloBuy } from '../productos'
import AliceCarousel from 'react-alice-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import MyGallery from '../components/Gallery/Gallery'




const easing = [0.6, -0.05, 0.01, 0.99]

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 6 }
}



const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}


export default function Home() {

  const renderNext = ({ isDisabled }) =>{
    return(
      <button className="py-2 px-4 rounded-full right-0 border top-1/3 bg-white absolute shadow-lg text-black hover:text-white hover:bg-gray-800 focus:outline-none transition duration-500" style={{visibility:isDisabled ? 'hidden' : 'visible'}}>
        <FontAwesomeIcon icon={faAngleRight}/>
      </button>
    )
  }

  const renderPrev = ({ isDisabled }) =>{
    return(
      <button className="py-2 left-0 border top-1/3 px-4 rounded-full bg-white absolute shadow-lg text-black hover:text-white hover:bg-gray-800 focus:outline-none" style={{visibility: isDisabled ? 'hidden' : 'visible'}}>
        <FontAwesomeIcon icon={faAngleLeft}/>
      </button>
    )
  }

  const items = [
    <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center">
      <div className="max-w-xs">
        <motion.img className="h-52" src="https://image1.jdomni.in/product/25012018/96/2A/03/4201CD70C947C5ADEE0BBB7508_1516876426055.jpg?fit=around|400:400" alt="test" />
      </div>
      <div>
        <h1 className={styles.textImage}>Producto</h1>
      </div>
    </motion.div>,
    <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center">
      <div className="max-w-xs">
        <motion.img className="h-52" src="https://image1.jdomni.in/product/25012018/96/2A/03/4201CD70C947C5ADEE0BBB7508_1516876426055.jpg?fit=around|400:400" alt="test" />
      </div>
      <div>
        <h1 className={styles.textImage}>Producto</h1>
      </div>
    </motion.div>,
    <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center">
      <div className="max-w-xs">
        <motion.img className="h-52" src="https://image1.jdomni.in/product/25012018/96/2A/03/4201CD70C947C5ADEE0BBB7508_1516876426055.jpg?fit=around|400:400" alt="test" />
      </div>
      <div>
        <h1 className={styles.textImage}>Producto</h1>
      </div>
    </motion.div>,
    <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center">
      <div className="max-w-xs">
        <motion.img className="h-52" src="https://image1.jdomni.in/product/25012018/96/2A/03/4201CD70C947C5ADEE0BBB7508_1516876426055.jpg?fit=around|400:400" alt="test" />
      </div>
      <div>
        <h1 className={styles.textImage}>Producto</h1>
      </div>
    </motion.div>,
    <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center">
      <div className="max-w-xs">
        <motion.img className="h-52" src="https://image1.jdomni.in/product/25012018/96/2A/03/4201CD70C947C5ADEE0BBB7508_1516876426055.jpg?fit=around|400:400" alt="test" />
      </div>
      <div>
        <h1 className={styles.textImage}>Producto</h1>
      </div>
    </motion.div>,
    <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center">
      <div className="max-w-xs">
        <motion.img className="h-52" src="https://image1.jdomni.in/product/25012018/96/2A/03/4201CD70C947C5ADEE0BBB7508_1516876426055.jpg?fit=around|400:400" alt="test" />
      </div>
      <div>
        <h1 className={styles.textImage}>Producto</h1>
      </div>
    </motion.div>,
    <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center">
      <div className="max-w-xs">
        <motion.img className="h-52" src="https://image1.jdomni.in/product/25012018/96/2A/03/4201CD70C947C5ADEE0BBB7508_1516876426055.jpg?fit=around|400:400" alt="test" />
      </div>
      <div>
        <h1 className={styles.textImage}>Producto</h1>
      </div>
    </motion.div>,
  ]

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
    >
      <Head>
        <title>Zuky Tornillos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className={styles.hero}>
          <motion.div variants={fadeInUp} className={styles.text}>
            <h1>Gama completa de tuercas, Tornillos y pernos</h1>
            <Link href='/'><a className="py-2  bg-customRed rounded-full px-3 text-white">Pedir al por mayor</a></Link>
          </motion.div>
        </div>

        {/** Section tornillos */}
        <div className="mt-10">
          <h1 className="text-customRed uppercase text-4xl text-center">Tornillos</h1>
          <motion.div variants={stagger} className="mt-10 w-11/12 m-auto grid grid-cols-6 gap-4">
            {
              tornillos.map(({ nombre, imagen }, i) => (
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center justify-center space-y-2" key={i}>
                  <div>
                    <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={imagen} alt={nombre} className="h-44" />
                  </div>
                  <div className="">
                    <h1 className={styles.textImage}>{nombre}</h1>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </div>


        {/* Section Tuercas */}
        <div className="mt-40">
          <h1 className="text-customRed uppercase text-4xl text-center">Tuercas</h1>
          <motion.div variants={stagger} className="mt-10 w-11/12  m-auto grid grid-cols-6 gap-4">
            {
              tuercas.map(({ nombre, imagen }, i) => (
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center justify-center space-y-2" key={i}>
                  <div>
                    <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={imagen} alt={nombre} />
                  </div>
                  <div>
                    <h1 className={styles.textImage}>{nombre}</h1>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </div>


        { /* Section Pernos */}
        <div className="mt-40">
          <h1 className="text-customRed uppercase text-4xl text-center">Pernos</h1>
          <motion.div variants={stagger} className="mt-10 w-11/12 m-auto grid grid-cols-6 gap-4">
            {
              pernos.map(({ nombre, imagen }, i) => (
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex flex-col items-center justify-center space-y-2" key={i}>
                  <div>
                    <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={imagen} />
                  </div>
                  <div>
                    <h1 className={styles.textImage}>{nombre}</h1>
                  </div>
                </motion.div>
              ))
            }
          </motion.div>
        </div>


        {/* Section Productos */}
        <motion.div variants={fadeInUp} className="mt-40 relative w-11/12 m-auto">
          <h1 className="text-customRed uppercase text-4xl text-center mb-10">Productos</h1>
          <AliceCarousel
            disableDotsControls
            items={items}
            responsive={responsive}
            renderNextButton={renderNext}
            renderPrevButton={renderPrev}
          />
        </motion.div>


        {/* Section porque nosotros */}
        <div className="mt-40 w-11/12 m-auto" id="whyus">
          <h1 className="text-customRed uppercase text-4xl text-center">Porque Nosotros</h1>
          <motion.div variants={stagger} className="grid grid-cols-3 gap-4 mt-10">
            {
              tornilloBuy.map(({ nombre, imagen },i)=>(
                <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center space-y-4" key={i}>
                    <div className="py-1 px-1 border border-customRed rounded-full">
                      <img src={imagen} alt={nombre} className="h-32"/>
                    </div>
                    <div className="">
                      <h4 className={styles.textImage}>{nombre}</h4>
                    </div>
                </motion.div>
              ))
            }
          </motion.div>
        </div>

        {/* Section Sobre nosotros */}
        <motion.div variants={fadeInUp} className="mt-40 w-11/12 m-auto flex items-center justify-around">
            <div className="">
              <img src="/about.webp" alt="about" className="h-96"/>
            </div>
            <div className="w-5/12">
              <h1 className="text-customRed uppercase text-3xl text-center">Sobre nosotros</h1>
              <p>We, zuky tech at in are leading firm engaged in manufacturing impeccable quality nuts, screw and bolts to our honored patrons. Our philosophy is aimed at creating an enriching and fulfilling environment for our employees and maintaining long term relationships with our customers and vendors. Our focus on the future is towards continuous improvement.</p>
            </div>
        </motion.div>

        { /* Section Gallery */ }
        <div className="w-11/12 m-auto mt-40">
          <h1 className="text-customRed uppercase text-4xl text-center mb-10">Galeria</h1>
          <MyGallery/>
        </div>
      </Layout>
    </motion.div>
  )
}
