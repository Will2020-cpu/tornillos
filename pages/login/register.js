import Head from 'next/head'
import styles from '../../styles/login.module.css'
import { motion } from 'framer-motion'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField'



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



const Register = () => {
    return (
        <>
            <Head>
                <title>Registrate y guarda tus productos !</title>
            </Head>
            <motion.div
                exit={{ opacity: 0 }}
                initial='initial'
                animate='animate'
            >
                <div className={styles.container}>
                    <div className={styles.main}>
                        <div className={styles.hero}>
                            <div className="p-8"><Link href="/"><a className="text-white">Logo</a></Link></div>
                            <div className={styles.formContainer}>
                                <motion.div variants={fadeInUp} className="bg-white p-12 rounded lg:shadow-lg shadow-none max-w-lg">
                                    <div className="">
                                        <h1 className="lg:text-2xl text-xl font-semibold text-center">¡Hola! Crea tu cuenta</h1>
                                    </div>
                                    <form className="flex space-y-8 flex-col justify-center items-center">
                                        <div className="flex flex-col w-full space-y-4 items-center justify-center mt-5">
                                            <TextField id="standart-basic" label="Nombres" />
                                            <TextField id="standart-basic" label="Email" />
                                            <TextField id="standart-basic" label="Password" />
                                        </div>
                                        <div className=" w-full">
                                            <button className="w-full bg-red-500 p-2 rounded-lg text-xl text-white focus:outline-none">Registrarse</button>
                                        </div>
                                    </form>
                                    <div className=" w-full mt-2">
                                        <Link href="/login/ingresar"><button className="w-full border border-red-500 p-2 rounded-lg text-lg focus:outline-none">Ingresar</button></Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}


export default Register