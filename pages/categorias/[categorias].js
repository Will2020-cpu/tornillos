import { AnimateSharedLayout, motion } from 'framer-motion'
import Head from 'next/head'
import Layout from '../../components/NavBar/Layout'
import styles from '../../styles/categorias.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Chip } from '@material-ui/core';


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



const Categorias = (props) => {
    const { query: { categorias } } = useRouter()
    const router = useRouter()
    return (
        <>
            <Head>
                <title>{categorias}</title>
            </Head>
            <Layout>
                <motion.div
                    exit={{ opacity: 0 }}
                    initial='initial'
                    animate='animate'
                    className="mt-2"
                >
                    <div className="p-1">
                        <h1 className="text-gray-400 text-sm">Categoria <span className="text-black font-medium">{categorias}</span></h1>
                    </div>

                    {/* Section left */}
                    <div className={styles.container}>
                        <div className={styles.leftSection}>
                            <div className={styles.sectionHeader}>
                                <span>Filtrar</span>
                                <div></div>
                            </div>
                            <div className={styles.filterSection}>
                                <div className={styles.filterKey}>
                                    <h1 className="font-medium text-black text-sm my-2 border-b">Diametro</h1>
                                </div>
                                <div className={styles.filterValueList}>
                                    <div className={styles.filterValue}>
                                        {
                                            props.tipos.diametro.map((item, i) => (
                                                <Link  href={{path:'/categorias/[categorias]', pathname:`/categorias/${categorias}`, query:{id:router.query.id, categorias:router.query.categorias, filter_diametro: item.diametro} }} key={i}>
                                                    <Chip
                                                        label={item.diametro}
                                                        color="primary"
                                                        style={{ margin: 2 }}
                                                        clickable
                                                        size="small"
                                                    />
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={styles.filterValueList}>
                                    <h1 className="font-medium text-black text-sm my-2 border-b">Largo</h1>
                                    <label className={styles.filterValue}>
                                        {
                                            props.tipos.largo.map((item, i) => (
                                                <Chip
                                                    label={item.largo}
                                                    color="primary"
                                                    style={{ margin: 2 }}
                                                    clickable
                                                    size="small"
                                                    key={i}
                                                />
                                            ))
                                        }
                                    </label>
                                </div>
                                <div className={styles.filterValueList}>
                                    <h1 className="font-medium text-black text-sm mb-2 border-b">Marca</h1>
                                    <label className={styles.filterValue}>
                                        {
                                            props.tipos.marca.map((item, i) => (
                                                <Chip
                                                    label={item.marca}
                                                    color="primary"
                                                    style={{ margin: 2 }}
                                                    clickable
                                                    size="small"
                                                    key={i}
                                                />
                                            ))
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.leftBorder}>
                        </div>

                        {/* Section Right header*/}
                        <div className={styles.rightSection}>
                            <div className={styles.listingHeader}>
                                <div className={styles.firstHeader}>
                                    <span className={styles.countHeader}>
                                        <span className={styles.categoriaName}>Tornillos</span>
                                    </span>
                                </div>
                                <div className={styles.secondHeader}></div>
                            </div>

                            {/* Section Productos cards */}
                            <AnimateSharedLayout type="crossfade">
                                <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
                                    {
                                        props.productos.map(item => (
                                            <Link href={{ path: '/productos/[producto]', pathname: `/productos/${item.nombre}`, query: { id: item.id, producto: item.nombre } }} key={item.id}>
                                                <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer bg-white max-w-xs p-4 hover:shadow-lg rounded-lg transition duration-100 flex flex-col space-y-4">
                                                    <div className="border rounded-lg">
                                                        <motion.img initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={item.imagen} className="h-90" alt="testing" />
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="w-3/5 overflow-ellipsis overflow-hidden break-normal heroBanner text-sm">{item.nombre}</h4>
                                                        <span className="text-customRed text-sm heroBanner">$ {item.precio}</span>
                                                    </div>
                                                </motion.div>
                                            </Link>
                                        ))
                                    }
                                </motion.div>
                            </AnimateSharedLayout>
                        </div>
                    </div>
                </motion.div>
            </Layout>
        </>
    )
}

Categorias.getInitialProps = async function (context) {
    const { id,filter_diametro } = context.query;
    if(filter_diametro !== undefined){
        const productosDiametro = await fetch(
            `http://localhost:5000/api/tipos/categoria/${id}?filter_diametro=${filter_diametro}`,
        )
        const resTipos = await fetch(
            `http://localhost:5000/api/tipos/${id}/`
        )
        const dataTipos = await resTipos.json();

        const productosDiametroRes = await productosDiametro.json()
        return{
            productos: productosDiametroRes,
            tipos:dataTipos,
        }        
    }


    const resProductos = await fetch(
        `http://localhost:5000/api/productos/categoria/${id}`
    )
    const resTipos = await fetch(
        `http://localhost:5000/api/tipos/${id}`
    )

    const dataProductos = await resProductos.json()
    const dataTipos = await resTipos.json();
    return {
        productos: dataProductos,
        tipos: dataTipos,
    }
}


export default Categorias