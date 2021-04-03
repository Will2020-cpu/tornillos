import Head from 'next/head'
import styles from '../../styles/login.module.css'
import Footer from '../../components/Footer/Footer'
import Link from 'next/link'
import TextField from '@material-ui/core/TextField'




const Ingresar = () => {
    return (
        <>
            <Head>
                <title>Ingresa a tu cuenta!</title>
            </Head>
            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.hero}>
                        <div className="p-8"><Link href="/"><a className="text-white">Logo</a></Link></div>
                        <div className={styles.formContainer}>
                            <div className="bg-white p-12 rounded lg:shadow-lg shadow-none">
                                <div className="">
                                    <h1 className="lg:text-2xl text-xl font-semibold text-center">¡Hola! Ingresa a tu cuenta</h1>
                                </div>
                                <form className="flex space-y-8 flex-col justify-center items-center">
                                    <div className="flex flex-col w-full space-y-4 items-center justify-center mt-5">
                                        <TextField id="standart-basic" label="Email" />
                                        <TextField id="standart-basic" label="Password" />
                                    </div>
                                    <div className="px-4 w-full">
                                        <button className="w-full bg-red-500 p-2 rounded-lg text-xl text-white focus:outline-none">Ingresar</button>
                                    </div>
                                </form>
                                <div className="px-4 w-full mt-2">
                                    <button className="w-full border border-red-500 p-2 rounded-lg text-lg focus:outline-none">Crear cuenta</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}



export default Ingresar