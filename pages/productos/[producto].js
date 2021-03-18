import { motion, AnimateSharedLayout } from "framer-motion";
import Link from "next/link";
import Layout from "../../components/NavBar/Layout";
import { useRouter } from 'next/router'
import styles from '../../styles/producto.module.css'
import Head from 'next/head'


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



const Producto = (props) => {
    const { query: { producto } } = useRouter();
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
                                    <button className="py-2 px-8 bg-customRed rounded text-white focus:outline-none">Comprar Ahora</button>
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
                                <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
                                    <Link href='/productos/[producto]' as={'/productos/test'}>
                                        <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white max-w-xs p-4 hover:shadow-lg rounded-lg transition duration-100 flex flex-col space-y-4">
                                            <div className="border rounded-lg">
                                                <motion.img layoutId="test" initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src="https://image1.jdomni.in/product/06062019/62/22/DD/1307DF23F8A4097EB9B7C18895_1559810699847.jpg" className="h-90" alt="testing" />
                                            </div>
                                            <div className="">
                                                <h4 className="overflow-ellipsis overflow-hidden break-normal">Tornilloalsudhasdgasjhdhasdahsdahsdasdgfasdgfgad</h4>
                                            </div>
                                        </motion.div>
                                    </Link>
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
    const resProductos = await fetch(
        `http://localhost:5000/api/productos/${id}`
    )
    const datoRes = await resProductos.json()
    const datoTipo = await fetch(
        `http://localhost:5000/api/categorias/${datoRes[0].fk_categorias}`
    )

    const datosCategoria = await datoTipo.json()
    return {
        producto: datoRes,
        datoTipo: datosCategoria
    }
}


export default Producto