import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/NavBar/Layout";
import { useRouter } from 'next/router'
import styles from '../styles/producto.module.css'
import Head from 'next/head'


export default function Producto() {
    const {
        query: { producto }
    } = useRouter()
    console.log(producto)
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
                        <div className="p-2 text-sm"><h3>Categorias Tornillos</h3></div>
                        <div className="bg-white rounded-lg w-11/12 m-auto border p-8 shadow-2xl flex-col lg:flex-row flex space-x-8">
                            <div className="p-4 border rounded-lg max-w-lg">
                                <img className="h-96 object-cover" src="https://image1.jdomni.in/product/CC/86/50/A83AF546ADB726F3867EA85CCF_1509609145430.jpg" alt="test" />
                            </div>
                            <div className="flex flex-col space-y-4 w-2/3">
                                <div className={`${styles.Title}`}>
                                    <h4 className="overflow-hidden">Tonillo XDXDXDahdjkasdghad aksduhdgasjdgahdgashdgahsdgahgdhasdahgdahgdashgdgahsdghagdhasghdaghd askjksdaskdjasjdkhasdjahdsjkashdj</h4>
                                </div>
                                <div className={styles.caracteristicas}>
                                    <h1 className="font-medium text-2xl mb-7 border-b">Caracteristicas</h1>
                                    <div className="flex space-x-4">
                                        <ul className="space-y-6">
                                            <li className="text-gray-500 text-sm">Tipo :</li>
                                            <li className="text-gray-500 text-sm">Marca:</li>
                                            <li className="text-gray-500 text-sm">Largo :</li>
                                            <li className="text-gray-500 text-sm">Diametro :</li>
                                        </ul>
                                        <ul className="space-y-6">
                                            <li className="text-sm text-black font-medium">Tipo</li>
                                            <li className="text-sm text-black font-medium">Marca</li>
                                            <li className="text-sm text-black font-medium">Largo</li>
                                            <li className="text-sm text-black font-medium">Diametro</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </Layout>
        </>
    )
}