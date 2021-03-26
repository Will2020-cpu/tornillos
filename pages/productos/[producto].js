import { motion, AnimateSharedLayout } from "framer-motion";
import Link from "next/link";
import Layout from "../../components/NavBar/Layout";
import { useRouter } from 'next/router'
import styles from '../../styles/producto.module.css'
import Head from 'next/head'
import AliceCarousel from 'react-alice-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid'




const easing = [0.6, -0.05, 0.01, 0.99]



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

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 5 }
}




const Producto = (props) => {
    const { query: { producto } } = useRouter();

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

    const items = props.productos.map((item) => {
        return (
            <Link href={{ path: '/productos/[producto]', pathname: `/productos/${item.nombre}`, query: { id: item.id, producto: item.nombre } }} key={item.id}>
                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer bg-white max-w-xs p-4 hover:shadow-lg rounded-lg transition duration-100 flex flex-col space-y-4">
                    <div className="border rounded-lg">
                        <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={item.imagen} className="h-60 object-cover" alt={item.nombre} />
                    </div>
                    <div className="flex justify-between items-center">
                        <h4 className="w-3/5 overflow-ellipsis overflow-hidden break-normal heroBanner text-sm">{item.nombre}</h4>
                        <span className="text-customRed text-sm heroBanner">$ {item.precio}</span>
                    </div>
                </motion.div>
            </Link>
        )
    })
    return (
        <>
            <Head>
                <title>{producto}</title>
            </Head>
            <Layout>
                <motion.div
                    exit={{ opacity: 0 }}
                    animate='animate'
                    initial='initial'
                    className={styles.container}
                >
                    <div className="p-2">
                        <div className="bg-white rounded-lg w-11/12 m-auto border p-8 shadow-lg flex-col lg:flex-row flex space-x-8">
                            <div className="p-4 border rounded-lg max-w-lg">
                                <img className="h-96 object-cover" src={props.producto[0].imagen} alt={props.producto[0].nombre} />
                            </div>
                            <div className="flex flex-col space-y-4 w-2/3">
                                <div className={`${styles.Title}`}>
                                    <h4 className="overflow-hidden">{props.producto[0].nombre}</h4>
                                </div>
                                <div className="mt-10">
                                    <form action="https://checkout.wompi.co/p/" method="GET">
                                        <input type="hidden" name="public-key" value="pub_test_zw0yitdfb0nAeImwe4130p51fQZk10KO" />
                                        <input type="hidden" name="currency" value="COP" />
                                        <input type="hidden" name="amount-in-cents" value={`${props.producto[0].precio}00`} />
                                        <input type="hidden" name="reference" value={uuidv4()} />
                                        <input type="hidden" name="redirect-url" value={`http://localhost:3000/pago/${props.producto[0].id}/`} />
                                        <button className="py-2 px-8 bg-customRed rounded text-white focus:outline-none">Comprar Ahora</button>
                                    </form>
                                </div>
                                <div className={styles.caracteristicas}>
                                    <h1 className="font-medium text-2xl mb-7 border-b">Caracteristicas</h1>
                                    <div className="flex space-x-4">
                                        <ul className="space-y-6">
                                            <li className="text-gray-500 text-sm">Tipo :</li>
                                            <li className="text-gray-500 text-sm">Marca:</li>
                                            <li className="text-gray-500 text-sm">Largo :</li>
                                            <li className="text-gray-500 text-sm">Diametro :</li>
                                            <li className="text-gray-500 text-sm">Precio :</li>
                                        </ul>
                                        <ul className="space-y-6">
                                            <li className="text-sm text-black font-medium">{props.datoTipo[0].nombre} </li>
                                            <li className="text-sm text-black font-medium">{props.producto[0].marca}</li>
                                            <li className="text-sm text-black font-medium">{props.producto[0].largo}</li>
                                            <li className="text-sm text-black font-medium">{props.producto[0].diametro}</li>
                                            <li className="text-sm text-black font-medium">$ {props.producto[0].precio} COP</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*  Seccion productos similares */}
                        <div className="bg-white w-11/12 m-auto p-4 mt-5 shadow-lg rounded-lg border">
                            <div className="mb-10 border-b">
                                <h1 className="text-2xl font-medium">Productos Similares</h1>
                            </div>

                            <AnimateSharedLayout type="crossfade">
                                <motion.div variants={fadeInUp} id="productos" className={`${props.productos.length === 0 ? "hidden" : "relative w-11/12 m-auto"}`}>
                                    <AliceCarousel
                                        disableDotsControls
                                        items={items}
                                        responsive={responsive}
                                        renderNextButton={renderNext}
                                        renderPrevButton={renderPrev}
                                        className=""
                                    />
                                </motion.div>
                            </AnimateSharedLayout>
                        </div>
                    </div>
                </motion.div>
            </Layout>
        </>
    )
}




Producto.getInitialProps = async function (context) {
    const { id } = context.query;
    const resProductosTen = await fetch(
        'https://hidden-mesa-67260.herokuapp.com/api/productos/cantidad/productos'
    )


    const resProducto = await fetch(
        `https://hidden-mesa-67260.herokuapp.com/api/productos/${id}`
    )


    const datoRes = await resProducto.json()
    const datoTipo = await fetch(
        `https://hidden-mesa-67260.herokuapp.com/api/categorias/${datoRes[0].fk_categorias}`
    )

    const datosCategoria = await datoTipo.json()
    const datosProductos = await resProductosTen.json()
    return {
        producto: datoRes,
        datoTipo: datosCategoria,
        productos: datosProductos
    }
}


export default Producto