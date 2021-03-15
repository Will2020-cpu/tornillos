import { AnimateSharedLayout, motion } from 'framer-motion'
import Head from 'next/head'
import Layout from '../components/NavBar/Layout'
import styles from '../styles/categorias.module.css'
import Link from 'next/link'


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



export default function Categorias() {
    return (
        <>
            <Head>
                <title>Categorias</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <motion.div
                    exit={{ opacity: 0 }}
                    initial='initial'
                    animate='animate'
                    className="mt-2"
                >
                    <div className="p-1">
                        <h1 className="text-gray-400 text-sm">Categoria <span className="text-black font-medium">Tornillos</span></h1>
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
                                    <h1>Caracteristicas</h1>
                                </div>
                                <div className={styles.filterValueList}>
                                    <label className={styles.filterValue}>
                                        <label>
                                            <input type="checkbox" />
                                        </label>
                                        <h1>1 Pulgada </h1>
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
                                    <div>
                                        <input className="border p-1 rounded w-44 focus:outline-none" placeholder="Buscar"/>
                                    </div>
                                </div>
                                <div className={styles.secondHeader}></div>
                            </div>

                            {/* Section Productos cards */}
                            <AnimateSharedLayout type="crossfade">
                                <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
                                    <Link href='/[producto]' as={'test'}>
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