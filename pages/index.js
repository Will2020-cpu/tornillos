import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/NavBar/Layout'
import { motion } from 'framer-motion'
import { pernos, tornillos, tuercas, tornilloBuy } from '../productos'
import AliceCarousel from 'react-alice-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import MyGallery from '../components/Gallery/Gallery'
import ContentModal from '../components/ContentModal/ContentModal'
import { useState } from 'react'




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


const Home = (props) => {
  const [showModal, setShowModal] = useState(false)
  const renderNext = ({ isDisabled }) => {
    return (
      <button className="py-2 px-4 rounded-full right-0 border top-1/3 bg-white absolute shadow-lg text-black hover:text-white hover:bg-gray-800 focus:outline-none transition duration-500" style={{ visibility: isDisabled ? 'hidden' : 'visible' }}>
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    )
  }

  const renderPrev = ({ isDisabled }) => {
    return (
      <button className="py-2 left-0 border top-1/3 px-4 rounded-full bg-white absolute shadow-lg text-black hover:text-white hover:bg-gray-800 focus:outline-none" style={{ visibility: isDisabled ? 'hidden' : 'visible' }}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    )
  }

  const items = [
    props.productos.length > 0 ? (
      <motion.div variants={fadeInUp} className="flex flex-col justify-center items-center">
        <div className="max-w-xs">
          <motion.img className="h-52" src="https://image1.jdomni.in/product/25012018/96/2A/03/4201CD70C947C5ADEE0BBB7508_1516876426055.jpg?fit=around|400:400" alt="test" />
        </div>
        <div>
          <h1 className={styles.textImage}>Producto</h1>
        </div>
      </motion.div>
    ) : (
      null
    )
  ]
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
    >
      <Head>
        <title>Zuky Tornillos</title>
      </Head>
      <Layout>
        <div className={styles.hero}>
          <motion.div variants={fadeInUp} className={styles.text}>
            <h1>Gama completa de tuercas, Tornillos y pernos</h1>
            <ContentModal>
              <button className="py-2  bg-customRed rounded-full px-3 focus:outline-none text-white">Pedir al por mayor</button>
            </ContentModal>
          </motion.div>
        </div>

        {/** Section tornillos */}
        <div className={`${props.categoriasTornillos === undefined || props.categoriasTornillos.length === 0 ? "hidden" : "mt-10"}`} id="categorias">
          <h1 className="text-customRed uppercase text-4xl text-center">Tornillos</h1>
          <motion.div variants={stagger} className="mt-10 w-11/12 m-auto grid grid-cols-1 lg:grid-cols-6 gap-4">
            {
              props.categoriasTornillos !== undefined ? (
                props.categoriasTornillos.map((item) => (
                  <Link href={{ path: '/categorias/[categorias]', pathname: `/categorias/${item.nombre}`, query: { id: item.id, categorias: item.nombre } }} key={item.id}>
                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer flex flex-col items-center justify-center space-y-2" >
                      <div>
                        <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={item.imagen} alt={item.nombre} className="h-44" />
                      </div>
                      <div className="">
                        <h1 className={styles.textImage}>{item.nombre}</h1>
                      </div>
                    </motion.div>
                  </Link>
                ))
              ) : (
                <div className="">Admin debes agregar una categoria de tornillos</div>
              )
            }
          </motion.div>
        </div>


        {/* Section Tuercas */}
        <div className={`${props.categoriasTuercas === undefined || props.categoriasTuercas.length === 0 ? "hidden" : "mt-40"}`}>
          <h1 className="text-customRed uppercase text-4xl text-center">Tuercas</h1>
          <motion.div variants={stagger} className="mt-10 w-11/12  m-auto grid-cols-1 grid lg:grid-cols-6 gap-4">
            {
              props.categoriasTuercas !== undefined ? (

                props.categoriasTuercas.map((item) => (
                  <Link href={{ path: '/categorias/[categorias]', pathname: `/categorias/${item.nombre}`, query: { id: item.id, categorias: item.nombre } }} key={item.id} >
                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer flex flex-col items-center justify-center space-y-2" key={item.id}>
                      <div>
                        <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={item.imagen} alt={item.nombre} className="h-44" />
                      </div>
                      <div>
                        <h1 className={styles.textImage}>{item.nombre}</h1>
                      </div>
                    </motion.div>
                  </Link>
                ))
              ) : (
                <div className="">Admin debes agregar una categoria de tuercas</div>
              )
            }
          </motion.div>
        </div>

        { /* Section Pernos */}
        <div className={`${props.categoriasPernos === undefined || props.categoriasPernos.length === 0 ? "hidden" : "mt-40"}`}>
          <h1 className="text-customRed uppercase text-4xl text-center">Pernos</h1>
          <motion.div variants={stagger} className="mt-10 w-11/12 m-auto grid grid-cols-1 lg:grid-cols-6 gap-4">
            {
              props.categoriasPernos !== undefined ? (
                props.categoriasPernos.map((item) => (
                  <Link href={{ path: '/categorias/[categorias]', pathname: `/categorias/${item.nombre}`, query: { id: item.id, categorias: item.nombre } }}>
                    <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer flex flex-col items-center justify-center space-y-2" key={item.id}>
                      <div>
                        <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={item.imagen} className="h-44" alt={item.nombre} />
                      </div>
                      <div>
                        <h1 className={styles.textImage}>{item.nombre}</h1>
                      </div>
                    </motion.div>
                  </Link>
                ))
              ) : (
                null
              )
            }
          </motion.div>
        </div>


        {/* Section Productos */}
        <motion.div variants={fadeInUp} id="productos" className={`${props.productos.length === 0 ? "hidden" : "mt-40 relative w-11/12 m-auto"}`}>
          <h1 className="text-customRed uppercase text-4xl text-center mb-10">Productos</h1>
          <AliceCarousel
            disableDotsControls
            items={items}
            responsive={responsive}
            renderNextButton={renderNext}
            renderPrevButton={renderPrev}
            className=""
          />
        </motion.div>


        {/* Section porque nosotros */}
        <div className="mt-40 w-11/12 m-auto" id="whyus">
          <h1 className="text-customRed uppercase text-4xl text-center">Porque Nosotros</h1>
          <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
            {
              tornilloBuy.map(({ nombre, imagen }, i) => (
                <motion.div variants={fadeInUp} className="flex flex-col items-center justify-center space-y-4" key={i}>
                  <div className="py-1 px-1 border border-customRed rounded-full">
                    <img src={imagen} alt={nombre} className="h-32" />
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
        <motion.div variants={fadeInUp} id="nosotros" className="heroBanner mt-40 w-11/12 m-auto flex flex-col lg:flex-row items-center justify-around">
          <div className="">
            <img src="/about.webp" alt="about" className="h-52 lg:h-96" />
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="text-customRed uppercase text-3xl text-center">Sobre nosotros</h1>
            <p>We, zuky tech at in are leading firm engaged in manufacturing impeccable quality nuts, screw and bolts to our honored patrons. Our philosophy is aimed at creating an enriching and fulfilling environment for our employees and maintaining long term relationships with our customers and vendors. Our focus on the future is towards continuous improvement.</p>
          </div>
        </motion.div>

        { /* Section Gallery */}
        <div className="w-11/12 m-auto mt-40" id="galeria">
          <h1 className="text-customRed uppercase text-4xl text-center mb-10">Galeria</h1>
          <MyGallery />
        </div>

        { /* Section Contacto */}
        <div className="w-8/12 m-auto mt-40" id="contacto">
          <h1 className="text-customRed uppercase text-4xl text-center mb-10">Contactanos</h1>
          <form className="flex flex-col space-y-8 w-full justify-center">
            <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-8 w-full justify-center">
              <div className="flex flex-col space-y-4">
                <input className="border p-2 lg:w-80 w-auto focus:outline-none rounded-lg bg-gray-50" placeholder="Nombre Completo" />
                <input className="border p-2 lg:w-80 w-auto focus:outline-none rounded-lg bg-gray-50" placeholder="Numero de Telefono" />
                <input className="border p-2 lg:w-80 w-auto focus:outline-none rounded-lg bg-gray-50" placeholder="Email" />
              </div>
              <div className="flex">
                <textarea className="border focus:outline-none resize-none rounded-lg lg:w-96 w-full p-2 bg-gray-50" placeholder="Mensaje" />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="py-1 px-3 rounded-full bg-customRed text-white">Enviar</button>
            </div>
          </form>
        </div>
      </Layout>
    </motion.div>
  )
}




Home.getInitialProps = async function () {
  const resCategorias = await fetch(
    "http://localhost:5000/api/categorias"
  )
  const resProductos = await fetch(
    "http://localhost:5000/api/productos"
  )
  const dataCategorias = await resCategorias.json()
  const dataProductos = await resProductos.json()

  const dataCategoriasTornillos = dataCategorias.filter(item => item.tipo === 'Tornillos')
  const dataCategoriasTuercas = dataCategorias.filter(item => item.tipo === 'Tuercas')
  const dataCategoriasPernos = dataCategorias.filter(item => item.tipo === 'Pernos')

  return {
    categoriasTornillos: dataCategoriasTornillos,
    categoriasTuercas: dataCategoriasTuercas,
    categoriasPernos: dataCategoriasPernos,

    productos: dataProductos
  }
}


export default Home;