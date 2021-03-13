import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "../components/NavBar/Layout";
import { useRouter } from 'next/router'
import styles from '../styles/producto.module.css'


export default function Producto() {
    const {
        query: { product }
    } = useRouter()
    return (
        <>
            <Layout>
                <motion.div
                    exit ={{opacity:0}}
                    animate='animate'
                    initial='initial'
                    className={styles.container}
                >
                    <div className="p-2">
                        <div className="p-2 text-sm"><h3>Categorias Tornillos</h3></div>
                        <div className="bg-white rounded-lg border p-8 shadow-xl flex">
                            <div className="p-4 border rounded-lg max-w-lg">
                                <img className="h-96" src="https://image1.jdomni.in/product/CC/86/50/A83AF546ADB726F3867EA85CCF_1509609145430.jpg" alt="test"/>
                            </div>
                        </div>
                        <div className="">
                            <h4></h4>
                        </div>
                    </div>
                </motion.div>
            </Layout>
        </>
    )
}